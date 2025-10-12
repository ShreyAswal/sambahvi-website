// import victorinox from "../../assets/brands/Victorinox-logo.png";
// import wenger from "../../assets/brands/Wenger-logo.png";
// import police from "../../assets/brands/police-logo.png";
// import travelblue from "../../assets/brands/Travel-Blue-Logo.png";
// import amazon from "../../assets/partners/amazon-logo.png";
// import flipkart from "../../assets/partners/flipkart-logo.png";
// import myntra from "../../assets/partners/myntra-logo.png";
// import tatacliq from "../../assets/partners/tata-cliq-logo.png";
// import tatacliqluxury from "../../assets/partners/tata-cliq-luxury-logo.png";
// import ajio from "../../assets/partners/ajio-logo.png";
// import fancode from "../../assets/brands/fancode-logo.png";
// import firstcry from "../../assets/partners/firstcry-logo.png";
// import limeroad from "../../assets/partners/limeroad-logo.png";
// import industrybuying from "../../assets/partners/industrybuying-logo.png";
import background from "../../assets/backgrounds/low-poly-grid-haikei.svg";
import { motion } from "framer-motion";
import BrandLogosGrid from "./BrandLogosGrid";
import PartnersLogosGrid from "./PartnersLogosGrid";

export default function BrandsAndPartnersSection() {
  // const brandLogos = [
  //   victorinox,
  //   wenger,
  //   police,
  //   travelblue,
  //   fancode,
  //   firstcry,
  // ];

  // const partnerLogos = [
  //   amazon,
  //   flipkart,
  //   myntra,
  //   ajio,
  //   tatacliq,
  //   tatacliqluxury,
  //   limeroad,
  //   industrybuying,
  // ];

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background Pattern */}
      <img
        src={background}
        alt="Background Grid"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="block text-sm md:text-base text-primary font-medium tracking-wide mb-2">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Trusted by Global & Indian Leaders
          </h2>
        </div>

        {/* Brands Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Brands
          </h3>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Exclusive distributor for world-renowned lifestyle and tech brands.
          </p>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"> */}
            <BrandLogosGrid />
          {/* </div> */}
          {/* CTA for Brands */}
          <div className="text-center mt-8">
            <a
              href="/brands"
              className="inline-flex items-center gap-2 font-semibold text-gray-800 relative group"
            >
              Explore All Brands
              <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-dark">
                →
              </span>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20" />

        {/* Partners Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Retail Partners
          </h3>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Partnered with India’s leading marketplaces to deliver premium
            products closer to consumers.
          </p>
          <PartnersLogosGrid />
          {/* CTA for Partners */}
          <div className="text-center mt-8">
            <a
              href="/channels"
              className="inline-flex items-center gap-2 font-semibold text-gray-800 relative group"
            >
              See All Partners
              <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-dark">
                →
              </span>
              {/*  Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
