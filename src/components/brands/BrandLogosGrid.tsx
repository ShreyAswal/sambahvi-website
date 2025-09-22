import { motion } from "framer-motion";
// import policeLogo from "../../assets/brands/police-logo.png";

const brands = [
  { name: "Police", logo: "Police-logo.png" },
  { name: "Victory Knox", logo: "Victorinox-logo.png" },
  { name: "Wenger", logo: "Wenger-logo.png" },
  { name: "Ugreen", logo: "Ugreen-logo.png" },
  { name: "Aecooly", logo: "Aecooly-logo.png" },
  { name: "Doughnut", logo: "Doughnut-logo.png" },
  { name: "Edifier", logo: "Edifier-logo.png" },
  { name: "Hyperice", logo: "Hyperice-logo.png" },
  { name: "Shokz", logo: "Shokz-logo.png" },
  { name: "Tifosi", logo: "Tifosi-logo.png" },
  { name: "Kodak", logo: "Kodak-logo.png" },
  { name: "Tomtoc", logo: "Tomtoc-logo.png" },
  { name: "Travel Blue", logo: "Travel-Blue-logo.png" },
];

export default function BrandLogosGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Brand Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-center 
                 hover:shadow-md hover:-translate-y-1 border border-transparent 
                 hover:border-blue-500 transition-all"
            >
              <motion.img
                src={`src/assets/brands/${brand.logo}`}
                alt={brand.name}
                className="h-14 w-auto object-contain  hover:grayscale-0 transition duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
