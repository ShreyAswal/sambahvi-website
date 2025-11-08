import { motion } from "framer-motion";
import { partnersLogos } from "../channels/partners";


export default function PartnersLogosGrid() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Trusted Sales Channels
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partnersLogos.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-center 
                 hover:shadow-md hover:-translate-y-1 border border-transparent 
                 transition-all"
            >
              <motion.img
                src={`/assets/partners/${partner.logo}`}
                alt={partner.name}
                className="h-14 w-auto object-contain hover:grayscale-0 transition duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
