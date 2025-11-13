import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Optional top wave for continuity */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -z-10">
          <svg
            className="w-full h-12 object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#1490ca"
              fillOpacity="0.2"
              d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,144C672,149,768,139,864,128C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,0L0,0Z"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-4 gap-12 text-center md:text-left relative z-10">
          {/* Main Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Main Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/brands"
                  className="hover:text-[#1490ca] transition-colors duration-300"
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="/channels"
                  className="hover:text-[#1490ca] transition-colors duration-300"
                >
                  Channels
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-[#1490ca] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/expertise"
                  className="hover:text-[#1490ca] transition-colors duration-300"
                >
                  Our Expertise
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="hover:text-[#1490ca] transition-colors duration-300"
                >
                  Industries We Serve
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-[#1490ca] transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">📧 ebusiness@saplonline.com</p>
            <p className="mb-4">📞 +91 90359 08886</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <img
              src="/assets/websiteLogo/sambhavilogo.png"
              alt="Sambhavi Agencies Logo"
              className="h-36 w-auto mx-auto md:ml-16 drop-shadow-lg border-t border-gray-500/40 rounded-3xl transition-all duration-300 hover:scale-105 hover:brightness-110 hover:ring-4 hover:ring-[#1490ca]/30 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 py-4 text-center text-sm text-gray-400 relative z-10">
          &copy; {new Date().getFullYear()} Sambhavi Agencies Pvt. Ltd. All
          rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
