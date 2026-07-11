import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Strengths />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
