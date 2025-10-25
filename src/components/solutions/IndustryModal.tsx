import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
}

export default function IndustryModal({
  isOpen,
  onClose,
  title,
  description,
  images,
}: IndustryModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const selectedImage =
    images && images.length > 0 ? images[selectedIndex] : "";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    setSelectedIndex(0);
    setUserInteracted(false);
  }, [images, isOpen]);

  useEffect(() => {
    if (!isOpen || !images || images.length <= 1 || userInteracted) return;
    const id = window.setInterval(() => {
      setSelectedIndex((s) => (images.length ? (s + 1) % images.length : 0));
    }, 2000);
    return () => window.clearInterval(id);
  }, [isOpen, images, userInteracted]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4 }}
          // Responsive: stacked on mobile, row on md+
          className="relative bg-white rounded-3xl shadow-2xl w-[90vw] h-[85vh] flex flex-col md:flex-row overflow-hidden"
        >
          {/* Info Section (Top 40% on mobile, Left 40% on desktop) */}
          <div className="w-full md:w-[40%] h-[40%] md:h-full p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">
            <h3 className="text-xl md:text-2xl font-bold text-[#024950] mb-3 md:mb-4">
              {title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {description}
            </p>

            {/* Only show thumbnails for md+ screens */}
            <div className="hidden md:grid grid-cols-3 gap-4 mt-6">
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`${title} ${i + 1}`}
                  className={`w-full h-24 object-cover rounded-xl cursor-pointer border-2 transition-all ${
                    selectedIndex === i
                      ? "border-[#024950]"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setSelectedIndex(i);
                    setUserInteracted(true);
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>

          {/* Image Section (Bottom 60% on mobile, Right 60% on desktop) */}
          <div className="w-full md:w-[60%] h-[60%] md:h-full flex items-center justify-center bg-gray-50 relative overflow-hidden p-6 md:p-8 rounded-2xl -mt-6 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain bg-transparent"
              />
            </AnimatePresence>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
