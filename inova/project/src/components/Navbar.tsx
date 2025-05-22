import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dai.ly</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#recursos" className="text-gray-300 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#planos" className="text-gray-300 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#entrar" className="text-gray-300 hover:text-white transition-colors">Entrar</a>
            <a href="#cadastrar" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Cadastrar</a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#como-funciona" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Como Funciona</a>
            <a href="#recursos" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Recursos</a>
            <a href="#planos" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Planos</a>
            <a href="#depoimentos" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-4">
              <a href="#entrar" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Entrar</a>
              <a href="#cadastrar" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Cadastrar</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;