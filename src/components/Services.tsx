import React from 'react';
import { Zap, Wrench, Shield, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Installation électrique',
    description: 'Installation complète pour vos projets résidentiels et commerciaux, conformes aux normes en vigueur.'
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Maintenance et dépannage',
    description: 'Service rapide et efficace pour tous vos besoins de maintenance et dépannages électriques.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Mise aux normes',
    description: 'Mise en conformité de vos installations selon la norme C15-100 et les réglementations actuelles.'
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Installation de domotique',
    description: 'Solutions intelligentes pour rendre votre habitat plus confortable et économe en énergie.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600">Des solutions électriques adaptées à vos besoins</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#b32a29] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-[#b32a29] hover:text-[#4b404]"
              >
                Demander un devis
                <Phone className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}