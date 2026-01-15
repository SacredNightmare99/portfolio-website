"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollSection from "../utils/ScrollSection";
import { projects } from "@/app/lib/projects";
import ProjectTile from "../utils/ProjectTile";
import ProjectPreviewModal from "../utils/ProjectPreviewModal";

const layouts = [
  "md:col-span-1 md:row-span-2",
  "md:col-span-3 md:row-span-3",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-3",
  "md:col-span-1 md:row-span-3",
  "md:col-span-3 md:row-span-2",
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <ScrollSection>
      <div className="grid grid-cols-2 md:grid-cols-5 auto-rows-[140px] gap-4 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${layouts[index % layouts.length]} relative `}
          >
            <ProjectTile
              project={project}
              onClick={() => setActiveProject(index)}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject !== null && (
          <ProjectPreviewModal
            project={projects[activeProject]}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </ScrollSection>
  );
};

export default ProjectsSection;

