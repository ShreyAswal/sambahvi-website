import { motion } from "framer-motion";
import {
  ShoppingBag,
  Plane,
  Gift,
  HeartPulse,
  Shirt,
  Laptop,
  Building2,
  Truck,
} from "lucide-react";
import { useState, useEffect } from "react";
import IndustryModal from "./IndustryModal";

export default function IndustriesWeServe() {
  const [modalData, setModalData] = useState({
    open: false,
    title: "",
    description: "",
    images: [] as string[],
  });

  useEffect(() => {
    document.body.style.overflow = modalData.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalData.open]);

  const highlighted = [
    {
      Icon: Building2,
      title: "Co-Working Spaces",
      description:
        "Flexible product displays and lifestyle solutions for co-working hubs — enhancing productivity, aesthetics, and retail touchpoints.",
      images: [
        "/assets/office/office1.webp",
        "/assets/office/office2.webp",
        "/assets/office/office3.webp",
        "/assets/office/office4.jpg",
        "/assets/office/office5.jpg",
        "/assets/office/office6.jpg",
        "/assets/office/office7.jpg",
        "/assets/office/office8.jpg",
        "/assets/office/office9.jpg",
        "/assets/office/office10.jpg",
        "/assets/office/office11.jpg",
        "/assets/office/office12.jpg",
        "/assets/office/office13.jpg",
      ],
    },
    {
      Icon: Truck,
      title: "Distribution & Logistics Partners",
      description:
        "Scalable partnerships and bulk-ready inventory designed for smooth nationwide operations.",
      images: [
        "/assets/distribution/d2c5.jpg",
        "/assets/distribution/d2c1.jpg",
        "/assets/distribution/d2c2.jpg",
        "/assets/distribution/d2c3.jpg",
        "/assets/distribution/d2c4.jpg",
        "/assets/distribution/d2c6.jpg",
        "/assets/distribution/d2c7.jpg",
        "/assets/distribution/d2c8.jpg",
      ],
    },
  ];

  const others = [
    {
      Icon: Plane,
      title: "Travel & Hospitality",
      description:
        "Premium luggage, organizers, and accessories crafted to elevate guest experiences and simplify travel.",
    },
    {
      Icon: Gift,
      title: "Corporate & Gifting Solutions",
      description:
        "Smart, branded gadgets and accessories ideal for employee rewards, client gifting, and events.",
    },
    {
      Icon: HeartPulse,
      title: "Health & Wellness",
      description:
        "Massage devices and ergonomic accessories for gyms, wellness centers, and physiotherapy providers.",
    },
    {
      Icon: Shirt,
      title: "Fashion & Lifestyle Retail",
      description:
        "Trend-forward backpacks, sunglasses, and travel gear merging style with practicality.",
    },
    {
      Icon: Laptop,
      title: "Technology & Consumer Electronics",
      description:
        "Cutting-edge accessories, protection gear, and audio solutions for modern consumers.",
    },
    {
      Icon: ShoppingBag,
      title: "E-Commerce & Online Retailers",
      description:
        "Curated travel, lifestyle, and electronic accessories designed to boost online engagement, elevate brand stores, and scale digital sales.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0b0b0b] px-6 md:px-12 lg:px-20 overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 1 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-16">
          Industries We Serve
        </h2>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {highlighted.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setModalData({
                  open: true,
                  title: item.title,
                  description: item.description,
                  images: item.images,
                })
              }
              className="group relative bg-[#0f0f10] border border-transparent hover:border-[#D4AF37]/20 rounded-2xl p:10 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.12)] cursor-pointer overflow-hidden transition-all duration-500"
            >
              <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Featured
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <item.Icon className="w-14 h-14 text-white" />
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/80 max-w-md">
                  {item.description.slice(0, 120)}...
                </p>
                <button className="mt-4 bg-[#D4AF37] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B8860B] transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Other Industries Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 justify-center justify-items-center relative z-10 cursor-pointer">
          {others.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={
                "group relative bg-[#0f0f10] text-white border border-transparent rounded-2xl shadow-sm overflow-hidden transition-all duration-500 w-full max-w-[320px]"
              }
            >
              {/* Mobile (always visible) layout */}
              <div className="flex flex-col items-center justify-center text-center p-8 h-auto md:hidden">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center rounded-lg p-3 bg-white">
                    <Icon className="w-12 h-12 text-[#D4AF37]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {description}
                </p>
              </div>

              {/* Desktop / Tablet Hover Layout */}
              <div className="hidden md:flex flex-col items-center justify-center text-center p-8 h-64 relative z-10">
                <div className="mb-4 transition-transform duration-500 ease-out group-hover:-translate-y-10">
                  <div className="inline-flex items-center justify-center rounded-lg p-3 bg-black transform transition-transform duration-300 scale-100 group-hover:scale-110 opacity-90 group-hover:opacity-100">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white transition-all duration-500 ease-out group-hover:-translate-y-10 opacity-100 group-hover:opacity-0">
                  {title}
                </h3>
              </div>

              {/* Hover reveal for medium+ */}
              <div
                className="hidden md:block absolute left-0 right-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-450 ease-in-out"
                style={{ transitionDuration: "420ms" }}
              >
                <div className="p-6 bg-gradient-to-b from-[#D4AF37]/95 to-transparent text-white rounded-b-2xl">
                  <p className="text-sm md:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Glow outline on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl transition-shadow duration-400"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div
                    style={{
                      boxShadow:
                        "0 12px 30px rgba(212,175,55,0.08), 0 6px 18px rgba(212,175,55,0.06), inset 0 1px 0 rgba(255,255,255,0.02)",
                    }}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {modalData.open && (
        <IndustryModal
          isOpen={modalData.open}
          onClose={() =>
            setModalData({
              open: false,
              title: "",
              description: "",
              images: [],
            })
          }
          title={modalData.title}
          description={modalData.description}
          images={modalData.images}
        />
      )}
    </section>
  );
}
