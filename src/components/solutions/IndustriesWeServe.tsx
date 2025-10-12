// src/components/solutions/IndustriesWeServe.tsx
// import { Shirt, Gem, Tv, Home, Building2, ShoppingBag } from "lucide-react";
import IndustryCard from "./IndustryCard";

// const industries = [
//   {
//     icon: <Shirt className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
//     title: "Fashion & Apparels",
//     description: "Trendy and high-quality lifestyle products for the modern consumer.",
//   },
//   {
//     icon: <Gem className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
//     title: "Luxury Accessories",
//     description: "Premium global brands delivering elegance and durability.",
//   },
//   {
//     icon: <Tv className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
//     title: "Consumer Durables",
//     description: "Trusted essentials designed to enhance daily life.",
//   },
//   {
//     icon: <Home className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
//     title: "Consumer Appliances",
//     description: "Smart appliances making households efficient and connected.",
//   },
//   {
//     icon: <Building2 className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
//     title: "Coworking Spaces",
//     description: "Supplying essential lifestyle and tech accessories across work hubs.",
//   },
//   {
//     icon: <ShoppingBag className="h-10 w-10 text-primary-primary group-hover:text-accent transition-colors duration-300" />,
//     title: "D2C Distribution",
//     description: "Trusted partner for international brands expanding in India.",
//   },
// ];

export default function IndustriesWeServe({
  industries: industries,
}: {
  industries: { icon: React.ReactNode; title: string; description: string }[];
}) {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <IndustryCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
