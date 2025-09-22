import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Fashion & Lifestyle",
    brands: [
      {
        name: "Police",
        logo: "Police-logo.png",
        description:
          "Police offers bold eyewear, watches, and accessories. A global fashion icon with urban DNA.",
        link: "https://www.policelifestyle.com/",
      },
      {
        name: "Doughnut",
        logo: "Doughnut-logo.png",
        description:
          "Doughnut crafts stylish backpacks with a focus on durability, comfort, and everyday use.",
        link: "https://doughnutofficial.com/",
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
          "Edifier produces premium audio devices combining design, technology, and performance.",
        link: "https://www.edifier.com/",
      },
      {
        name: "Shokz",
        logo: "Shokz-logo.png",
        description:
          "Shokz specializes in bone-conduction headphones designed for comfort and safety.",
        link: "https://shokz.com/",
      },
      {
        name: "Hyperice",
        logo: "Hyperice-logo.png",
        description:
          "Hyperice creates innovative recovery tools trusted by athletes worldwide.",
        link: "https://hyperice.com/",
      },
      {
        name: "Ugreen",
        logo: "Ugreen-logo.png",
        description:
          "Ugreen makes smart accessories and charging solutions for modern lifestyles.",
        link: "https://www.ugreen.com/",
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
          "Victorinox is known for Swiss precision knives, watches, and travel gear.",
        link: "https://www.victorinox.com/",
      },
      {
        name: "Wenger",
        logo: "Wenger-logo.png",
        description:
          "Wenger offers Swiss-made watches and travel essentials with a legacy of quality.",
        link: "https://www.wenger.ch/",
      },
      {
        name: "Tomtoc",
        logo: "Tomtoc-logo.png",
        description:
          "Tomtoc designs protective and stylish tech bags for modern travelers.",
        link: "https://www.tomtoc.com/",
      },
      {
        name: "Travel Blue",
        logo: "Travel-Blue-logo.png",
        description:
          "Travel Blue provides smart travel accessories designed for comfort and safety.",
        link: "https://www.travel-blue.com/",
      },
    ],
  },
  {
    title: "Optics & Sports",
    brands: [
      {
        name: "Tifosi",
        logo: "Tifosi-logo.png",
        description:
          "Tifosi offers performance eyewear for athletes, blending style with function.",
        link: "https://tifosioptics.com/",
      },
      {
        name: "Kodak",
        logo: "Kodak-logo.png",
        description:
          "Kodak delivers imaging products and solutions that inspire creativity worldwide.",
        link: "https://www.kodak.com/",
      },
    ],
  },
];

type Brand = {
  name: string;
  logo: string;
  description: string;
  link: string;
};

export default function BrandShowcase() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const modalRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setSelectedBrand(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explore Our Brands
        </h2>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {category.brands.map((brand, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center 
                     hover:shadow-md hover:-translate-y-1 border border-transparent 
                     hover:border-blue-500 transition-all w-40 cursor-pointer group"
                  onClick={() => setSelectedBrand(brand)}
                >
                  <motion.img
                    src={`src/assets/brands/${brand.logo}`}
                    alt={brand.name}
                    className="h-14 w-auto object-contain mb-3 grayscale group-hover:grayscale-0 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <p className="text-sm font-medium text-gray-700">{brand.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-md text-center relative shadow-lg"
          >
            <img
              src={`src/assets/brands/${selectedBrand.logo}`}
              alt={selectedBrand.name}
              className="h-16 mx-auto mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedBrand.name}
            </h4>
            <p className="text-gray-600 mb-6">{selectedBrand.description}</p>
            <a
              href={selectedBrand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Visit Website
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
}
