import { useLanguage } from "../i18n/LanguageContext";
import Particles from "./Particles";
import LogoLoop from "./LogoLoop";

const footerLogos = [
  {
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.8.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.804 2.807 1.36 3.497.287.077-.554.2-.948.402-1.155-4.2-.455-8.7-2.15-8.7-9.58 0-2.1.76-3.61 2.01-4.88-.2-.46-.87-2.31.19-4.79 0 0 1.645-.48 5.29 1.96A20.04 20.04 0 0112 6.8c1.7-.36 3.48-.57 5.23-.65 3.31 1.47 5.28 1.96 5.28 1.96.38 2.48-.29 4.31.19 4.79 1.25 1.27 2.01 2.78 2.01 4.88 0 7.08-4.48 9.2-8.72 9.58.68.56.88 1.55.88 3.15V21c0 .28.22.5.5.5H12a.5.5 0 0 0 .5-.5V12c0-5.302 3.438-9.8 8.207-11.387C23.373 2.197 18.627 0 12 0z" />
      </svg>
    ),
    title: 'GitHub',
    href: 'https://github.com/xiuyi-ctrl',
  },
  {
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6L12 13L2 6" />
      </svg>
    ),
    title: 'Email',
    href: 'mailto:2998526825@qq.com',
  },
  {
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M12 8a4 4 0 0 0-4 4" />
        <path d="M12 16a4 4 0 0 1 4-4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'React Bits',
    href: 'https://www.reactbits.dev/',
  },
];

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        particleCount={200}
        particleSpread={20}
        speed={0.1}
        particleColors={['#c084fc', '#f472b6', '#38bdf8', '#a855f7', '#ec4899', '#0ea5e9', '#ffffff']}
        particleBaseSize={80}
        sizeRandomness={1}
        cameraDistance={25}
        particleHoverFactor={1.8}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(120,80,255,0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs text-white/30 tracking-[0.3em] uppercase">
            Contact
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            <span className="text-white/90">{t.contact.title}</span>
            <br />
            <span className="bg-gradient-to-r from-white via-white/70 to-white/30 bg-clip-text text-transparent">
              {t.contact.highlight}
            </span>
          </h2>
          <p className="text-base text-white/40 mt-6 max-w-xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${t.contact.email}`}
                className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 tracking-wide"
              >
                {t.contact.emailLabel}
              </a>
              <a
                href="https://github.com/xiuyi-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 text-white/70 hover:border-white/50 transition-all duration-300 text-sm tracking-wide"
              >
                {t.contact.github}
              </a>
            </div>

            <div className="w-full max-w-[280px]">
              <LogoLoop
                logos={footerLogos}
                speed={120}
                direction="left"
                logoHeight={24}
                gap={32}
                pauseOnHover
                fadeOut
                fadeOutColor="#0a0a0a"
                ariaLabel="Footer links"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;