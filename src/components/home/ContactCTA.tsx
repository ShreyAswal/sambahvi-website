import { motion } from "framer-motion";
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

          {/* Right Column - Form */}
          <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg z-10">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="w-full bg-[#1490ca] text-black px-6 py-3 rounded-lg font-semibold shadow-md  hover:bg-black hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>
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
