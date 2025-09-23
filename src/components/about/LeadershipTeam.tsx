import { motion } from "framer-motion";

const leadershipTeam = [
  {
    name: "Ashutosh Vaidya",
    title: "Business Leader & Consultant",
    bio: "25+ years of experience across top consumer and lifestyle brands including Samsonite, IFB-Bosch, Arvind Brands, Luxottica, Safilo Group, and Kurlon. Expertise in brand building, retail expansion, D2C, licensing, and business transformation.",
    image: "Manish.png",
    linkedin: "#",
  },
  {
    name: "Ankita Jain",
    title: "CEO, Pandesara Infrastructure Ltd",
    bio: "Experienced professional with strong background in infrastructure, legal affairs, and operations. Known for leadership in regulatory and project-driven environments across Gujarat.",
    image: "Manish.png",
    linkedin: "#",
  },
  {
    name: "Manish Rungtha",
    title: "COO (Mock Data)",
    bio: "A seasoned operations expert with a proven track record in scaling business operations and building efficient processes across multiple sectors.",
    image: "Manish.png",
    linkedin: "#",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Leadership Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <img
                src={`src/assets/leadership/${member.image}`}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary-primary font-medium mb-2">{member.title}</p>
              <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-primary font-medium hover:underline"
              >
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
