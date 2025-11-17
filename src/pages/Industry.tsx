// src/components/solutions/IndustriesPage.tsx
import React from "react";
import IndustriesGrid from "../components/solutions/IndustriesGrid";
import CTASection from "../components/solutions/CTASection";
// import { Shirt, Gem, Tv, Home, Building2, ShoppingBag } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

const IndustriesPage: React.FC = () => (
  <>
    <HeroBanner
      title="Industries"
      tagline="We empower businesses across diverse sectors by providing premium products that combine style, functionality, and innovation. Our collaborations help partners grow, scale, and enhance customer experiences."
    />
    <IndustriesGrid />

    <CTASection
      title="Ready to partner with us?"
      subtitle="Discover how Sambhavi Agencies can help your brand grow in the Indian market."
      ctaText="Contact Us"
      ctaLink="/contact"
    />
  </>
);

export default IndustriesPage;
