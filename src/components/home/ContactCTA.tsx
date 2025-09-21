import { motion } from "framer-motion";
import block from "../../assets/backgrounds/low-poly-grid-haikei.svg";
// import { Gem } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Animated Wave Background */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="w-full h-full object-cover animate-wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#1490ca"
              fillOpacity="0.3"
              d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,149.3C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L0,320Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Interested in partnering with Sambahvi Agencies or have questions?
              Fill the form or reach out directly. We’re happy to help!
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2 text-gray-900 font-medium mb-2">
              📧 contact@sambahvi.com
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2 text-gray-900 font-medium">
              📞 +91 12345 67890
            </p>
          </div>

          {/* Right Column - Premium Visual Block */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{
    opacity: 1,
    y: [-10, -30, -20], // more pronounced floating
    boxShadow: [
      "0 8px 40px 0 rgba(20, 144, 202, 0.18), 0 24px 80px 0 rgba(20, 144, 202, 0.22), 0 1.5px 4px 0 rgba(0,0,0,0.10)",
      "0 16px 80px 0 rgba(20, 144, 202, 0.22), 0 32px 120px 0 rgba(20, 144, 202, 0.28), 0 2px 8px 0 rgba(0,0,0,0.12)",
      "0 8px 40px 0 rgba(20, 144, 202, 0.18), 0 24px 80px 0 rgba(20, 144, 202, 0.22), 0 1.5px 4px 0 rgba(0,0,0,0.10)",
    ],
  }}
            className="w-full max-w-md aspect-square mx-auto rounded-3xl ring-2 ring-indigo-200/40 overflow-hidden flex items-center justify-center"
          >
            <img
              src={block}
              alt="Block"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes wave {
            0% { transform: translateX(0); }
            50% { transform: translateX(-20px); }
            100% { transform: translateX(0); }
          }
          // .animate-wave {
          //   animation: wave 6s ease-in-out infinite;
          // }
        `}
      </style>
    </section>
  );
}
