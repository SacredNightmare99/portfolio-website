import React from "react";
import Image from "next/image";
import type { Project } from "@/app/lib/projects";

interface ProjectTileProps {
  project: Project;
  onClick: () => void;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative w-full h-full
        overflow-hidden rounded-lg
        bg-neutral-800
        transition-transform duration-300
        hover:scale-105 hover:z-10
      "
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        className="object-cover"
        unoptimized
      />

      {/* subtle overlay on hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default ProjectTile;

