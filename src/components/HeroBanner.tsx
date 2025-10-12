interface HeroBannerProps {
  title: string;
  tagline: string;
}

export default function HeroBanner({ title, tagline }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient with Subtle Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#024950] via-[#003135] to-[#00191D] animate-gradient-slow" />

      {/* Subtle Floating Texture (optional aesthetic layer) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,_white_0%,_transparent_40%)]" />

      {/* Smooth Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(2,73,80,1) 0%, rgba(2,73,80,0.7) 40%, rgba(2,73,80,0.0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative text-white text-center py-24 px-6 z-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </p>
      </div>
    </section>
  );
}
