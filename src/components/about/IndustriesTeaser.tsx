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
      icon: <ShoppingBag className="w-10 h-10 text-[#0FA4AF]" />,
      name: "E-Commerce & Online Retailers",
    },
    {
      icon: <Plane className="w-10 h-10 text-[#0FA4AF]" />,
      name: "Travel & Hospitality",
    },
    {
      icon: <Gift className="w-10 h-10 text-[#0FA4AF]" />,
      name: "Corporate & Gifting Solutions",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-[#0FA4AF]" />,
      name: "Health & Wellness",
    },
    {
      icon: <Shirt className="w-10 h-10 text-[#0FA4AF]" />,
      name: "Fashion & Lifestyle Retail",
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#0FA4AF]" />,
      name: "Technology & Consumer Electronics",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#0FA4AF]" />,
      name: "Co-Working Spaces",
    },
    {
      icon: <Package className="w-10 h-10 text-[#0FA4AF]" />,
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
    <section className="relative py-24 bg-gradient-to-b from-[#024950]/10 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003135] mb-4">
            Industries We Serve
          </h2>
          <p className="text-[#024950] max-w-2xl mx-auto leading-relaxed">
            We empower businesses across diverse sectors by providing premium
            products that combine style, functionality, and innovation — helping
            partners grow and enhance customer experiences.
          </p>
        </div>

        {/* Auto-Scroll Container */}
        <div
          className="overflow-hidden h-60 lg:h-56 cursor-pointer pt-8"
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex gap-6 w-max">
            {[...industries, ...industries].map((industry, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-48 sm:w-52 md:w-56 lg:w-60 p-8 bg-white/90 rounded-2xl shadow-md border border-[#AFDDE5]/60 text-center group transition-all duration-200 hover:bg-[#AFDDE5]"
              >
                <div className="flex justify-center mb-4">{industry.icon}</div>
                <h3 className="mt-2 font-semibold text-[#003135] text-base">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section with top fade */}
        <div className="relative text-center mt-16 max-w-3xl mx-auto">
          {/* Top fade gradient */}
          <div
            className="absolute top-0 left-0 w-full h-8 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, #F3FAFB 0%, rgba(243,250,251,0) 100%)",
            }}
          />
          <p className="relative text-[#024950] text-lg leading-relaxed z-20">
            <span className="font-semibold text-[#0FA4AF]">Our Approach:</span>{" "}
            We bridge innovation, functionality, and style — helping our
            partners scale their business while delivering exceptional value to
            their customers.
          </p>
          
          <a
            href="/industries"
            className="inline-block mt-10 px-8 py-3 rounded-lg font-semibold
             text-white bg-primary-primary
             hover:bg-primary-light hover:text-gray-900
             transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore All Industries
          </a>
        </div>
      </div>
    </section>
  );
}
