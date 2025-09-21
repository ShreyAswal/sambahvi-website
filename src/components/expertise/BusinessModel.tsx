import { Truck, Store, Package, Users, Building2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const models = [
  {
    title: "Dropshipping Model",
    description: "End-to-end logistics support including warehousing.",
    icon: <Truck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Buy-and-Sell Fulfillment",
    description: "Tailored for online marketplace sales.",
    icon: <Store className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Bulk Purchase & Liquidation",
    description:
      "Closeout inventory with brand-respecting liquidation strategies.",
    icon: <Package className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Franchisee Development",
    description:
      "Across consumer durables, fashion, and premium fashion.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Retail Expansion",
    description:
      "Mall, high street, department stores, concessions, airports.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Co-Branding",
    description: "Across consumer, fashion, and accessories.",
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
  },
];

export default function BusinessModel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative inline-block">
  Business Models We Drive
  <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#2563eb] rounded-full"></span>
</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {models.map((model, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-4">{model.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{model.title}</h3>
              <p className="text-gray-600 text-sm">{model.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
