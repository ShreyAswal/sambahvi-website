import { motion } from "framer-motion";

export default function CompanyTimeline() {
  const events = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Launched with the vision to simplify finance.",
    },
    {
      year: "2019",
      title: "Seed Funding",
      description: "Raised $2M from angel investors to expand operations.",
    },
    {
      year: "2021",
      title: "Series A",
      description: "Secured $10M to scale product and engineering teams.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in Singapore & London.",
    },
    {
      year: "2025",
      title: "IPO",
      description: "Listed publicly and expanded services worldwide.",
    },
  ];

  return (
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
          <div className="relative z-10 w-6 h-6 bg-[#27acea] rounded-full border-4 border-white shadow-md mx-6" />

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
  );
}
