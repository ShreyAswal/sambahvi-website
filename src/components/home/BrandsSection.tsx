import victorinox from "../../assets/brands/Victorinox-logo.png";
import wenger from "../../assets/brands/Wenger-logo.png";
import police from "../../assets/brands/Police-logo-1536x864.png";
import travelblue from "../../assets/brands/Travel-Blue-Logo.png";
import amazon from "../../assets/brands/amazon-logo.png";
import flipkart from "../../assets/brands/flipkart-logo.png";
import myntra from "../../assets/brands/myntra-logo.png";
import tatacliq from "../../assets/brands/tata-cliq-logo.png";
import tatacliqluxury from "../../assets/brands/tata-cliq-luxury-logo.png";
import ajio from "../../assets/brands/ajio-logo.png";
import fancode from "../../assets/brands/fancode-logo.png";
import firstcry from "../../assets/brands/firstcry-logo.png";
import limeroad from "../../assets/brands/limeroad-logo.jpg";
import industrybuying from "../../assets/brands/industrybuying-logo.png";
import background from "../../assets/backgrounds/low-poly-grid-haikei.svg";

export default function BrandsSection() {
  const logos = [
    victorinox,
    wenger,
    police,

    amazon,
    flipkart,
    tatacliq,
    myntra,
    ajio,
    tatacliqluxury,

    fancode,
    firstcry,
    travelblue,
    limeroad,
    industrybuying,
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Smooth fade from top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-100 to-transparent z-10"></div>

      {/* Background Pattern */}
      <img
        src={background}
        alt="Background Grid"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="block text-sm md:text-base text-primary font-medium tracking-wide mb-2">
                Our Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                Trusted by Top Global & Indian Brands
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-md">
              We proudly distribute world-renowned lifestyle and tech brands
              like{" "}
              <span className="font-semibold">Victorinox, Wenger, Police</span>,
              while partnering with India's leading online marketplaces to bring
              premium products closer to consumers.
            </p>

            <a
              href="/brands"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-800 transition"
            >
              Explore All Brands
            </a>
          </div>

          {/* Right Logo Grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center p-6 rounded-lg">
              {logos.slice(0, 12).map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-4 bg-white/90 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  <img
                    src={logo}
                    alt={`Brand Logo ${i}`}
                    className="h-20 w-28 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
