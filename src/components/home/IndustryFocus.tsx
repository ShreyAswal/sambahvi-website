import { Shirt, Gem, Tv, Home, Building2, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
export default function IndustryFocus() {
  const industries = [
    {
      icon: (
        <Shirt className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
      ),
      title: "Fashion & Apparels",
      description:
        "Trendy and high-quality lifestyle products for the modern consumer.",
    },
    {
      icon: (
        <Gem className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
      ),
      title: "Luxury Accessories",
      description: "Premium global brands delivering elegance and durability.",
    },
    {
      icon: (
        <Tv className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
      ),
      title: "Consumer Durables",
      description: "Reliable products that elevate everyday living.",
    },
    {
      icon: (
        <Home className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
      ),
      title: "Consumer Appliances",
      description:
        "Smart appliances making households efficient and connected.",
    },
    {
      icon: (
        <Building2 className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
      ),
      title: "Coworking Spaces",
      description:
        "Supplying essential lifestyle and tech accessories across work hubs.",
    },
    {
      icon: (
        <ShoppingBag className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
      ),
      title: "D2C Distribution",
      description:
        "Trusted partner for international brands expanding in India.",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      {/* Top Divider */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Industry Focus
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border border-gray-200 hover:border-primary/40"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
