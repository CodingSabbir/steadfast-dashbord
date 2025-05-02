"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
const HeroBtn = ({ dict }) => {
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
    <div className="text-center md:text-start">
      <button className="cursor-pointer px-7 py-3.5 bg-[#00b795]  font-semibold text-white text-[18px] rounded hover:bg-[#00b795] transition-all ">
        <Link href={`/${language}/landing/sign-up`}>
          {" "}
          {dict.homePage.heroSection.button}
        </Link>
      </button>
    </div>
  );
};

export default HeroBtn;
