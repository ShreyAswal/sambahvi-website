// import video from "../../assets/homePageVideo/heroPageVid.mp4";
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
              href="/about"
              className="bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md 
           hover:bg-black hover:text-white transition"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
