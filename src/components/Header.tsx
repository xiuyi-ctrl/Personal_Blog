import { useLanguage } from "../i18n/LanguageContext";

function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-lg border-b border-white/[0.03]">
      <div className="max-w-[1700px] mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-white/80 hover:text-white transition-colors">
          {t.nav.brand}
        </a>

        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-10">
            {t.nav.links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/50 hover:text-white transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="px-5 py-2 text-sm border border-white/20 text-white/80 hover:bg-white hover:text-black transition-all duration-300 rounded-none tracking-wide"
          >
            {t.nav.contactBtn}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;