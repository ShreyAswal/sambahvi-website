// src/components/solutions/CTASection.tsx
import React from "react";
import { motion } from "framer-motion";
import industryImage from "../../../public/assets/finalAlllPagesImages/industries-modern-office-and-warehouse.png";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <motion.div
      className="to-gray-50 rounded-2xl shadow-md hover:shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="py-16 bg-[#0b0b0b] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text / CTA */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">
                {title}
              </h2>
              <p className="text-lg text-white/80 mb-6">{subtitle}</p>
              <a
                href={ctaLink}
                className="inline-block px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-full shadow hover:bg-[#B8860B] transition-colors duration-300"
              >
                {ctaText}
              </a>
            </div>

            {/* Image Card (larger, background contain to show full combined image) */}
            <div className="flex justify-center md:justify-end">
              <div
                className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg bg-[#0f0f10]"
                style={{ minHeight: 280 }}
              >
                <div
                  aria-hidden
                  style={{
                    backgroundImage: `url(${industryImage})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full h-64 md:h-80 lg:h-[520px]"
                />
                <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white">
                  <p className="text-sm text-white/80">
                    Explore how we help brands grow across retail, e-commerce,
                    and distribution channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CTASection;
