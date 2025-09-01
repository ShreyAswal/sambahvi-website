// src/components/solutions/IndustriesGrid.tsx
import React from "react";
import IndustryCard from "./IndustryCard";

interface Industry {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IndustriesGridProps {
  industries: Industry[];
}

const IndustriesGrid: React.FC<IndustriesGridProps> = ({ industries }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 to-gray-50">
    {industries.map((item, idx) => (
      <IndustryCard key={idx} {...item} />
    ))}
  </div>
);

export default IndustriesGrid;
