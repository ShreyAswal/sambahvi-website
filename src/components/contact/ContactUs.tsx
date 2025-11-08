import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, CheckCircle2 } from "lucide-react";

export default function ContactUs() {
  const [copied, setCopied] = useState<string | null>(null);
  // store timeouts per type so each can expire independently
  const timeoutsRef = useRef<Record<string, number>>({});

  const handleCopy = (text: string, type: string) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }

    // set current copied type
    setCopied(type);

    // clear existing timeout for this type
    if (timeoutsRef.current[type]) {
      clearTimeout(timeoutsRef.current[type]);
    }

    // set a new timeout that only clears when the current copied matches this type
    const id = window.setTimeout(() => {
      setCopied((prev) => (prev === type ? null : prev));
      delete timeoutsRef.current[type];
    }, 1500);

    timeoutsRef.current[type] = id;
  };

  // clear any pending timeouts when the component unmounts
  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach((id) => clearTimeout(id));
      timeoutsRef.current = {};
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side — Logo + Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <img
            src="../../../assets/websiteLogo/sambhavilogo.png"
            alt="SAPL Logo"
            className="w-28 mx-auto md:mx-0 mb-2 drop-shadow-sm"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            We'd love to hear from you. Reach out for partnerships,
            collaborations, or any business inquiries — our team will respond
            within 24 hours.
          </p>
        </motion.div>

        {/* Right Side — Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-8 space-y-6">
            {/* Copy notification */}
            {copied && (
              <div
                className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-md z-20"
                role="status"
                aria-live="polite"
              >
                {copied === "email"
                  ? "Email copied"
                  : copied === "phone"
                  ? "Phone copied"
                  : "Copied"}
              </div>
            )}
            {/* Email */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4 min-w-0 flex-shrink">
                <div className="p-3 rounded-full bg-primary-primary/10 flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 font-medium">Email</p>
                  <a
                    href="mailto:cmd@saplonline.com"
                    className="text-primary-primary font-semibold hover:underline break-all"
                    onClick={(e) => {
                      if (
                        typeof window !== "undefined" &&
                        window.innerWidth < 768
                      ) {
                        e.preventDefault();
                        handleCopy("cmd@saplonline.com", "email");
                      }
                    }}
                    title="Click to compose on desktop, tap to copy on mobile"
                  >
                    cmd@saplonline.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("cmd@saplonline.com", "email")}
                className="hidden sm:inline-flex p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0"
                aria-label="Copy email"
              >
                {copied === "email" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4 min-w-0 flex-shrink">
                <div className="p-3 rounded-full bg-primary-primary/10 flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 font-medium">Phone</p>
                  <a
                    href="tel:9035908886"
                    className="text-primary-primary font-semibold hover:underline"
                    onClick={(e) => {
                      if (
                        typeof window !== "undefined" &&
                        window.innerWidth < 768
                      ) {
                        e.preventDefault();
                        handleCopy("9035908886", "phone");
                      }
                    }}
                    title="Click to call on desktop, tap to copy on mobile"
                  >
                    9035908886
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("9035908886", "phone")}
                className="hidden sm:inline-flex p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0"
                aria-label="Copy phone"
              >
                {copied === "phone" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
