"use client"

import AboutSection from './components/sections/AboutSection';
import WorksSection from './components/sections/WorksSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <div className="scroll-container">
      <div id="about">
        <AboutSection />
      </div>
      {/*
      <div id="works">
        <WorksSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
      */}
    </div>
  );
}
