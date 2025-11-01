import React from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

const NavLink = ({ to, children }) => (
  <a
    href={to}
    className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">FlutterDev</span>
          </a>

          <div className="hidden sm:flex items-center gap-1">
            <NavLink to="#home">Home</NavLink>
            <NavLink to="#projects">Projects</NavLink>
            <NavLink to="#contact">Contact</NavLink>
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:opacity-90 transition"
            >
              Download CV
            </a>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/10">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/10">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
