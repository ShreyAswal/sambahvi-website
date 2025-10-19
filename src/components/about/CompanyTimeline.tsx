import { motion } from "framer-motion";

export default function CompanyTimeline() {
  const events = [
    {
      year: "2025 – Present",
      title: "Sambhavi Agencies Pvt. Ltd.",
      description: "Co-Founder",
    },
    {
      year: "2019 – 2024",
      title: "Safilo India Pvt. Ltd.",
      description: "Country Manager / Managing Director",
    },
    {
      year: "2018 – 2020",
      title: "Kurlon Enterprises Ltd.",
      description: "Chief Business & Marketing Officer",
    },
    {
      year: "2016 – 2017",
      title: "American Vision Pvt. Ltd.",
      description: "Chief Executive Officer",
    },
    {
      year: "2009 – 2016",
      title: "Luxottica India Eyewear Pvt. Ltd.",
      description: "Sales Director – South Asia",
    },
    {
      year: "2006 – 2009",
      title: "Arvind Brands (Arvind Mills Ltd.)",
      description: "Head – Sales (Own Brands)",
    },
    {
      year: "2003 – 2006",
      title: "IFB Bosch",
      description: "Vice President – Sales & Marketing",
    },
    {
      year: "1997 – 2003",
      title: "Samsonite South Asia Pvt. Ltd.",
      description: "Director – Sales & Exports",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#EEF3F4] to-[#F9FAFB]">
      {/* Top gradient stripe to match the previous section's diagonal gradient and blend edges */}
      <div className="absolute -top-12 left-0 w-full h-24 pointer-events-none bg-gradient-to-br from-[#F9FAFB] to-[#EEF3F4] opacity-95 blur-sm" />
      <div className="relative max-w-4xl mx-auto py-16">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200" />

      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className={`mb-16 flex items-center w-full`}
        >
          {/* Left side content */}
          <div
            className={`w-1/2 pr-8 text-right ${i % 2 !== 0 ? "invisible" : ""}`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{e.year}</h3>
            <p className="text-lg text-primary-light">{e.title}</p>
            <p className="text-gray-500">{e.description}</p>
          </div>

          {/* Timeline dot */}
          <div className="relative z-10 w-6 h-6 bg-[#1490ca] rounded-full border-4 border-white shadow-md mx-6" />

          {/* Right side content */}
          <div
            className={`w-1/2 pl-8 text-left ${i % 2 === 0 ? "invisible" : ""}`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{e.year}</h3>
            <p className="text-lg text-primary-light">{e.title}</p>
            <p className="text-gray-500">{e.description}</p>
          </div>
        </motion.div>
      ))}
      </div>
    </section>
  );
}
