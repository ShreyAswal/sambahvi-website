import { Briefcase, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BsLightning } from "react-icons/bs";

export default function LifestyleDistribution() {
  const features = [
    {
      icon: <Briefcase className="w-10 h-10 text-white" />,
      title: "Strategic Partnerships",
      message:
        "We help brands scale by building meaningful partnerships across industries.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Expert Team",
      message:
        "A team of seasoned professionals with deep experience across multiple sectors.",
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Global Reach",
      message:
        "Extending your brand's footprint across India and Southeast Asia efficiently.",
    },
    {
      icon: <BsLightning className="w-10 h-10 text-white" />,
      title: "Rapid Execution",
      message:
        "Delivering results with speed and precision to maximize business impact.",
    },
  ];

  return (
    <>
      {/* Supporting Paragraph Section - BELOW video */}

      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* soft gold glows */}
        <div className="absolute -left-24 top-16 w-72 h-72 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-24 bottom-10 w-72 h-72 bg-[#B8860B]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="relative flex justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12 relative inline-block text-center leading-10"
            >
              <span className="inline-block relative">
                Redefining
                <span className="absolute left-6 -bottom-1 w-12 h-1 bg-[#D4AF37] rounded-full transform -translate-x-1/2 lg:hidden" />
              </span>{" "}
              Lifestyle Distribution Across India
              {/* large-screen underline: left-aligned under heading start */}
              <span className="hidden lg:block absolute left-0 -bottom-2 w-16 h-1 bg-[#D4AF37] rounded-full" />
            </motion.h2>
          </div>

          {/* 4 Highlighted Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0b0b0b] border border-transparent hover:border-[#D4AF37] hover:scale-105 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-full bg-white/6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80">{feature.message}</p>
              </motion.div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

          {/* Supporting Paragraphs */}
          <div className="text-center max-w-4xl mx-auto p-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white/90 mb-6 leading-relaxed text-lg"
            >
              Sambhavi Agencies Pvt. Ltd. is an{" "}
              <span className="text-[#FFD966] font-medium">
                authorized and exclusive e-commerce distributor
              </span>{" "}
              for a distinguished portfolio of global brands including
              Victorinox, Wenger, Police, Aecooly, Doughnut, Edifier, Fancode,
              Flipkart, Kodak, Shokz, Tifosi, Tomtoc, Ugreen, alongside other
              leading names across lifestyle, fashion, audio, wellness, imaging,
              eyewear, and tech accessories.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 mb-6 leading-relaxed text-lg"
            >
              With a 10,000 sq. ft. warehouse set to commence operations
              shortly, we will soon be stocking and distributing premium
              products from Aecooly, Doughnut, Edifier, Hyperice, Kodak, Shokz,
              Tifosi, Tomtoc, and Ugreen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 italic leading-relaxed text-lg"
            >
              Our focus is to deliver{" "}
              <span className="text-[#FFD966] font-medium">
                innovative, high-quality, and performance-driven products
              </span>{" "}
              to Indian consumers through efficient distribution and seamless
              online availability.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
