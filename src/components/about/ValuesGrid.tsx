import { Heart, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

interface Value {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const values: Value[] = [
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and trust.",
    Icon: Heart,
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity and continuous improvement in all we do.",
    Icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "We thrive together, valuing teamwork and diverse perspectives.",
    Icon: Users,
  },
];

export default function Values() {
  return (
    <section className="bg-lightGray py-20 px-6 md:px-12 lg:px-20">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Values
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Guiding principles that shape our culture and decisions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {values.map(({ title, description, Icon }, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <Icon className="w-12 h-12 text-[#27acea] mx-auto mb-6 transition-colors duration-300 group-hover:text-[#2563eb]" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#2563eb] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
      </motion.div>
    </section>
  );
}
