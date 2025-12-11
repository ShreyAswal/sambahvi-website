import { useEffect, useRef, useState } from "react";

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
  // pixels per animation frame (adjust for speed)
  const speed = 0.8; // increase for faster scroll (match partners)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  // number of full cycles to scroll before wrapping
  const cycles = 5; // go through logos five times
  const groups = cycles + 1; // duplicate groups so there's always content
  const repeated = Array.from({ length: groups }).flatMap(() => brands);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Ensure the inner width is at least groups*visible area so duplication works
    let raf = 0;

    const animate = () => {
      if (!pausedRef.current && el) {
        const groupWidth = el.scrollWidth / groups;
        const resetThreshold = groupWidth * cycles; // wrap after 'cycles' groups
        let next = posRef.current + speed;
        if (next >= resetThreshold) next = next - resetThreshold;
        posRef.current = next;
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(animate);
    };

    // initialize to avoid a visible jump on first paint
    posRef.current = 0;
    el.scrollLeft = 0;
    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* marquee wrapper */}
        <div
          className="overflow-x-auto overflow-y-hidden py-4"
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          // hide native scrollbars
          style={{ scrollbarWidth: "none" as any }}
        >
          <div className="flex items-center gap-8 w-max">
            {repeated.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-white rounded-xl p-3 shadow-sm border border-[#FFD966]/30 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ minWidth: 140 }}
                aria-hidden={idx >= brands.length}
              >
                <img
                  src={`/assets/brands/${brand.logo}`}
                  alt={brand.name}
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* small CSS to hide scrollbar on WebKit */}
      <style>{`
        /* hide scrollbar for webkit browsers */
        .brand-marquee-track::-webkit-scrollbar { display: none; }
        .overflow-x-auto { -ms-overflow-style: none; }
      `}</style>
    </section>
  );
}
