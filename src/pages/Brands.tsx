import BrandShowcase from "../components/brands/BrandShowcase";
import HeroBanner from "../components/HeroBanner";

export default function Brands() {
  return (
    <>
    <HeroBanner
            title="Our Brand Partners"
            tagline="India's trusted gateway for global and premium lifestyle brands."
          />
          {/* <BrandLogosGrid /> */}
          <BrandShowcase />
    </>
    
  )
}
