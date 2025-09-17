// src/components/brands/ShuffleHero.tsx
import React from "react";

interface ShuffleHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  logos: string[];
}

const ShuffleHero: React.FC<ShuffleHeroProps> = ({ title, description, ctaText, ctaLink, logos }) => {
  // Shuffle effect logic can be added here
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16">
      {/* Left Side: Title, Description, CTA */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <a href={ctaLink} className="inline-block px-8 py-3 bg-primary-primary text-white font-semibold rounded-full shadow hover:bg-accent transition-colors duration-300">
          {ctaText}
        </a>
      </div>
      {/* Right Side: Logo Grid */}
      <div className="md:w-1/2 grid grid-cols-3 gap-6 justify-items-center">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt="Brand Logo" className="w-24 h-24 object-contain rounded-xl shadow-md bg-white" />
        ))}
      </div>
    </section>
  );
};

export default ShuffleHero;
