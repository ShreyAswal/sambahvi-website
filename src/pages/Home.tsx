import Hero from "../components/home/Hero";
import BrandsSection from "../components/home/BrandsSection";
import Competencies from "../components/home/Competencies";
import IndustryFocus from "../components/home/IndustryFocus";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsSection />
      <IndustryFocus />
      {/* <Competencies /> */}
      <ContactCTA />
    </>
  );
}
