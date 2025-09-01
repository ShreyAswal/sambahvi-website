import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  const cards = [
    {
      title: "Our Vision",
      description:
        "To inspire and empower communities through innovation, making technology seamless and impactful for everyone.",
      Icon: Eye,
    },
    {
      title: "Our Mission",
      description:
        "To deliver trusted solutions that bridge people and technology, driven by curiosity, collaboration, and a human-first approach.",
      Icon: Target,
    },
  ];

  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Vision & Mission
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          What drives us forward and keeps us grounded.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {cards.map(({ title, description, Icon }, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group bg-gray-50 rounded-2xl p-8 shadow-sm text-center hover:shadow-md transition cursor-pointer"
          >
            <Icon className="w-12 h-12 text-[#27acea] mx-auto mb-6 transition-colors duration-300 group-hover:text-[#2563eb]" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#2563eb] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
