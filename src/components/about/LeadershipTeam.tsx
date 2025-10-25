import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leadershipTeam = [
  {
    name: "Ashutosh Vaidya",
    title: "Business Leader & Consultant",
    bio: "25+ years of experience across top consumer and lifestyle brands including Samsonite, IFB-Bosch, Arvind Brands, Luxottica, Safilo Group, and Kurlon. Expertise in brand building, retail expansion, D2C, licensing, and business transformation.",
    image: "Ashutosh.png",
    linkedin: "https://www.linkedin.com/in/ashutoshv/",
  },
  {
    name: "Ankita Jain",
    title: "CEO, Pandesara Infrastructure Ltd",
    bio: "Experienced professional with strong background in infrastructure, legal affairs, and operations. Known for leadership in regulatory and project-driven environments across Gujarat.",
    image: "Ankita.jpg",
    linkedin: "http://linkedin.com/in/ankita-jain-268b4b59",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F9FAFB] to-[#EEF3F4] overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(2,73,80,0.08)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {leadershipTeam.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Image */}
                <div className="md:w-1/3 w-full flex justify-center md:justify-start p-6">
                  <img
                    src={`src/assets/leadership/${member.image}`}
                    alt={member.name}
                    className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full shadow-md border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="md:w-2/3 w-full p-6 md:pl-0 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#024950] font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#024950] font-medium hover:underline hover:text-[#036A72] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
