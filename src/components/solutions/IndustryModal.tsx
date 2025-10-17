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

  // derive selected image from index (safe fallback)
  const selectedImage =
    images && images.length > 0 ? images[selectedIndex] : "";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // reset index when images change or modal opens
  useEffect(() => {
    setSelectedIndex(0);
    setUserInteracted(false);
  }, [images, isOpen]);

  // auto-advance every 2 seconds while modal is open
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
          className="relative bg-white rounded-3xl shadow-2xl w-[80vw] h-[80vh] flex overflow-hidden"
        >
          {/* Left: Info + Thumbnails */}
          <div className="w-[40%] p-8 overflow-y-auto border-r border-gray-200">
            <h3 className="text-2xl font-bold text-[#024950] mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="grid grid-cols-3 gap-4">
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

          {/* Right: Large Image Viewer */}
          <div className="w-[60%] flex items-center justify-center bg-gray-50 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-h-[90%] max-w-[90%] rounded-2xl shadow-lg object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
