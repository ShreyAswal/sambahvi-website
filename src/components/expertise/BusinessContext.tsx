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
  return (
    <div className="mt-8 ">
      {/* Desktop Split View */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 bg-[#f9fafb] p-6 rounded-2xl">
        {/* Left: Sticky Navigation */}
        <aside className="md:col-span-4 lg:col-span-3">
          <nav className="sticky top-24 space-y-3">
            {MODELS.map((m, i) => {
              const isActive = m.id === active;
              return (
                <motion.button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={listItemVariants}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-start gap-3 ${
                    isActive
                      ? "bg-[rgba(37,99,235,0.06)] border border-primary-primary shadow-sm"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center rounded-lg p-2 ${
                      isActive ? "bg-primary-primary/10" : "bg-white"
                    }`}
                  >
                    <m.Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-primary-primary" : "text-gray-500"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold text-sm text-gray-900 ${
                        isActive ? "text-primary-primary" : ""
                      }`}
                    >
                      {m.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">{m.short}</p>
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
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm min-h-[280px] overflow-hidden"
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
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {m.title}
                          </h3>
                          <p className="text-gray-700 mb-4">{m.short}</p>

                          <div className="space-y-3">
                            <h5 className="text-sm font-semibold text-gray-800">
                              How it works
                            </h5>
                            <ul className="list-inside space-y-2 text-gray-600 text-sm">
                              {m.description.map((d, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-[3px] text-primary-primary">
                                    •
                                  </span>
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6">
                            <h5 className="text-sm font-semibold text-gray-800">
                              Ideal for
                            </h5>
                            <p className="text-sm text-gray-600 mt-2">
                              {m.idealFor}
                            </p>
                          </div>
                        </div>

                        <div className="md:w-1/2 flex items-start">
                          <div className="w-full grid grid-cols-1 gap-4">
                            {m.examples?.map((ex, idx) => (
                              <article
                                key={idx}
                                className="p-4 rounded-lg border border-gray-100 bg-gray-50"
                              >
                                <h6 className="text-sm font-semibold text-gray-900">
                                  {ex.title}
                                </h6>
                                {ex.result && (
                                  <div className="text-xs text-primary-primary font-medium mt-1">
                                    {ex.result}
                                  </div>
                                )}
                                {ex.metric && (
                                  <div className="text-xs text-gray-600 mt-1">
                                    {ex.metric}
                                  </div>
                                )}
                                {ex.blurb && (
                                  <p className="text-sm text-gray-700 mt-2">
                                    {ex.blurb}
                                  </p>
                                )}
                              </article>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex items-center gap-4">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-3 bg-primary-primary text-white px-5 py-2 rounded-full font-medium shadow-sm hover:brightness-95 transition"
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
                          }}
                          className="text-sm text-primary-primary underline"
                        >
                          Next model
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
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenAccordion((prev) => (prev === m.id ? null : m.id))
                }
                className="w-full flex items-center gap-3 p-4 text-left"
                aria-expanded={isOpen}
              >
                <div className="p-2 rounded-lg bg-white">
                  <m.Icon className="w-6 h-6 text-[#1490ca]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{m.title}</h4>
                    <span className="text-xs text-gray-500">
                      {isOpen ? "Close" : "Open"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{m.short}</p>
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
                    <div className="text-sm text-gray-700">
                      <h5 className="font-medium mt-2">How it works</h5>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        {m.description.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        <h5 className="font-medium">Ideal for</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          {m.idealFor}
                        </p>
                      </div>

                      <div className="mt-4">
                        <a
                          href="/contact"
                          className="inline-block bg-primary-primary text-white px-4 py-2 rounded-full text-sm"
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
