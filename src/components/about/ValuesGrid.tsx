import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users2, Layers, Globe2 } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#0FA4AF]" />,
    title: "Innovation & Adaptability",
    text: "We anticipate change and continuously redefine possibilities to stay ahead of the curve.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0FA4AF]" />,
    title: "Integrity & Trust",
    text: "Our relationships are built on transparency, ethics, and long-term commitment.",
  },
  {
    icon: <Users2 className="w-6 h-6 text-[#0FA4AF]" />,
    title: "Collaboration & Partnership",
    text: "We measure success through the growth of our partners — your win is our win.",
  },
  {
    icon: <Layers className="w-6 h-6 text-[#0FA4AF]" />,
    title: "Resilience & Experience",
    text: "Three decades of cross-category expertise empower us to navigate dynamic markets with confidence.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-[#0FA4AF]" />,
    title: "Regional Insight",
    text: "Our deep understanding of South Asian markets allows us to blend local relevance with global ambition.",
  },
];

export default function OurValues() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Smooth background fade from previous section */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, #F3FAFB 20%, #E9F6F8 100%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Our Values
        </h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-20"
        >
          We believe in operating in the Blue Ocean — creating new value spaces
          rather than competing in crowded ones. In today’s VUCA world — marked
          by volatility, uncertainty, complexity, and ambiguity — we stay
          anchored through agility, innovation, and integrity.
          <br />
          <br />
          Over the last three decades, we have built deep channel expertise and
          trusted relationships across the South Asian region, spanning diverse
          verticals including consumer durables, travel goods, appliances, and
          luxury fashion.
          <br />
          <br />
          Our values and strengths complement each other, forming the foundation
          of our identity:
        </motion.p>

        {/* Flowing Value Layout */}
<div className="relative flex flex-col items-center gap-14">
  {/* Top row: 3 values */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full">
    {values.slice(0, 3).map((value, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col items-center text-center space-y-3"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0FA4AF]/10 mb-2">
          {value.icon}
        </div>
        <h3 className="text-xl font-semibold text-[#024950]">
          {value.title}
        </h3>
        <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
          {value.text}
        </p>
      </motion.div>
    ))}
  </div>
  {/* Bottom row: 2 values, centered below gaps */}
  <div className="flex flex-row justify-center gap-32 mt-2 w-full">
    {values.slice(3, 5).map((value, index) => (
      <motion.div
        key={index + 3}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
        className="flex flex-col items-center text-center space-y-3"
        style={{ minWidth: "260px" }}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0FA4AF]/10 mb-2">
          {value.icon}
        </div>
        <h3 className="text-xl font-semibold text-[#024950]">
          {value.title}
        </h3>
        <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
          {value.text}
        </p>
      </motion.div>
    ))}
  </div>
</div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-lg md:text-xl font-medium text-[#003135] mt-20"
        >
          We don’t just compete — we create. We don’t just react — we reshape.
          <br />
          <span className="text-[#0FA4AF] font-semibold">
            Our journey is driven by a clear purpose:
          </span>{" "}
          to deliver sustainable growth and shared success in every partnership
          we build.
        </motion.p>
      </div>
    </section>
  );
}
