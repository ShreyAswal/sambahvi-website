import { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Building2,
  Truck,
  Globe,
  Cpu,
  Heart,
  CreditCard,
  BookOpen,
} from "lucide-react";

const industries = [
  {
    name: "Retail & Consumer Goods",
    icon: (
      <ShoppingBag className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
  {
    name: "Manufacturing & Infrastructure",
    icon: (
      <Building2 className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
  {
    name: "Logistics & Distribution",
    icon: (
      <Truck className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
  {
    name: "Global Trade & Exports",
    icon: (
      <Globe className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
  {
    name: "Technology & Digital Services",
    icon: (
      <Cpu className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
  {
    name: "Healthcare & Wellness",
    icon: (
      <Heart className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
  {
    name: "Finance & Investments",
    icon: (
      <CreditCard className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
  {
    name: "Education & Training",
    icon: (
      <BookOpen className="w-12 h-12 text-primary-light group-hover:text-primary-vibrant transition-colors" />
    ),
  },
];

export default function IndustriesTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    let req: number;

    const animate = () => {
      if (!paused && containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth / 2;
        let newPos = scrollPos + 1;
        if (newPos >= scrollWidth) newPos = 0;
        containerRef.current.scrollLeft = newPos;
        setScrollPos(newPos);
      }
      req = requestAnimationFrame(animate);
    };

    req = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(req);
  }, [paused, scrollPos]);

  return (
    <section className="py-24 bg-lightGray">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
        Industries We Serve
      </h2>

      <div
        className="overflow-hidden h-64"
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex gap-6 w-max">
          {[...industries, ...industries].map((industry, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 sm:w-52 md:w-56 lg:w-60 p-10 bg-white rounded-2xl shadow-lg text-center group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {industry.icon}
              <h3 className="mt-4 font-semibold text-gray-800">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-amberCustom text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary-vibrant hover:text-white transition">
          Explore All Services
        </button>
      </div>
    </section>
  );
}
