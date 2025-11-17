import { motion } from "framer-motion";
import { partnersLogos } from "./partners";

interface PartnerLogo {
  name: string;
  logo: string;
}

const getLogo = (name: string): string | undefined =>
  (partnersLogos as PartnerLogo[]).find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  )?.logo;

export default function OmnichannelGrowth() {
  const channels = [
    {
      name: "AJIO",
      website: "ajio.com",
      description:
        "India’s trend-forward lifestyle platform blending fashion, function, and innovation.",
      focus:
        "Sunglasses, travel wallets, designer backpacks, and premium travel accessories.",
      operations:
        "Catalog design, brand coordination, and content optimization.",
      growth:
        "Premium positioning via curated drops, storytelling, and collaboration-led growth.",
    },
    {
      name: "Amazon",
      website: "amazon.com",
      description:
        "India’s largest online marketplace offering unmatched reach and trusted logistics for travel and lifestyle products.",
      focus:
        "Luggage, travel accessories, backpacks, electronic gadgets, and massagers.",
      operations:
        "Brand storefront management with optimized listings and A+ content. Fulfillment via Amazon FBA and integrated networks.",
      growth:
        "Nationwide visibility through curated product selections, optimized brand stores, and data-led marketplace strategies.",
    },
    {
      name: "FirstCry",
      website: "firstcry.com",
      description:
        "Serving a growing family and lifestyle audience seeking travel convenience and comfort.",
      focus:
        "Compact luggage, kids’ backpacks, travel accessories, and family wellness products.",
      operations: "Integrated logistics ensuring reliable nationwide delivery.",
      growth:
        "Curated listings catering to families seeking comfort-focused, travel-friendly lifestyle solutions.",
    },
    {
      name: "Flipkart",
      website: "flipkart.com",
      description:
        "Leading marketplace for value-driven consumers across travel, lifestyle, and electronics.",
      focus: "Backpacks, headphones, sunglasses, massagers, and accessories.",
      operations:
        "Flipkart Smart Fulfillment for fast delivery and top listing performance.",
      growth:
        "Strong presence via Big Billion Days and seasonal campaigns with optimized pricing.",
    },

    {
      name: "Myntra",
      website: "myntra.com",
      description:
        "India’s top destination for fashion-first consumers blending style and utility.",
      focus:
        "Sunglasses, backpacks, travel fashion accessories, and lifestyle gear.",
      operations:
        "Curated collections and seasonal launches through Myntra Studio campaigns.",
      growth:
        "Expanded lifestyle and fashion reach through curated collections and seasonal engagement.",
    },
    {
      name: "Nykaa",
      website: "nykaa.com",
      description:
        "Lifestyle destination catering to wellness, fashion, and accessories.",
      focus:
        "Massagers, travel grooming accessories, wellness products, and sunglasses.",
      operations:
        "Managed logistics ensuring safe handling and timely delivery.",
      growth:
        "Wellness-focused expansion leveraging Nykaa’s content-driven engagement.",
    },
    {
      name: "Tata Cliq",
      website: "tatacliq.com",
      description:
        "Premium retail space emphasizing authenticity and trusted brand experiences.",
      focus:
        "Premium luggage, headphones, electronic accessories, and travel tech.",
      operations:
        "Brand-controlled listings emphasizing presentation and service quality.",
      growth:
        "Selective representation highlighting design-driven travel range.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#D4AF37]"
        >
          Omnichannel Growth Partners
        </motion.h2>

        <div className="flex flex-col gap-16">
          {channels.map((channel, index) => {
            const logoSrc = getLogo(channel.name);
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } items-stretch overflow-hidden rounded-3xl shadow-lg bg-[#0f0f10]`}
              >
                {/* Logo Panel */}
                <div className="md:w-1/3 relative flex justify-center items-center bg-[#0b0b0b] h-48 md:h-auto">
                  <div className="absolute inset-0 opacity-0 md:group-hover:opacity-5 bg-gradient-to-r from-[#D4AF37]/6 via-[#B8860B]/6 to-[#FFD966]/6 transition-all duration-500" />
                  <motion.div
                    className="bg-white p-4 rounded-2xl flex items-center justify-center w-40 h-24 lg:w-48 lg:h-28 shadow-md z-10"
                    whileHover={{
                      rotateY: isReversed ? -10 : 10,
                      rotateX: 5,
                      scale: 1.05,
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 10 }}
                  >
                    <img
                      src={`/assets/partners/${logoSrc}`}
                      alt={channel.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* Content Panel */}
                <div className="md:w-2/3 relative bg-[#0b0b0b] p-10 flex flex-col justify-center">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#D4AF37]/40 to-transparent rounded-r-lg" />
                  <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                    <motion.a
                      href={`https://${channel.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline cursor-pointer text-inherit"
                      whileHover={{
                        scale: 1.08,
                        color: "#D4AF37",
                        textDecorationThickness: "3px",
                        textUnderlineOffset: 6,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {channel.name}
                    </motion.a>
                  </h3>
                  <p className="text-white/80 mb-6">{channel.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-[#D4AF37] mb-1">
                        Our Focus
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        {channel.focus}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#D4AF37] mb-1">
                        Operations
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        {channel.operations}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#D4AF37] mb-1">
                        Growth & Scale
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        {channel.growth}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
