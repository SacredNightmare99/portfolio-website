import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import { getProjects } from './lib/projects';

export default function Home() {
  const projects = getProjects();

  return (
    <div className="w-full relative flex flex-col items-center">
      <div id="about" className="w-full">
        <AboutSection />
      </div>

      <div id="projects" className="w-full py-6 sm:py-10">
        <ProjectsSection projects={projects} />
      </div>

      <div id="contact" className="w-full py-6 sm:py-10">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
