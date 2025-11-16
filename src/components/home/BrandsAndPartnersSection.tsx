import { motion } from "framer-motion";
import BrandLogosGrid from "./BrandLogosGrid";
import PartnersLogosGrid from "./PartnersLogosGrid";

export default function BrandsAndPartnersSection() {
  return (
    <section className="relative py-20 bg-[#FFF4E0] text-[#1F2937]">
      {/* Soft Mist background — brighter separator between dark sections */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="block text-sm md:text-base text-[#D4AF37] font-medium tracking-wide mb-2">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] leading-snug">
            Trusted by Global & Indian Leaders
          </h2>
        </div>

        {/* Brands Section */}
        <div className="mb-20">
          <div className="w-full p-8 bg-transparent">
            <h3 className="text-2xl font-semibold text-[#1F2937] mb-6 text-center">Brands</h3>
            <p className="text-[#1F2937]/80 text-center mb-10 max-w-2xl mx-auto">
              Exclusive distributor for world-renowned lifestyle and tech brands.
            </p>

            <BrandLogosGrid />

            {/* CTA for Brands */}
            <div className="text-center mt-8">
              <a
                href="/brands"
                className="inline-flex items-center gap-2 font-semibold text-[#1F2937] relative group"
              >
                Explore All Brands
                <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]">→</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-20" />

        {/* Partners Section */}
        <div>
          <h3 className="text-2xl font-semibold text-[#1F2937] mb-6 text-center">Retail Partners</h3>
          <p className="text-[#1F2937]/80 text-center mb-10 max-w-2xl mx-auto">
            Partnered with India’s leading marketplaces to deliver premium
            products closer to consumers.
          </p>
          <PartnersLogosGrid />
          {/* CTA for Partners */}
          <div className="text-center mt-8">
            <a
              href="/channels"
              className="inline-flex items-center gap-2 font-semibold text-[#1F2937] relative group"
            >
              See All Partners
              <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]">→</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
