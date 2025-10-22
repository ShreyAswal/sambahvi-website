import Hero from "../components/home/Hero";
import LifestyleDistribution from "../components/home/LifestyleDistribution"
import BrandsAndPartnersSection from "../components/home/BrandsAndPartnersSection";
// import Competencies from "../components/home/Competencies";
import IndustryFocus from "../components/home/IndustryFocus";
// import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LifestyleDistribution />
      <BrandsAndPartnersSection />
      <IndustryFocus />
      {/* <Competencies /> */}
      {/* <ContactCTA /> */}
    </>
  );
}
