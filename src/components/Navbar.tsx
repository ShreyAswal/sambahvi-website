import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/websiteLogo/SambahviMainLogo.png";

// Flyout Wrapper
const FlyoutLink = ({
  children,
  FlyoutContent,
}: {
  children: React.ReactNode;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <button className="flex items-center font-medium text-gray-700 hover:text-primary-primary">
        {children}
      </button>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white shadow-lg rounded-md"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// About Us Dropdown Content
const AboutContent = () => (
  <div className="w-48 p-4 space-y-2">
    <Link to="/about" className="block text-sm  hover:text-primary-primary">
      Our Story
    </Link>
    <Link
      to="/management"
      className="block text-sm  hover:text-primary-primary"
    >
      Leadership Team
    </Link>
  </div>
);

// Solutions Dropdown Content
const SolutionsContent = () => (
  <div className="w-56 p-4 space-y-2">
    <Link to="/industry" className="block text-sm hover:text-primary-primary">
      Industries We Serve
    </Link>
    <Link
      to="/competencies"
      className="block text-sm hover:text-primary-primary"
    >
      Our Expertise
    </Link>
    <Link to="/channels" className="block text-sm hover:text-primary-primary">
      Distribution Network
    </Link>
    <Link
      to="/specialists"
      className="block text-sm hover:text-primary-primary"
    >
      Business Models
    </Link>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md z-50 sticky top-0 bg-white">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src={logo} alt="Sambahvi Logo" className="h-20 w-32" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center z-50">
            <FlyoutLink FlyoutContent={AboutContent}>
              <span className="hover:underline underline-offset-8 transition-all z-50">
                About Us
              </span>
            </FlyoutLink>
            <FlyoutLink FlyoutContent={SolutionsContent}>
              <span className="hover:underline underline-offset-8 transition-all z-50">
                Solutions
              </span>
            </FlyoutLink>
            <Link
              to="/brands"
              className="font-medium text-gray-700 hover:text-primary hover:underline underline-offset-8 transition-all z-50"
            >
              Partners
            </Link>
            <Link
              to="/contact"
              className="font-medium text-gray-700 hover:text-primary hover:underline underline-offset-8 transition-all z-50"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none z-50"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <Link to="/about" className="block text-gray-700 hover:text-primary">
            Our Story
          </Link>
          <Link
            to="/management"
            className="block text-gray-700 hover:text-primary"
          >
            Leadership Team
          </Link>
          <Link
            to="/industry"
            className="block text-gray-700 hover:text-primary"
          >
            Industries We Serve
          </Link>
          <Link
            to="/competencies"
            className="block text-gray-700 hover:text-primary"
          >
            Our Expertise
          </Link>
          <Link
            to="/channels"
            className="block text-gray-700 hover:text-primary"
          >
            Distribution Network
          </Link>
          <Link
            to="/specialists"
            className="block text-gray-700 hover:text-primary"
          >
            Business Models
          </Link>
          <Link to="/brands" className="block text-gray-700 hover:text-primary">
            Partners
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-primary"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
