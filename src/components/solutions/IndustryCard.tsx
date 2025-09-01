// src/components/solutions/IndustryCard.tsx
import React from "react";

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description }) => (
  <div className="group relative bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-gray-200 hover:border-primary-primary">
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
        {description}
      </p>
    </div>
  </div>
);

export default IndustryCard;
