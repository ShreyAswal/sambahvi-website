import { Briefcase, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BsLightning } from "react-icons/bs";

export default function LifestyleDistribution() {
  const features = [
    {
      icon: <Briefcase className="w-10 h-10 text-primary-primary" />,
      title: "Strategic Partnerships",
      message:
        "We help brands scale by building meaningful partnerships across industries.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary-primary" />,
      title: "Expert Team",
      message:
        "A team of seasoned professionals with deep experience across multiple sectors.",
    },
    {
      icon: <Globe className="w-10 h-10 text-primary-primary" />,
      title: "Global Reach",
      message:
        "Extending your brand's footprint across India and Southeast Asia efficiently.",
    },
    {
      icon: <BsLightning className="w-10 h-10 text-primary-primary" />,
      title: "Rapid Execution",
      message:
        "Delivering results with speed and precision to maximize business impact.",
    },
  ];

  return (
    <>
      {/* Supporting Paragraph Section - BELOW video */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative flex justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative inline-block text-center"
            >
              Redefining Lifestyle Distribution Across India
              <span className="absolute left-0 mx-auto -bottom-2 w-16 h-1 bg-primary-primary rounded-full"></span>
            </motion.h2>
          </div>
          {/* </div> */}

          {/* 4 Highlighted Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 hover:border-primary-primary hover:scale-105 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.message}</p>
              </motion.div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>
        </div>
        {/* Supporting Paragraphs */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 mb-6 leading-relaxed text-lg"
          >
            Sambahvi Agencies Pvt. Ltd. is an{" "}
            <span className="text-primary-primary font-medium">
              authorized and exclusive e-commerce distributor
            </span>{" "}
            for a distinguished portfolio of global brands including Victorinox,
            Wenger, and Police, alongside other leading names across{" "}
            <span className="text-primary-primary font-medium">
              lifestyle, fashion, audio, wellness, imaging, eyewear, and tech
              accessories.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 mb-6 leading-relaxed text-lg"
          >
            With a 10,000 sq. ft. warehouse set to commence operations shortly,
            we will soon be stocking and distributing premium products from
            Aecooly, Doughnut, Edifier, Hyperice, Kodak, Shokz, Tifosi, Tomtoc,
            and Ugreen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 italic leading-relaxed text-lg"
          >
            Our focus is to deliver{" "}
            <span className="text-primary-primary font-medium">
              innovative, high-quality, and performance-driven products
            </span>{" "}
            to Indian consumers through efficient distribution and seamless
            online availability.
          </motion.p>
        </div>
      </section>
    </>
  );
}
