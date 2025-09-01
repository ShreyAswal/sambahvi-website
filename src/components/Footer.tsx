import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-[#1490ca] transition-colors duration-300"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="/solutions"
                className="hover:text-[#1490ca] transition-colors duration-300"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="/industry"
                className="hover:text-[#1490ca] transition-colors duration-300"
              >
                Industries
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
          <p className="mb-2">📧 contact@sambahvi.com</p>
          <p className="mb-4">📞 +91 12345 67890</p>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            {[FaLinkedin, FaInstagram, FaFacebook, FaTwitter].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-white transform transition-transform duration-300 hover:scale-125 hover:text-[#1490ca]"
                >
                  <Icon />
                </a>
              ),
            )}
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="mb-4">Subscribe for updates and insights.</p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1490ca] text-gray-900"
            />
            <button
              type="submit"
              className="bg-amberCustom text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-black hover:text-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400 relative z-10">
        &copy; {new Date().getFullYear()} Sambahvi Agencies Pvt. Ltd. All rights
        reserved.
      </div>

      {/* Wave animation */}
      <style>
        {`
          @keyframes wave {
            0% { transform: translateX(0); }
            50% { transform: translateX(-20px); }
            100% { transform: translateX(0); }
          }
          
        `}
      </style>
    </footer>
  );
}
