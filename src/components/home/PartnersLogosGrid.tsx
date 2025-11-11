// import { motion } from "framer-motion";
import { partnersLogos } from "../channels/partners";

export default function PartnersLogosGrid() {
  // adjust duration (s) for speed: larger = slower
  const duration = 20;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Trusted Sales Channels
        </h2>

        {/* marquee wrapper */}
        <div className="overflow-hidden py-4">
          <div
            className="partner-marquee-track flex items-center"
            style={{
              ["--marquee-duration" as any]: `${duration}s`,
            }}
          >
            {[0, 1].map((rep) => (
              <div
                key={rep}
                className="partner-marquee-group flex items-center gap-8 flex-shrink-0"
                aria-hidden={rep === 1}
              >
                {partnersLogos.map((partner, idx) => (
                  <div
                    key={idx}
                    // initial={{ opacity: 0, y: 6 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.4, delay: idx * 0.03 }}
                    className="flex items-center justify-center bg-white rounded-xl p-3 shadow-sm border border-transparent transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ minWidth: 140 }}
                  >
                    <img
                      src={`/assets/partners/${partner.logo}`}
                      alt={partner.name}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* local styles for marquee */}
      <style>{`
        .partner-marquee-track {
          display: flex;
          gap: 2rem;
          align-items: center;
          animation: partner-marquee var(--marquee-duration) linear infinite;
        }

        .partner-marquee-group {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        @keyframes partner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Pause on hover */
        .partner-marquee-track:hover {
          animation-play-state: paused;
        }

        /* Keep groups from shrinking so duplication aligns */
        .partner-marquee-group { flex: 0 0 auto; }
      `}</style>
    </section>
  );
}