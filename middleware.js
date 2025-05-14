
// import { NextResponse } from "next/server";
// import {match} from "@formatjs/intl-localematcher"
// import Negotiator from 'negotiator'

// let defaultLocale= "en"
// let locales = ["en", "bn", "fr", "es", "de"];
// function getLocale(request){
// const acceptedLanguage=request.headers.get("accept-language") ?? 
// undefined;
// const headers = { 'accept-language': acceptedLanguage }
// const languages = new Negotiator({ headers }).languages()
// return match(languages, locales, defaultLocale)
// }
// export default function Middleware(request){
//    const pathName= request.nextUrl.pathname
// const pathNameIsMissingLocale=   locales.every
// (locale =>
//      !pathName.startsWith(`/${locale}`) &&
//      !pathName.startsWith(`/${locale}/`)
//     ); 

//     if(pathNameIsMissingLocale){
//         const locale=getLocale(request)
//         return NextResponse.redirect(
//             new URL(`${locale}/${pathName}`,request.url))
//     }
//      return NextResponse.next();
// }

// export const config = {
//     matcher: ['/((?!_next).*)']
      
//   }




import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocale = "en";
let locales = ["en", "bn", "fr", "es", "de"];

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if path already includes a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const newPathname =
      pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|img|public|api).*)"],
};
