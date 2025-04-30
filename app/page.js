"use client";

import ClientReview from "./components/landing/ClientReview";
import DeliveryCalculator from "./components/landing/DeliveryCalc";
import Accordion from "./components/landing/Faq";
import FeaturesLogo from "./components/landing/FeaturesLogo";
import HeroSection from "./components/landing/HeroSection";
import ServicesSection from "./components/landing/ServiceCard";
import TrackParcel from "./components/landing/TrackParcel";
import LandingLayout from "./landing/layout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <LandingLayout>
        <HeroSection />
        <TrackParcel />
        <FeaturesLogo />
        <ServicesSection/>
        <DeliveryCalculator/>
        <ClientReview/>
        <Accordion/>
    </LandingLayout>
  );
}
