// src/components/solutions/IndustriesPage.tsx
import React from "react";
import HeroBannerIndustries from "../components/solutions/HeroBannerIndustries";
import IndustriesGrid from "../components/solutions/IndustriesGrid";
import CTASection from "../components/solutions/CTASection";
import { Shirt, Gem, Tv, Home, Building2, ShoppingBag } from "lucide-react";

const industries = [
  {
    icon: <Shirt className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Fashion & Apparels",
    description: "Trendy and high-quality lifestyle products for the modern consumer.",
  },
  {
    icon: <Gem className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Luxury Accessories",
    description: "Premium global brands delivering elegance and durability.",
  },
  {
    icon: <Tv className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Consumer Durables",
    description: "Reliable products that elevate everyday living.",
  },
  {
    icon: <Home className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Consumer Appliances",
    description: "Smart appliances making households efficient and connected.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Coworking Spaces",
    description: "Supplying essential lifestyle and tech accessories across work hubs.",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
    title: "D2C Distribution",
    description: "Trusted partner for international brands expanding in India.",
  },
];

const IndustriesPage: React.FC = () => (
  <>
    <HeroBannerIndustries
      title="Industries We Serve"
      tagline="Empowering diverse sectors with innovative solutions and trusted partnerships."
    />
<section className="bg-gradient-to-b from-white to-gray-50 py-20 pt-24 pb-20 px-6 md:px-12 lg:px-2">
  <div className="max-w-7xl mx-auto text-center">
        <IndustriesGrid industries={industries} />
      </div>
    </section>
    <CTASection
      title="Ready to partner with us?"
      subtitle="Discover how Sambahvi Agencies can help your brand grow in the Indian market."
      ctaText="Contact Us"
      ctaLink="/contact"
    />
  </>
);

export default IndustriesPage;
