

import ClientReview from "./components/landing/ClientReview";
import DeliveryCalculator from "./components/landing/DeliveryCalc";
import Accordion from "./components/landing/Faq";
import FeaturesLogo from "./components/landing/FeaturesLogo";
import HeroSection from "./components/landing/HeroSection";
import ServicesSection from "./components/landing/ServiceCard";
import TrackParcel from "./components/landing/TrackParcel";
import LandingLayout from "./landing/layout";




import { getDictionary } from "./dictionaries/dictionaries";
export default async function Home({params:{lang}}) {
 const dict= await getDictionary(lang)
  return (
    <LandingLayout>
        <HeroSection dict={dict}/>
        <TrackParcel dict={dict}/>
        <FeaturesLogo />
        <ServicesSection dict={dict}/>
        <DeliveryCalculator dict={dict}/>
        <ClientReview dict={dict}/>
        <Accordion dict={dict}/>
    </LandingLayout>
  );
}
