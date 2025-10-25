import { motion } from "framer-motion";

export default function BrandShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#f9fafb] to-[#eef6fa] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="mb-20"
          >
            {/* Category Title */}
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-2xl font-semibold text-[#0e6b99]">
                {category.title}
              </h3>
              <div className="h-1 w-28 bg-gradient-to-r from-[#1490ca] via-[#27acea] to-[#4fb5e0] mt-2 rounded-full" />
            </div>

            {/* Brand Cards */}
            <div className="flex flex-col gap-12">
              {category.brands.map((brand, i) => {
                // const isReversed = i % 2 !== 0;
                return (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      // x: isReversed ? 100 : -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`bg-white rounded-2xl shadow-md hover:shadow-xl border border-[#e5e7eb] transition-all overflow-hidden group 
                     flex flex-col md:flex-row items-center`}
                  >
                    <div className="relative w-full md:w-1/2 flex justify-center md:justify-center items-center bg-gradient-to-br from-white to-[#f5f9fc] p-10">
                      {/* Subtle gradient overlay for hover */}
                      {/* gradient overlay: visible by default on small screens, hover-controlled on md+ */}
                      <div className="absolute inset-0 opacity-10 md:opacity-0 md:group-hover:opacity-10 bg-gradient-to-r from-[#1490ca] via-[#27acea] to-[#4fb5e0] transition-all duration-500" />

                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-sm flex items-center justify-center w-40 h-40 relative z-10"
                      >
                        <img
                          src={`src/assets/brands/${brand.logo}`}
                          alt={brand.name}
                          className="h-20 w-auto object-contain"
                        />
                      </motion.div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-semibold text-[#1490ca] hover:text-[#0e6b99] transition-colors"
                      >
                        {brand.name}
                      </a>
                      <p className="text-gray-600 mt-3 leading-relaxed text-base md:text-lg">
                        {brand.description}
                      </p>
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 px-6 py-2 rounded-full text-[#024950] text-sm font-semibold
             border border-[#024950] bg-transparent relative overflow-hidden
             transition-all duration-300 group"
                      >
                        <span className="relative z-10 text-white md:text-[#024950] md:group-hover:text-white transition-colors duration-300">
                          Visit Website
                        </span>
                        <span className="absolute inset-0 bg-[#024950] scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      </a>
                    </div>

                    {/* Product Image Strip */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-[#f9fafb] border-t border-[#e5e7eb] p-4 w-full"
                    >
                      {brand.images.map((img, index) => (
                        <motion.img
                          key={index}
                          src={`src/assets/brandProducts/${brand.name.toLowerCase()}/${img}`}
                          alt={`${brand.name} product ${index + 1}`}
                          className="rounded-lg object-cover h-36 w-full hover:scale-[1.03] transition-transform duration-300 shadow-sm"
                          loading="lazy"
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background accent blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#1490ca]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#27acea]/10 blur-3xl rounded-full" />
    </section>
  );
}

// ==========================
// Brand Data
// ==========================
const categories = [
  {
    title: "Fashion & Lifestyle",
    brands: [
      {
        name: "Police",
        logo: "Police-logo.png",
        description:
          "An Italian design house known for bold eyewear and accessories that embody individuality and modern urban style.",
        link: "https://www.policelifestyle.com/",
  images: ["police1.png", "police2.png", "police3.png", "police4.png", "police5.png","police6.png", "police7.png", "police8.png", "police9.png", "police10.png"],
      },
      {
        name: "Doughnut",
        logo: "Doughnut-logo.png",
        description:
          "A Hong Kong-based backpack brand merging outdoor utility with fashion-forward design and premium craftsmanship.",
        link: "https://doughnutofficial.com/",
  images: ["doughnut1.png", "doughnut2.png", "doughnut3.png"],
      },
      {
        name: "Aecooly",
        logo: "Aecooly-logo.png",
        description:
          "A fast-growing lifestyle and backpack brand offering trendy, functional, and urban carry solutions.",
        link: "https://aecooly.com/",
  images: ["aecooly1.png", "aecooly2.png", "aecooly3.png"],
      },
    ],
  },
  {
    title: "Technology & Gadgets",
    brands: [
      {
        name: "Edifier",
        logo: "Edifier-logo.png",
        description:
          "Global leader in premium audio devices designed to deliver immersive sound with aesthetic precision.",
        link: "https://www.edifier.com/",
  images: ["edifier1.png", "edifier2.png", "edifier3.png"],
      },
      {
        name: "Shokz",
        logo: "Shokz-logo.png",
        description:
          "Pioneers in bone-conduction headphones designed for safety, comfort, and open-ear listening.",
        link: "https://shokz.com/",
  images: ["shokz1.png", "shokz2.png", "shokz3.png"],
      },
      {
        name: "Hyperice",
        logo: "Hyperice-logo.png",
        description:
          "Performance technology brand offering recovery and movement enhancement tools trusted by athletes worldwide.",
        link: "https://hyperice.com/",
  images: ["hyperice1.png", "hyperice2.png", "hyperice3.png"],
      },
    ],
  },
  {
    title: "Travel & Utility",
    brands: [
      {
        name: "Victorinox",
        logo: "Victorinox-logo.png",
        description:
          "Renowned for Swiss precision, Victorinox offers premium travel gear designed for functionality and endurance.",
        link: "https://www.victorinox.com/",
  images: ["victorinox1.png", "victorinox2.png", "victorinox3.png"],
      },
      {
        name: "Wenger",
        logo: "Wenger-logo.png",
        description:
          "Swiss brand offering backpacks and lifestyle accessories crafted with durability and sleek design.",
        link: "https://www.wenger.ch/",
  images: ["wenger1.png", "wenger2.png", "wenger3.png"],
      },
      {
        name: "Travel Blue",
        logo: "Travel-Blue-logo.png",
        description:
          "Leading travel accessories brand dedicated to sustainability and convenience for global travelers.",
        link: "https://www.travel-blue.com/",
  images: ["travelblue1.png", "travelblue2.png", "travelblue3.png"],
      },
    ],
  },
];
