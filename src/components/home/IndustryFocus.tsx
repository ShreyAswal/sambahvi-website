import { Shirt, Gem, Tv, Home, Building2, ShoppingBag } from "lucide-react";
// import { motion } from "framer-motion";
import IndustryModal from "./IndustryModel";
import { useState, useEffect } from "react";

export default function IndustryFocus() {
  const highlighted = [
    {
      icon: (
        <Building2 className="h-12 w-12 text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
      ),
      title: "Coworking Spaces",
      description:
        "Supplying essential lifestyle and tech accessories across work hubs.",
    },
    {
      icon: (
        <ShoppingBag className="h-12 w-12 text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
      ),
      title: "D2C Distribution",
      description:
        "Trusted partner for international brands expanding in India.",
    },
  ];

  const others = [
    {
      icon: (
        <Shirt className="h-10 w-10 text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
      ),
      title: "Fashion & Apparels",
      description:
        "Trendy and high-quality lifestyle products for the modern consumer.",
    },
    {
      icon: (
        <Gem className="h-10 w-10 text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
      ),
      title: "Luxury Accessories",
      description: "Premium global brands delivering elegance and durability.",
    },
    {
      icon: (
        <Tv className="h-10 w-10 text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
      ),
      title: "Consumer Durables",
      description: "Reliable products that elevate everyday living.",
    },
    {
      icon: (
        <Home className="h-10 w-10 text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
      ),
      title: "Consumer Appliances",
      description:
        "Smart appliances making households efficient and connected.",
    },
  ];

  const [modalData, setModalData] = useState({
    open: false,
    title: "",
    images: [] as string[],
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalData.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalData.open]);

  return (
    <section className="relative py-20 bg-black text-white px-6 md:px-12 lg:px-20">
      {/* subtle gold accent band */}
      {/* <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#FFD966]" /> */}

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12">
          Industry Focus
        </h2>

        {/* Highlighted Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {highlighted.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0b0b0b] rounded-xl p-10 shadow-[0_0_18px_rgba(212,175,55,0.08)] hover:shadow-[0_0_25px_rgba(212,175,55,0.14)] transition duration-300 cursor-pointer border border-transparent hover:border-[#D4AF37]"
              onClick={() =>
                setModalData({
                  open: true,
                  title: item.title,
                  images:
                    item.title === "Coworking Spaces"
                      ? [
                          "assets/office/office1.webp",
                          "assets/office/office2.webp",
                          "assets/office/office3.webp",
                        ]
                      : [
                          "assets/distribution/d2c5.jpg",
                          "assets/distribution/d2c2.jpg",
                          "assets/distribution/d2c1.jpg",
                        ],
                })
              }
            >
              {/* subtle featured tag preserved, now gold
              <div className="absolute top-3 left-3 bg-[#D4AF37] text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Featured
              </div> */}

              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/80 text-sm transition duration-300 md:transform md:translate-y-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Industries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {others.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0b0b0b] rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-transparent hover:border-[#D4AF37]"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </motion.div> */}
      {modalData.open && (
        <IndustryModal
          isOpen={modalData.open}
          onClose={() => setModalData({ open: false, title: "", images: [] })}
          images={modalData.images}
          title={modalData.title}
        />
      )}
    </section>
  );
}
