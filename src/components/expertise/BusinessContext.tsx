// src/components/BusinessModel/BusinessContent.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Model } from "./BusinessModel";

const listItemVariants = {
  hidden: { opacity: 0, y: 6 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.03 } }),
};

const contentVariants = {
  enter: { opacity: 0, x: 12 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
};

interface Props {
  MODELS: Model[];
  active: string;
  setActive: (id: string) => void;
  openAccordion: string | null;
  setOpenAccordion: React.Dispatch<React.SetStateAction<string | null>>;
  rightRef: React.RefObject<HTMLDivElement | null>;
}

export default function BusinessContent({
  MODELS,
  active,
  setActive,
  openAccordion,
  setOpenAccordion,
  rightRef,
}: Props) {
  // brief highlight for nav items when programmatically changing selection
  const highlightTimer = React.useRef<number | null>(null);
  const [highlightId, setHighlightId] = React.useState<string | null>(null);

  React.useEffect(() => {
    return () => {
      if (highlightTimer.current) window.clearTimeout(highlightTimer.current);
    };
  }, []);

  const triggerHighlight = (id: string) => {
    setHighlightId(id);
    if (highlightTimer.current) window.clearTimeout(highlightTimer.current);
    highlightTimer.current = window.setTimeout(() => setHighlightId(null), 900);
  };

  return (
    <div className="mt-8 ">
      {/* Desktop Split View */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 bg-[#0b0b0b] p-6 rounded-2xl">
        {/* Left: Sticky Navigation */}
        <aside className="md:col-span-4 lg:col-span-3">
          <nav className="sticky top-24 space-y-3">
            {MODELS.map((m, i) => {
              const isActive = m.id === active;
              return (
                <motion.button
                  key={m.id}
                  onClick={() => {
                    setActive(m.id);
                    triggerHighlight(m.id);
                  }}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={listItemVariants}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-start gap-3 ${
                    isActive || highlightId === m.id
                      ? " border-[#D4AF37]/20 shadow-sm"
                      : "hover:bg-[#111111]"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center rounded-lg p-2 ${
                      isActive ? "bg-[#D4AF37]/10" : "bg-[#0f0f10]"
                    }`}
                  >
                    <m.Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-[#D4AF37]" : "text-white/80"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold text-sm text-white ${
                        isActive ? "text-[#D4AF37]" : ""
                      }`}
                    >
                      {m.title}
                    </h4>
                    <p className="text-xs text-white/80 mt-1">{m.short}</p>
                  </div>
                </motion.button>
              );
            })}
          </nav>
        </aside>

        {/* Right: Animated Panel */}
        <div className="md:col-span-8 lg:col-span-9">
          <div
            ref={rightRef}
            className="bg-[#0f0f10] rounded-2xl p-8 border border-transparent shadow-sm min-h-[280px] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {MODELS.map(
                (m) =>
                  m.id === active && (
                    <motion.div
                      key={m.id}
                      variants={contentVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.45 }}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                          <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                            {m.title}
                          </h3>
                          <p className="text-white/80 mb-4">{m.short}</p>

                          <div className="space-y-3">
                            <h5 className="text-sm font-semibold text-white">
                              How it works
                            </h5>
                            <ul className="list-inside space-y-2 text-white/80 text-sm">
                              {m.description.map((d, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-[3px] text-[#D4AF37]">
                                    •
                                  </span>
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6">
                            <h5 className="text-sm font-semibold text-white">
                              Ideal for
                            </h5>
                            <p className="text-sm text-white/80 mt-2">
                              {m.idealFor}
                            </p>
                          </div>
                        </div>

                        <div className="md:w-1/2 flex items-start">
                          <motion.div
                            key={m.id + "-case"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full bg-[#0b0b0b] border border-transparent rounded-xl p-6 shadow-sm overflow-y-hidden max-h-[420px]"
                          >
                            <h5 className="text-base font-semibold text-white mb-3">
                              <span className="inline-flex items-center gap-2">
                                <m.Icon className="w-5 h-5 text-[#D4AF37]" />
                                Case Study
                              </span>
                            </h5>
                            <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">
                              {m.caseStudy}
                            </p>
                          </motion.div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex items-center gap-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-3 bg-[#D4AF37] text-black px-5 py-2 rounded-full font-medium shadow-sm hover:bg-[#B8860B] transition"
                        >
                          Talk to our team
                        </a>
                        <button
                          onClick={() => {
                            const nextIdx =
                              (MODELS.findIndex((x) => x.id === m.id) + 1) %
                              MODELS.length;
                            setActive(MODELS[nextIdx].id);
                            rightRef.current?.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                            // highlight the newly activated nav item briefly
                            triggerHighlight(MODELS[nextIdx].id);
                          }}
                          aria-label="Next model"
                          title="Next model"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] px-3 py-1.5 rounded-full border border-[#D4AF37]/10 bg-[#0f0f10] hover:bg-[#0b0b0b]/80 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/20"
                        >
                          <span>Next model</span>
                          <svg
                            className="w-4 h-4 text-[#D4AF37]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden mt-8 space-y-4">
        {MODELS.map((m) => {
          const isOpen = openAccordion === m.id;
          return (
            <div
              key={m.id}
              className="bg-[#0f0f10] rounded-2xl border border-transparent shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenAccordion((prev) => (prev === m.id ? null : m.id))
                }
                className="w-full flex items-center gap-3 p-4 text-left"
                aria-expanded={isOpen}
              >
                <div className="p-2 rounded-lg bg-[#0b0b0b]">
                  <m.Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">{m.title}</h4>
                    <span className="text-xs text-white/80">
                      {isOpen ? "Close" : "Open"}
                    </span>
                  </div>
                  <p className="text-xs text-white/80 mt-1">{m.short}</p>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-4 pb-4"
                  >
                    <div className="text-sm text-white/80">
                      <h5 className="font-medium mt-2">How it works</h5>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        {m.description.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        <h5 className="font-medium">Ideal for</h5>
                        <p className="text-sm text-white/80 mt-1">
                          {m.idealFor}
                        </p>
                      </div>

                      <div className="mt-4">
                        <a
                          href="/contact"
                          className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
