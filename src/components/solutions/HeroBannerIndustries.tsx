// src/components/solutions/HeroBannerIndustries.tsx
import React from "react";

interface HeroBannerIndustriesProps {
  title: string;
  tagline: string;
}

const HeroBannerIndustries: React.FC<HeroBannerIndustriesProps> = ({ title, tagline }) => (
  <section className="bg-gradient-to-b from-[#2563eb] to-[#1490ca] text-white text-center py-24 rounded-b-[80px] ">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">{tagline}</p>
  </section>
);

export default HeroBannerIndustries;
