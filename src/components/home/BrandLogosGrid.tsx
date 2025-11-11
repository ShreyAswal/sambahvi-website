// ...existing code...
// import { motion } from "framer-motion";

const brands = [
  { name: "Police", logo: "Police-logo.png" },
  { name: "Victorinox", logo: "Victorinox-logo.png" },
  { name: "Wenger", logo: "Wenger-logo.png" },
  { name: "Ugreen", logo: "Ugreen-logo.png" },
  { name: "Aecooly", logo: "Aecooly-logo.png" },
  { name: "Doughnut", logo: "Doughnut-logo.png" },
  { name: "Edifier", logo: "Edifier-logo.png" },
  { name: "Hyperice", logo: "Hyperice-logo.png" },
  { name: "Shokz", logo: "Shokz-logo.png" },
  { name: "Tifosi", logo: "Tifosi-logo.png" },
  { name: "Kodak", logo: "Kodak-logo.png" },
  { name: "Tomtoc", logo: "Tomtoc-logo.png" },
  { name: "Travel Blue", logo: "Travel-Blue-logo.png" },
];

export default function BrandLogosGrid() {
  // adjust duration (s) for speed: larger = slower
  const duration = 22;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto  px-6 lg:px-12">
        {/* marquee wrapper */}
        <div className="overflow-hidden py-4">
          <div
            className="brand-marquee-track flex items-center"
            style={{
              // CSS defined below relies on CSS variables
              ["--marquee-duration" as any]: `${duration}s`,
            }}
          >
            {/* two groups duplicated for seamless loop */}
            {[0, 1].map((rep) => (
              <div
                key={rep}
                className="brand-marquee-group flex items-center gap-8 flex-shrink-0"
                aria-hidden={rep === 1}
              >
                {brands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center bg-white rounded-xl p-3 shadow-sm border border-transparent transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ minWidth: 140 }}
                  >
                    <img
                      src={`/assets/brands/${brand.logo}`}
                      alt={brand.name}
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
        .brand-marquee-track {
          display: flex;
          gap: 2rem;
          align-items: center;
          /* total width is groups side-by-side; translate by 50% (one group) */
          animation: marquee var(--marquee-duration) linear infinite;
        }

        .brand-marquee-group {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Pause on hover */
        .brand-marquee-track:hover {
          animation-play-state: paused;
        }

        /* Make sure duplicated group occupies equal width */
        .brand-marquee-group { flex: 0 0 auto; }
      `}</style>
    </section>
  );
}
// ...existing code...
