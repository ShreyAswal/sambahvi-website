// src/components/brands/BrandModal.tsx
import React from "react";
import { motion } from "framer-motion";

interface BrandModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
  logo: string;
  website: string;
  description: string;
}

const BrandModal: React.FC<BrandModalProps> = ({ open, onClose, name, logo, website, description }) => {
  if (!open) return null;
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-primary-primary text-2xl font-bold">×</button>
        <img src={logo} alt={name} className="w-24 h-24 object-contain mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={website} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-primary-primary text-white rounded-full font-semibold shadow hover:bg-accent transition-colors duration-300">Visit Website</a>
      </motion.div>
    </motion.div>
  );
};

export default BrandModal;
