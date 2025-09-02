import { motion } from "framer-motion";

interface HeroBannerProps {
  title: string;
  tagline: string;
}

export default function HeroBanner({ title, tagline }: HeroBannerProps) {
  return (
    <section>
    <motion.div
      className="bg-gradient-to-b from-[#2563eb] to-[#1490ca] text-white text-center py-24 rounded-b-[80px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
      <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
        {tagline}
      </p>
    </motion.div>
    </section>
  );
}
