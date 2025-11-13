import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative py-20 bg-[#024950] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Build Something Together
          </h2>
          <p className="text-lg text-[#AFDDE5] max-w-md mx-auto lg:mx-0">
            Have a project in mind or want to explore partnership opportunities?
            We’d love to connect and create impact together.
          </p>

          <div className="mt-6 space-y-2">
            <p className="flex items-center justify-center lg:justify-start gap-3 font-medium">
              📧
              <a
                href="mailto:ebusiness@saplonline.com"
                className="text-[#0FA4AF] hover:underline transition"
              >
                ebusiness@saplonline.com
              </a>
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-3 font-medium">
              📞
              <a
                href="tel:+919035908886"
                className="text-[#0FA4AF] hover:underline transition"
              >
                9035908886
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right - Floating Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center ml-6"
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
              boxShadow: [
                "0 0 0px rgba(15,164,175,0.0)",
                "0 0 30px rgba(15,164,175,0.4)",
                "0 0 0px rgba(15,164,175,0.0)",
              ],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="bg-[#003135]/60 backdrop-blur-md p-8 rounded-3xl ring-2 ring-[#0FA4AF]/30 flex items-center justify-center"
          >
            <img
              src="../../assets/websiteLogo/sambhavilogo.png"
              alt="Company Logo"
              className="w-40 h-auto object-contain drop-shadow-[0_0_20px_rgba(175,221,229,0.4)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#0FA4AF]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#AFDDE5]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
