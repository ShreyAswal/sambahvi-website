import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { partners } from "./partners";

const ChannelPartners = () => {
  return (
    <section className="py-14 bg-[#0b0b0b] text-white relative overflow-hidden">
      <div className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        {/* Left Text */}
        <div>
          <h3 className="text-3xl md:text-5xl font-semibold text-[#D4AF37]">
            Trusted by India’s Leading Distribution Brands
          </h3>
          <p className="text-base md:text-lg text-slate-300 mt-4 md:mt-6">
            From e-commerce giants to premium retailers, we partner with India’s
            most recognized platforms to deliver scale and reach.
          </p>
        </div>

        {/* Right Shuffle Logos */}
        <ShuffleGrid />
      </div>
    </section>
  );
};

// Utility shuffle function
const shuffle = (array: (typeof partners)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(partners).map((p) => (
    <motion.div
      key={p.name}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full flex items-center justify-center p-2 bg-white rounded-lg shadow-sm"
    >
      <img
        src={`/assets/partners/${p.logo}`}
        alt={p.name}
        className="max-h-12 object-contain hover:grayscale-0 transition duration-300"
      />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current ?? undefined);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[340px] gap-4 justify-items-center items-center mx-auto">
      {squares.slice(0, 9).map((sq) => sq)}
    </div>
  );
};

export default ChannelPartners;
