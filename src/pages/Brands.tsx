import BrandLogosGrid from "../components/brands/BrandLogosGrid";
import BrandShowcase from "../components/brands/BrandShowcase";
import HeroBanner from "../components/HeroBanner";

export default function Brands() {
  return (
    <>
    <HeroBanner
            title="About Sambahvi Agencies"
            tagline="Empowering brands. Enabling growth. Delivering trust."
          />
          <BrandLogosGrid />
          <BrandShowcase />
    </>
    
  )
}
