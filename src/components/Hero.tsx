import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Votre partenaire en électricité <br />
            <span className="text-[#b32a29]">de confiance</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Solutions électriques professionnelles pour vos projets résidentiels et commerciaux. 
            Expertise, qualité et sécurité garanties.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="tel:+33622523902" 
              className="inline-flex items-center px-8 py-3 bg-[#b32a29] text-white rounded-md hover:bg-[#4b404] transition-colors"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-3 bg-white text-[#b32a29] rounded-md hover:bg-gray-100 transition-colors"
            >
              Nos services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}