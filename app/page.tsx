import Footer from "./components/layout/Footer";
import Header from "./components/layout/header";
import ContactSection from "./components/sections/ContactSection";
import DesignProcess from "./components/sections/DesignProcess";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/heroSection";
import NewsletterSection from "./components/sections/NewsletterSection";
import ServicesSection from "./components/sections/ServicesSection";
import StatsSection from "./components/sections/StatsSection";
import TechnologiesSection from "./components/sections/TechnologiesSection";
import WorkSection from "./components/sections/WorkSection";
import FloatingHeader from "./components/ui/floating-header";
import MyDesignSection from "./components/sections/MyDesignSection";


export default function Home() {
  return (
    <main className="space-y-10 sm:space-y-20 2xl:space-y-30 bg-white">
      {/* <FloatingHeader /> */}
      <section className="sm:px-4 px-2 sm:pt-4 pt-2 bg-black">
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
      <section>
        <StatsSection />
      </section>
      <section id="projects">
        <WorkSection />
      </section>
      <MyDesignSection />
      <section id="contact">
        <ContactSection />
      </section>
      <NewsletterSection />
      <Footer />
    </main>
  );
}