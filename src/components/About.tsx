import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos de LS COM</h2>
          <p className="text-xl text-gray-600">Votre expert en solutions électriques depuis plus de 10 ans</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3" 
              alt="Équipe LS COM" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Award className="text-[#b32a29] h-8 w-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expertise Certifiée</h3>
                <p className="text-gray-600">Nos électriciens sont certifiés et formés aux dernières normes électriques.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="text-[#b32a29] h-8 w-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Équipe Qualifiée</h3>
                <p className="text-gray-600">Une équipe expérimentée à votre service pour tous vos projets électriques.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="text-[#b32a29] h-8 w-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Qualité Garantie</h3>
                <p className="text-gray-600">Nous garantissons la qualité de nos installations et interventions.</p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-[#b32a29] text-white rounded-md hover:bg-[#4b404] transition-colors"
              >
                Contactez Notre Équipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}