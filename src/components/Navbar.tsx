import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Flyout Wrapper
const FlyoutLink = ({
  children,
  FlyoutContent,
  to,
}: {
  children: React.ReactNode;
  FlyoutContent?: React.ElementType;
  to?: string;
}) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      {/* Render clickable label so it both navigates on click and still shows flyout on hover */}
      {to ? (
        <Link
          to={to}
          className="flex items-center font-medium text-gray-700 hover:text-primary-primary"
        >
          {children}
        </Link>
      ) : (
        <button className="flex items-center font-medium text-gray-700 hover:text-primary-primary">
          {children}
        </button>
      )}

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15, transition: { duration: 0.25 } }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white shadow-lg rounded-md z-50"
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

// Solutions Dropdown Content
const SolutionsContent = () => (
  <div className="w-56 p-4 space-y-2">
    <Link to="/industries" className="block text-sm hover:text-primary-primary">
      Industries We Serve
    </Link>
    <Link to="/expertise" className="block text-sm hover:text-primary-primary">
      Our Expertise
    </Link>
    {/* <Link to="/channels" className="block text-sm hover:text-primary-primary">
      Distribution Network
    </Link> */}
  </div>
);

// Partners Dropdown Content
const PartnersContent = () => (
  <div className="w-40 p-4 space-y-2">
    <Link to="/brands" className="block text-sm hover:text-primary-primary">
      Brands
    </Link>
    <Link to="/channels" className="block text-sm hover:text-primary-primary">
      Channels
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
            <img
              src="../../assets/websiteLogo/sambhavilogo.png"
              alt="Sambhavi Logo"
              className="h-12 md:h-20 w-auto"
            />
            <div className="ml-3 leading-tight">
              <span className="block text-lg md:text-2xl font-semibold text-gray-900">
                Sambhavi Agencies Pvt. Ltd.
              </span>
              {/* <span className="block text-xs md:text-sm text-gray-600">
                Pvt. Ltd.
              </span> */}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center z-50">
            {/* About Us as direct link */}
            <Link
              to="/about"
              className="font-medium text-gray-700 hover:text-primary-primary hover:underline underline-offset-8 transition-all z-50"
            >
              About Us
            </Link>
            {/* Partners Dropdown: Brands and Channels */}
            <FlyoutLink FlyoutContent={PartnersContent} to="/brands">
              <span className="hover:underline underline-offset-8 transition-all z-50">
                Partners
              </span>
            </FlyoutLink>
            <FlyoutLink FlyoutContent={SolutionsContent} to="/industries">
              <span className="hover:underline underline-offset-8 transition-all z-50">
                Solutions
              </span>
            </FlyoutLink>
            <Link
              to="/contact"
              className="font-medium text-gray-700 hover:text-primary-primary hover:underline underline-offset-8 transition-all z-50"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-primary focus:outline-none z-50"
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
          <Link
            to="/about"
            className="block text-gray-700 hover:text-primary-primary"
          >
            About Us
          </Link>
          <div className="border-t border-gray-200 my-2" />
          <div>
            <span className="block text-gray-500 text-xs uppercase mb-1">
              Partners
            </span>
            <Link
              to="/brands"
              className="block text-gray-700 hover:text-primary-primary pl-2"
            >
              Brands
            </Link>
            <Link
              to="/channels"
              className="block text-gray-700 hover:text-primary-primary pl-2"
            >
              Channels
            </Link>
          </div>
          <div className="border-t border-gray-200 my-2" />
          <span className="block text-gray-500 text-xs uppercase mb-1">
            Solutions
          </span>
          <Link
            to="/industries"
            className="block text-gray-700 hover:text-primary-primary pl-2"
          >
            Industries We Serve
          </Link>
          <Link
            to="/expertise"
            className="block text-gray-700 hover:text-primary-primary pl-2"
          >
            Our Expertise
          </Link>

          <div className="border-t border-gray-200 my-2" />

          <Link
            to="/contact"
            className="block text-gray-700 hover:text-primary-primary"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
