"use client";

import React from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1); 
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-neutral-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 bg-black/30 backdrop-blur-lg rounded-b-xl px-4">
          
          {/* Left Side: Name */}
          <div>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-lg font-bold text-white"
            >
              Ishaan Jindal
            </a>
          </div>
          {/* Right Side: Navigation Links */}
          <div className="flex items-center space-x-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
