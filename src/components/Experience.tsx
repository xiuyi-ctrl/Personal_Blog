import { useLanguage } from "../i18n/LanguageContext";

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32">
      <div className="max-w-[1700px] mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-xs text-white/30 tracking-[0.3em] uppercase">
            {t.experience.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white/90">
            {t.experience.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] flex items-center justify-center overflow-hidden">
                <div className="text-6xl opacity-20 select-none">[ ]</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/[0.04] -z-10" />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <p className="text-base text-white/60 leading-relaxed">
              {t.experience.intro1}
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              {t.experience.intro2}
            </p>

            <div className="pt-4 space-y-3">
              <p className="text-xs text-white/30 tracking-widest uppercase">
                {t.experience.contactLabel}
              </p>
              <a href={`mailto:${t.experience.email}`} className="block text-lg text-white/70 hover:text-white transition-colors">
                {t.experience.email}
              </a>
              <p className="text-sm text-white/40">{t.experience.location}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-20">
          {t.experience.stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 border border-white/[0.04] bg-white/[0.02]">
              <p className="text-4xl font-bold text-white/90">{stat.value}</p>
              <p className="text-sm text-white/40 mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
