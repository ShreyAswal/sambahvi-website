// src/components/solutions/CTASection.tsx
import React from "react";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, ctaText, ctaLink }) => (
     <motion.div
      className=" to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
  <section className="py-16 text-center bg-white">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
    <a
      href={ctaLink}
      className="inline-block px-8 py-3 bg-primary-primary text-white font-semibold rounded-full shadow hover:bg-accent transition-colors duration-300"
    >
      {ctaText}
    </a>
  </section>
  </motion.div>
);

export default CTASection;
