import HeroBanner from "../components/about/HeroBanner";
import CompanyStory from "../components/about/CompanyStory";
import VisionMission from "../components/about/VisionMission";
import ValuesGrid from "../components/about/ValuesGrid";
import IndustriesTeaser from "../components/about/IndustriesTeaser";
import CompanyTimeline from "../components/about/CompanyTimeline";

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Sambahvi Agencies"
        tagline="Empowering brands. Enabling growth. Delivering trust."
      />
      <CompanyStory />
      <VisionMission />
      <CompanyTimeline />
      <ValuesGrid />
      <IndustriesTeaser
        title="Industries We Serve"
        subtitle="We help businesses across sectors scale and innovate."
        ctaText="Explore Services"
        ctaLink="/services"
        industries={[
          "Consumer Electronics",
          "Retail & E-commerce",
          "Healthcare",
          "Finance & Banking",
          "FMCG",
          "Education",
        ]}
      />
    </>
  );
}
