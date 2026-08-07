import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-white font-bold text-xl tracking-tight flex items-center gap-1.5 group">
          <span>Fortunaty Studios</span>
          <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-transform duration-300"></span>
        </a>
        <nav className="flex items-center gap-8 text-neutral-400 text-sm font-medium">
          <a href="#home" className="hover:text-orange-500 transition-colors duration-300">Início</a>
          <a href="#projetos" className="hover:text-orange-500 transition-colors duration-300">Projetos</a>
          <a href="#sobre" className="hover:text-orange-500 transition-colors duration-300">Sobre</a>
          <a 
            href="#contato" 
            className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

