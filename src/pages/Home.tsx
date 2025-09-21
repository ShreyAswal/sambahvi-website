import Hero from "../components/home/Hero";
import BrandsAndPartnersSection from "../components/home/BrandsAndPartnersSection";
// import Competencies from "../components/home/Competencies";
import IndustryFocus from "../components/home/IndustryFocus";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsAndPartnersSection />
      <IndustryFocus />
      {/* <Competencies /> */}
      <ContactCTA />
    </>
  );
}
