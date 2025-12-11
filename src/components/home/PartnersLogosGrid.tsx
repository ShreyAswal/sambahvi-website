import { useEffect, useRef, useState } from "react";
import { partnersLogos } from "../channels/partners";

export default function PartnersLogosGrid() {
  // adjust per-frame scroll speed (pixels per frame)
  const speed = 0.8; // increase for faster scroll
  const containerRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  // number of full cycles to scroll before wrapping
  const cycles = 5; // go through logos five times
  const groups = cycles + 1; // duplicate groups so there's always content
  const repeated = Array.from({ length: groups }).flatMap(() => partnersLogos);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

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
        <h2 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
          Trusted Sales Channels
        </h2>

        {/* marquee wrapper */}
        <div
          className="overflow-x-auto overflow-y-hidden py-4"
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ scrollbarWidth: "none" as any }}
        >
          <div className="flex items-center gap-8 w-max">
            {repeated.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-white rounded-xl p-3 shadow-sm border border-[#FFD966]/30 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ minWidth: 140 }}
                aria-hidden={idx >= partnersLogos.length}
              >
                <img
                  src={`/assets/partners/${partner.logo}`}
                  alt={partner.name}
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* hide scrollbar on WebKit */}
      <style>{`
        .overflow-x-auto::-webkit-scrollbar { display: none; }
        .overflow-x-auto { -ms-overflow-style: none; }
      `}</style>
    </section>
  );
}
