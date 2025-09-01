import video from "../../assets/homePageVideo/heroPageVid.mp4";
import video2 from "../../assets/homePageVideo/HeroPageVid2.mp4";
export default function Hero() {
  return (
    <>
      <section className="relative flex items-center justify-start px-6 md:px-16 py-32 text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          src={video2}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 z-10 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-20 max-w-3xl text-left mt-20 mb-5">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Connecting Global Brands with Indian Consumers
          </h1>

          {/* Italic Line */}
          <p className="text-md md:text-lg italic text-gray-200 mb-4">
            Delivering premium experiences through efficient distribution,
            seamless online availability, and trusted global partnerships.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-10">
            <a
              href="/brands"
              className="bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md 
           hover:bg-black hover:text-white transition"
            >
              Explore Brands
            </a>
            <a
              href="/contact"
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* Supporting Paragraph Section - BELOW video */}
      <section className="relative bg-lightGray py-16 px-6 text-center">
        <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-gray-100 to-transparent" />

        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-sans font-medium text-gray-800 leading-relaxed mb-8">
            Sambahvi Agencies Pvt. Ltd. is the{" "}
            <span className="font-semibold text-gray-900">
              exclusive e-commerce distributor
            </span>{" "}
            for premium global lifestyle and tech brands like{" "}
            <span className="font-semibold text-gray-900">
              Victorinox, Wenger, and Police
            </span>
            . With a{" "}
            <span className="font-semibold">10,000 sq. ft. warehouse</span> and
            a growing portfolio, we deliver{" "}
            <span className="font-semibold">
              innovation, quality, and trust
            </span>{" "}
            to Indian consumers.
          </p>

          {/* CTA */}
          <a
            href="/about"
            className="group inline-flex items-center gap-6 bg-black text-white px-10 py-3 rounded-lg font-semibold shadow-md transition-all hover:bg-gray-800"
          >
            Learn More
            {/* SVG Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className=" w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
