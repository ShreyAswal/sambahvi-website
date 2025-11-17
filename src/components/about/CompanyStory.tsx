import { motion } from "framer-motion";

export default function CompanyStory() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 text-white bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 relative inline-block">
              Our Story
              <span className="absolute left-0 -bottom-1 w-16 h-1 bg-[#D4AF37] rounded-full"></span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Founded with a vision to transform the way people connect with
              technology, our journey has been shaped by curiosity, innovation,
              and trust. Over the years, we've grown into a community-driven
              company that thrives on pushing boundaries.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              From our first small step to where we are today, our story is
              about resilience, teamwork, and the drive to make a meaningful
              impact.
            </p>
          </div>
        </motion.div>

        {/* Visual / Image */}
        <div className="flex justify-center">
          <img
            src="../../../assets/photos/people-sitting.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-lg w-full max-w-md border-2 border-[#0b0b0b] transition-transform duration-300 hover:-translate-y-2 ring-1 ring-transparent hover:ring-[#D4AF37]/14"
          />
        </div>
      </div>
    </section>
  );
}
