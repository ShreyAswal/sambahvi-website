import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-[#0f1720] text-white">
      {/* Decorative gold accent bar */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-2 rounded-b-full bg-[#D4AF37] opacity-90" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#D4AF37] mb-6"
        >
          Vision & Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/80 text-lg mb-10"
        >
          The beliefs that guide every partnership, every milestone, and every
          solution we deliver.
        </motion.p>

        {/* Unified Statement Block as dark card */}
        <div className="relative bg-[#0b0b0b] rounded-2xl border border-transparent shadow-sm px-8 py-10 flex flex-col gap-8 items-center">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Eye className="w-10 h-10 text-[#D4AF37] mb-2" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-1">
                Our Vision
              </h3>
              <p className="text-white/80 text-base max-w-xs">
                Our victory lies in your success. True growth comes when our
                partners, customers, and communities win first — our win is
                built on your win.
              </p>
            </div>

            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-[#D4AF37]/40 to-transparent mx-8 opacity-30" />

            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Target className="w-10 h-10 text-[#D4AF37] mb-2" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-1">
                Our Mission
              </h3>
              <p className="text-white/80 text-base max-w-xs">
                To deliver trusted solutions that bridge people and technology,
                driven by curiosity, collaboration, and a human-first approach.
              </p>
            </div>
          </div>
          <p className="text-white/80 mt-10 text-base italic">
            Together, we move forward — with purpose, trust, and shared
            ambition.
          </p>
        </div>
      </div>
    </section>
  );
}
