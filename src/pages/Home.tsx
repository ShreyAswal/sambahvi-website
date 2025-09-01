import Hero from "../components/Hero";
import BrandsSection from "../components/BrandsSection";
import Competencies from "../components/Competencies";
import Footer from "../components/Footer";
import IndustryFocus from "../components/IndustryFocus";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsSection />
      <IndustryFocus />
      {/* <Competencies /> */}
      <ContactCTA />
      {/* <Footer /> */}
    </>
  );
}
