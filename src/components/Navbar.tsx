import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img src="/logo.svg" alt="LS COM" className="h-10 w-auto" style={{ maxWidth: '120px' }} />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/tableau-electrique" 
              className={`${location.pathname === '/tableau-electrique' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Tableau Électrique
            </Link>
            <Link 
              to="/services" 
              className={`${location.pathname === '/services' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`${location.pathname === '/projects' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Réalisations
            </Link>
            <Link 
              to="/blog" 
              className={`${location.pathname === '/blog' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <a 
              href="tel:+33622523902" 
              className="flex items-center bg-[#b32a29] text-white px-4 py-2 rounded-md hover:bg-[#4b404]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactez-nous
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 ${location.pathname === '/' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/tableau-electrique" 
              className={`block px-3 py-2 ${location.pathname === '/tableau-electrique' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Tableau Électrique
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 ${location.pathname === '/services' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className={`block px-3 py-2 ${location.pathname === '/projects' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Réalisations
            </Link>
            <Link 
              to="/blog" 
              className={`block px-3 py-2 ${location.pathname === '/blog' ? 'text-[#b32a29]' : 'text-gray-700'} hover:text-[#b32a29]`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <a 
              href="tel:+33622523902" 
              className="block px-3 py-2 bg-[#b32a29] text-white rounded-md"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}