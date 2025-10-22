// src/components/solutions/IndustriesPage.tsx
import React from "react";
import IndustriesGrid from "../components/solutions/IndustriesGrid";
import CTASection from "../components/solutions/CTASection";
// import { Shirt, Gem, Tv, Home, Building2, ShoppingBag } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

// const industries = [
//   {
//     icon: (
//       <Shirt className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />
//     ),
//     title: "Fashion & Apparels",
//     description:
//       "Trendy and high-quality lifestyle products for the modern consumer.",
//   },
//   {
//     icon: (
//       <Gem className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />
//     ),
//     title: "Luxury Accessories",
//     description: "Premium global brands delivering elegance and durability.",
//   },
//   {
//     icon: (
//       <Tv className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />
//     ),
//     title: "Consumer Durables",
//     description: "Trusted essentials designed to enhance daily life.",
//   },
//   {
//     icon: (
//       <Home className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />
//     ),
//     title: "Consumer Appliances",
//     description: "Smart appliances making households efficient and connected.",
//   },
//   {
//     icon: (
//       <Building2 className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />
//     ),
//     title: "Coworking Spaces",
//     description:
//       "Supplying essential lifestyle and tech accessories across work hubs.",
//   },
//   {
//     icon: (
//       <ShoppingBag className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />
//     ),
//     title: "D2C Distribution",
//     description: "Trusted partner for international brands expanding in India.",
//   },
// ];

const IndustriesPage: React.FC = () => (
  <>
    <HeroBanner
      title="Industries"
      tagline="We empower businesses across diverse sectors by providing premium products that combine style, functionality, and innovation. Our collaborations help partners grow, scale, and enhance customer experiences."
    />
    <IndustriesGrid />

    <CTASection
      title="Ready to partner with us?"
      subtitle="Discover how Sambahvi Agencies can help your brand grow in the Indian market."
      ctaText="Contact Us"
      ctaLink="/contact"
    />
  </>
);

export default IndustriesPage;
