import Header from "./components/layout/header";
import ContactSection from "./components/sections/ContactSection";
import DesignProcess from "./components/sections/DesignProcess";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/heroSection";
import ServicesSection from "./components/sections/ServicesSection";
import TechnologiesSection from "./components/sections/TechnologiesSection";
import WorkSection from "./components/sections/WorkSection";


export default function Home() {
  return (
    <main className="space-y-10 sm:space-y-20 2xl:space-y-30 pb-10 sm:pb-20 bg-white">

      <section className="sm:px-4 px-2 sm:pt-4 pt-2 bg-white">
        <div className="bg-black rounded-xl relative">
          <Header />
          <HeroSection />
        </div>
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      {/* Placeholder sections */}
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="design-process">
        <DesignProcess />
      </section>
      <section id="technologies">
        <TechnologiesSection />
      </section>
      <section id="projects">
        <WorkSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}