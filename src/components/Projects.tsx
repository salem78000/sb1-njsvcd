import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Installation Résidentielle',
    description: 'Rénovation complète du système électrique d\'une maison de 150m²',
    image: 'https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-4.0.3'
  },
  {
    title: 'Projet Commercial',
    description: 'Installation électrique d\'un nouveau centre commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3'
  },
  {
    title: 'Domotique',
    description: 'Installation d\'un système domotique complet pour une villa',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
          <p className="text-xl text-gray-600">Découvrez nos projets récents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-white hover:text-[#b32a29] transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}