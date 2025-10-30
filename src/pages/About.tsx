import HeroBanner from "../components/HeroBanner";
import CompanyStory from "../components/about/CompanyStory";
import VisionMission from "../components/about/VisionMission";
import ValuesGrid from "../components/about/ValuesGrid";
import IndustriesTeaser from "../components/about/IndustriesTeaser";
import CompanyTimeline from "../components/about/CompanyTimeline";
import LeadershipTeam from "../components/about/LeadershipTeam";

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Sambahvi Agencies"
        tagline="Empowering brands. Enabling growth. Delivering trust."
      />
      <CompanyStory />
      <LeadershipTeam />
      <CompanyTimeline />
      <VisionMission />
      <ValuesGrid />
      <IndustriesTeaser />
    </>
  );
}
