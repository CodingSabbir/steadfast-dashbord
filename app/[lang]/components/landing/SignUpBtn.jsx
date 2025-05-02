"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
const SignUpBtn = ({ dict }) => {
  const [language, setLanguage] = useState("en");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLang = params.lang;

  useEffect(() => {
    if (currentLang === "bn" || currentLang === "en") {
      setLanguage(currentLang);
    } else {
      setLanguage("en");
    }
  }, [currentLang]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "bn" : "en";
    const segments = pathname.split("/");
    segments[1] = newLang;
    setLanguage(newLang);
    router.push(segments.join("/"));
  };
  return (
    <div>
      <Link href={`/${language}/landing/login`}>
        {" "}
        <span className="font-semibold px-2 text-[#00b795] cursor-pointer">
          {dict.signupPage.loginLink}
        </span>
      </Link>
    </div>
  );
};

export default SignUpBtn;
