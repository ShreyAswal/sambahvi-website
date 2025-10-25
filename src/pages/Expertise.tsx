import BusinessModel from "../components/expertise/BusinessModel";
import ExpertiseAreas from "../components/expertise/ExpertiseAreas";
import HeroBanner from "../components/HeroBanner";

export default function OurExpertise() {
  return (
    <>
      <HeroBanner
        title="Our Expertise"
        tagline="Merging strategy, innovation, and execution to deliver real impact."
      />
      <BusinessModel />
      <ExpertiseAreas />
      {/* <WhyChooseUs /> */}
      {/* <CTASection /> */}
    </>
  );
}
