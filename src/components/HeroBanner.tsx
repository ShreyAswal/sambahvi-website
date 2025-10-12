interface HeroBannerProps {
  title: string;
  tagline: string;
}

export default function HeroBanner({ title, tagline }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#024950] to-[#003135]" />

      {/* Smooth Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, rgba(2,73,80,1) 0%, rgba(2,73,80,0.7) 40%, rgba(2,73,80,0.0) 100%)"
        }}
      />

      {/* Content */}
      <div className="relative text-white text-center py-24 px-6 z-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </p>
      </div>
    </section>
  );
}
