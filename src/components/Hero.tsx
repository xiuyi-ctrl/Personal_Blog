import { useLanguage } from "../i18n/LanguageContext";

function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,80,255,0.08)_0%,_transparent_70%)]" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
          <span className="text-xs text-white/40 tracking-widest uppercase">
            {lang === "en" ? "Open for opportunities" : "开放合作"}
          </span>
        </div>

        <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tight mt-12">
          <span className="text-white/90">{t.hero.greeting}</span>
          <br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
            {t.hero.highlight}
          </span>
        </h1>

        <p className="mt-8 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed tracking-wide">
          {t.hero.subtitle}
        </p>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 tracking-wide"
          >
            {t.hero.cta}
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-white/20 text-white/70 hover:border-white/50 transition-all duration-300 text-sm tracking-wide"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
