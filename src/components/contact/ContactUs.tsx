import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, CheckCircle2 } from "lucide-react";
import logo from "../../assets/websiteLogo/sambhavilogo.png";

export default function ContactUs() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Logo + Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <img
            src={logo}
            alt="SAPL Logo"
            className="w-28 mx-auto md:mx-0 mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We’d love to hear from you. Reach out for partnerships,
            collaborations, or any business inquiries — our team will respond
            within 24 hours.
          </p>
        </motion.div>

        {/* Right: Contact Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary-primary/10">
                <Mail className="w-5 h-5 text-primary-primary" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-medium">Email</p>
                <a
                  href="mailto:cmd@saplonline.com"
                  className="text-primary-primary font-semibold hover:underline"
                >
                  cmd@saplonline.com
                </a>
              </div>
              <button
                onClick={() => handleCopy("cmd@saplonline.com", "email")}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                {copied === "email" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary-primary/10">
                <Phone className="w-5 h-5 text-primary-primary" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-medium">Phone</p>
                <a
                  href="tel:9035908886"
                  className="text-primary-primary font-semibold hover:underline"
                >
                  9035908886
                </a>
              </div>
              <button
                onClick={() => handleCopy("9035908886", "phone")}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
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
