import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

interface CityPageProps {
  city: string;
  postalCode: string;
}

export default function CityPage({ city, postalCode }: CityPageProps) {
  const cityName = city.replace('Électricien ', '');
  const isMagny = cityName === 'Magny-les-Hameaux';

  return (
    <PageWrapper>
      <Helmet>
        <title>{`${city} (${postalCode}) - LS COM Électricité`}</title>
        <meta name="description" content={`LS COM, votre électricien professionnel à ${cityName}. Installation, dépannage et mise aux normes électriques.`} />
      </Helmet>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {city} ({postalCode})
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                {isMagny 
                  ? `Implanté à ${cityName} (${postalCode}), LS COM est votre électricien de proximité.`
                  : `Implanté à proximité de ${cityName} (${postalCode}), LS COM est votre électricien de proximité.`}
                {' '}Notre équipe d'électriciens qualifiés connaît parfaitement les spécificités des installations électriques de la région.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3" />
                  <span>Installation électrique aux normes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3" />
                  <span>Dépannage électrique</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3" />
                  <span>Mise aux normes électriques</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3" />
                  <span>Installation de domotique</span>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
                <div className="space-y-4">
                  <a 
                    href="tel:+33622523902"
                    className="flex items-center text-gray-700 hover:text-[#b32a29]"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    +33 6 22 52 39 02
                  </a>
                  <Link 
                    to="/contact"
                    className="inline-block w-full bg-[#b32a29] text-white py-3 px-6 rounded-md hover:bg-[#4b404] transition-colors text-center"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3" 
                alt={`Électricien à ${cityName}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
              />
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Nos services à {cityName}</h3>
                <ul className="space-y-3">
                  <li>• Installation électrique complète</li>
                  <li>• Rénovation électrique</li>
                  <li>• Mise aux normes</li>
                  <li>• Dépannage électrique</li>
                  <li>• Installation de domotique</li>
                  <li>• Bornes de recharge véhicules électriques</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}