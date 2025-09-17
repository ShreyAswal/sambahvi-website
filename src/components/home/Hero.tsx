import video from "../../assets/homePageVideo/heroPageVid.mp4";
import video2 from "../../assets/homePageVideo/HeroPageVid2.mp4";
import { motion } from "framer-motion";
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
      <section className="relative bg-lightGray py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-gray-100 to-transparent" />

          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/80 rounded-2xl shadow-lg px-6 py-8 md:px-10 md:py-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-primary mb-4">
                Who We Are
              </h2>
              <p className="text-base md:text-lg font-sans text-gray-800 leading-relaxed mb-0 text-left">
                Sambahvi Agencies Pvt. Ltd. is an{" "}
                <span className="font-bold text-primary-primary">
                  authorized and exclusive e-commerce distributor
                </span>{" "}
                for a distinguished portfolio of global brands including
                <span className="font-semibold text-gray-900">
                  {" "}
                  Victorinox, Wenger, and Police
                </span>
                , alongside other leading names across{" "}
                <span className="text-primary-primary font-semibold">
                  lifestyle, fashion, audio, wellness, imaging, eyewear, and
                  tech accessories
                </span>
                .
                <br className="hidden md:block" />
                With a{" "}
                <span className="font-semibold">
                  10,000 sq. ft. warehouse
                </span>{" "}
                set to commence operations shortly, we will soon be stocking and
                distributing premium products from{" "}
                <span className="font-semibold text-gray-900">
                  Aecooly, Doughnut, Edifier, Hyperice, Kodak, Shokz, Tifosi,
                  Tomtoc, and Ugreen
                </span>
                .
                <br className="hidden md:block" />
                Our focus is to deliver{" "}
                <span className="font-semibold text-primary-primary">
                  innovative, high-quality, and performance-driven products
                </span>{" "}
                to Indian consumers through efficient distribution and seamless
                online availability.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
