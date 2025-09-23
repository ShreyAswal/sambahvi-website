import ChannelPartnersIntro from "../components/channels/ChannelPartnersIntro";
import PartnersLogosGrid from "../components/channels/PartnersLogosGrid";
import HeroBanner from "../components/HeroBanner";

export default function Channels() {
  return (
    <>
      <HeroBanner
        title="Our Channel Partners"
        tagline="Collaborating with leading platforms to deliver our brands to customers everywhere."
      />
      <ChannelPartnersIntro />
      <PartnersLogosGrid />
    </>
  );
}
