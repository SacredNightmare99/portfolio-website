import React from "react";
import Image from "next/image";
import type { Project } from "@/app/lib/projects";

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectPreviewModal: React.FC<Props> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="bg-neutral-900 max-w-2xl w-full rounded-xl overflow-hidden shadow-xl relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10
    text-white
    bg-black/60
    hover:bg-black/80
    rounded-full
    w-9 h-9
    flex items-center justify-center
    transition"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-56">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            {project.title}
          </h3>

          <p className="text-neutral-400 mb-4">
            {project.description}
          </p>

          <div className="flex gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="text-sm text-neutral-300 hover:text-white"
              >
                GitHub →
              </a>
            )}

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                className="text-sm text-neutral-300 hover:text-white"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewModal;

