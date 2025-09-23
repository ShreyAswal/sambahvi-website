// import video from "../../assets/homePageVideo/heroPageVid.mp4";
import { Briefcase, Globe, Users } from "lucide-react";
import video2 from "../../assets/homePageVideo/HeroPageVid2.mp4";
import { motion } from "framer-motion";
import { BsLightning } from "react-icons/bs";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary-primary" />,
    title: "Strategic Partnerships",
    message: "We help brands scale by building meaningful partnerships across industries.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary-primary" />,
    title: "Expert Team",
    message: "A team of seasoned professionals with deep experience across multiple sectors.",
  },
  {
    icon: <Globe className="w-10 h-10 text-primary-primary" />,
    title: "Global Reach",
    message: "Extending your brand's footprint across India and Southeast Asia efficiently.",
  },
  {
    icon: <BsLightning className="w-10 h-10 text-primary-primary" />,
    title: "Rapid Execution",
    message: "Delivering results with speed and precision to maximize business impact.",
  },
];

export default function Hero() {
  return (
    <>
      <section className="relative flex items-center justify-start px-6 md:px-16 py-32 text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          src={video2}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 z-10 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-20 max-w-3xl text-left mt-20 mb-5">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Connecting Global Brands with Indian Consumers
          </h1>

          {/* Italic Line */}
          <p className="text-md md:text-lg italic text-gray-200 mb-4">
            Delivering premium experiences through efficient distribution,
            seamless online availability, and trusted global partnerships.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-10">
            <a
              href="/about"
              className="bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md 
           hover:bg-black hover:text-white transition"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </section>
      {/* Supporting Paragraph Section - BELOW video */}
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
