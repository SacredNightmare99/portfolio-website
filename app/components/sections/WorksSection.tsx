"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollSection from '../utils/ScrollSection';
import IPhone from '../utils/iPhone';
import ProjectCard from '../utils/ProjectCard'; 
import { projects } from '@/app/lib/projects'; 

const mobileProjects = projects.filter(p => p.type === 'mobile');
const webProjects = projects.filter(p => p.type === 'web');

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
);

const WorksSection = () => {
  // --- Mobile Carousel State ---
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const currentMobileProject = mobileProjects[currentMobileIndex];

  const goToPreviousMobile = () => {
    const isFirst = currentMobileIndex === 0;
    const newIndex = isFirst ? mobileProjects.length - 1 : currentMobileIndex - 1;
    setCurrentMobileIndex(newIndex);
  };

  const goToNextMobile = () => {
    const isLast = currentMobileIndex === mobileProjects.length - 1;
    const newIndex = isLast ? 0 : currentMobileIndex + 1;
    setCurrentMobileIndex(newIndex);
  };

  // --- Web Project State ---
  const [currentWebIndex, setCurrentWebIndex] = useState(0);
  const currentWebProject = webProjects[currentWebIndex];

  const goToPreviousWeb = () => {
    const isFirst = currentWebIndex === 0;
    const newIndex = isFirst ? webProjects.length - 1 : currentWebIndex - 1;
    setCurrentWebIndex(newIndex);
  };

  const goToNextWeb = () => {
    const isLast = currentWebIndex === webProjects.length - 1;
    const newIndex = isLast ? 0 : currentWebIndex + 1;
    setCurrentWebIndex(newIndex);
  };

  return (
    <ScrollSection>
      <h2 className="text-3xl font-bold text-center mb-12">My Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl px-4">
        
        {/* Left Side: The dynamic iPhone */}
        <div className="md:w-1/2 flex justify-center">
          <IPhone>
            <div className="relative w-full h-full">
              <Image
                src={currentMobileProject.imageUrl}
                alt={currentMobileProject.title}
                layout="fill"
                objectFit="cover" 
                className="rounded-[2rem]"
                unoptimized={true}
              />
              <button
                onClick={goToPreviousMobile} 
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:bg-black/40 z-10"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goToNextMobile}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full backdrop-blur-sm transition-all hover:bg-black/40 z-10"
              >
                <ChevronRight />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm rounded-b-[2rem]">
                <h4 className="font-bold text-white truncate">{currentMobileProject.title}</h4>
                <p className="text-sm text-neutral-300 truncate">{currentMobileProject.description}</p>
              </div>
            </div>
          </IPhone>
        </div>

        {/* Right Side: Single Web Project Card */}
        <div className="md:w-1/2 w-full max-w-md relative"> {/* Use max-w-md to match card size */}
          
          <div className="w-full">
            <ProjectCard project={currentWebProject} />
          </div>

          <button
            onClick={goToPreviousWeb}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 bg-neutral-800 text-white p-2 rounded-full shadow-lg hover:bg-neutral-700 transition-all z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={goToNextWeb}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 bg-neutral-800 text-white p-2 rounded-full shadow-lg hover:bg-neutral-700 transition-all z-10"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </ScrollSection>
  );
};

export default WorksSection;
