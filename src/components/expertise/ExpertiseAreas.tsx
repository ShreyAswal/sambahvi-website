import { motion } from "framer-motion";

const expertise = [
  "Business Transformation & Market Entry Strategy",
  "Brand Building & Consumer Engagement",
  "Sales Growth & Distribution Expansion",
  "Manufacturing & Supply Chain Optimization",
  "Profitability & Margin Improvement",
  "Talent Development & Organizational Scaling",
  "Investor Relations & M&A Strategy",
  "CSD Operations & Market Development",
];

export default function CoreExpertise() {
  return (
    <section className="relative py-24 bg-[#000000] text-white overflow-hidden">
      {/* Top SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -z-10">
        <svg
          className="w-full h-12 object-cover"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1490ca"
            fillOpacity="0.15"
            d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,144C672,149,768,139,864,128C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Floating Accent Shapes */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-48 bg-indigo-100/30 rounded-full absolute top-10 left-10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 bg-blue-100/30 rounded-full absolute bottom-20 right-20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12 relative inline-block mx-auto lg:mx-0 text-center lg:text-left">
          <span className="inline-block relative">
            Core
            <span className="absolute left-6 -bottom-2 w-10 h-1 bg-[#D4AF37] rounded-full transform -translate-x-1/2 lg:hidden" />
          </span>{" "}
          Capabilities
          <span className="hidden lg:block absolute left-0 -bottom-2 w-10 h-1 bg-[#D4AF37] rounded-full" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#0f0f10] rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex items-start gap-3 border border-transparent hover:border-[#D4AF37]/20"
            >
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="font-bold text-xl"
              >
                {/* Gold Tick SVG */}
                <motion.svg
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [0.9, 1.05, 0.9] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="10"
                    fill="#D4AF37"
                    fillOpacity="0.12"
                  />
                  <path
                    d="M6 10.5l2.5 2.5 5-5"
                    stroke="#D4AF37"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.span>
              <p className="text-white/80 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
