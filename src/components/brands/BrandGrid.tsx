// src/components/brands/BrandGrid.tsx
import React from "react";

interface BrandGridProps {
  logos: string[];
  onLogoClick?: (idx: number) => void;
}

const BrandGrid: React.FC<BrandGridProps> = ({ logos, onLogoClick }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-10 justify-items-center">
    {logos.map((logo, idx) => (
      <button key={idx} onClick={() => onLogoClick && onLogoClick(idx)} className="focus:outline-none">
        <img src={logo} alt="Brand Logo" className="w-28 h-28 object-contain rounded-xl shadow bg-white hover:scale-105 transition-transform duration-300" />
      </button>
    ))}
  </div>
);

export default BrandGrid;
