import { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Plane,
  Gift,
  HeartPulse,
  Shirt,
  Cpu,
  Building2,
  Package,
} from "lucide-react";

export default function IndustriesTeaser() {
  const industries = [
    {
      icon: (
        <ShoppingBag className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "E-Commerce & Online Retailers",
    },
    {
      icon: (
        <Plane className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "Travel & Hospitality",
    },
    {
      icon: (
        <Gift className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "Corporate & Gifting Solutions",
    },
    {
      icon: (
        <HeartPulse className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "Health & Wellness",
    },
    {
      icon: (
        <Shirt className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "Fashion & Lifestyle Retail",
    },
    {
      icon: (
        <Cpu className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "Technology & Consumer Electronics",
    },
    {
      icon: (
        <Building2 className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "Co-Working Spaces",
    },
    {
      icon: (
        <Package className="w-10 h-10 text-white group-hover:text-[#D4AF37] transition-colors duration-200" />
      ),
      name: "Distribution & Logistics Partners",
    },
  ];

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
    <section className="relative py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">
            Industries We Serve
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            We empower businesses across diverse sectors by providing premium
            products that combine style, functionality, and innovation — helping
            partners grow and enhance customer experiences.
          </p>
        </div>

        {/* Auto-Scroll Container */}
        <div
          className="overflow-hidden h-52 sm:h-56 lg:h-60 cursor-pointer pt-6 sm:pt-8"
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex gap-3 sm:gap-4 md:gap-6 w-max">
            {[...industries, ...industries].map((industry, idx) => (
              <div
                key={idx}
                className="
          flex-shrink-0
          w-32 xs:w-36 sm:w-44 md:w-52 lg:w-60
          p-4 sm:p-6 md:p-8
          bg-[#0b0b0b] rounded-xl sm:rounded-2xl
          shadow-md border border-transparent text-center
          group transition-all duration-200 hover:border-[#D4AF37]/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.06)]
        "
              >
                <div className="flex justify-center mb-3 sm:mb-4 text-xl sm:text-2xl">
                  {industry.icon}
                </div>
                <h3 className="mt-1 sm:mt-2 font-semibold text-white text-sm sm:text-base">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="relative text-center mt-16 max-w-3xl mx-auto">
          <p className="relative text-white/80 text-lg leading-relaxed z-20">
            <span className="font-semibold text-[#D4AF37]">Our Approach:</span>{" "}
            We bridge innovation, functionality, and style — helping our
            partners scale their business while delivering exceptional value to
            their customers.
          </p>

          <a
            href="/industries"
            className="inline-block mt-10 px-8 py-3 rounded-lg font-semibold
             text-black bg-[#D4AF37]
             hover:bg-[#B8860B] hover:text-white
             transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore All Industries
          </a>
        </div>
      </div>
    </section>
  );
}
