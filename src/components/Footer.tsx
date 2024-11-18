import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { cities } from '../data/cities';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="block mb-6">
              <img src="/logo.svg" alt="LS COM" className="h-14 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://goo.gl/maps/votre-adresse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  24 Avenue de Chevincourt<br />78114 Magny-les-Hameaux
                </a>
              </li>
              <li>
                <a href="tel:+33622523902" className="flex items-center hover:text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  +33 6 22 52 39 02
                </a>
              </li>
              <li>
                <a href="mailto:contact@ls-com.fr" className="flex items-center hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@ls-com.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-white">À propos</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white">Réalisations</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Zones d'intervention</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {cities.map((city, index) => (
                <Link
                  key={index}
                  to={`/electricien-${city.name.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-gray-400 hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {city.name} ({city.postalCode})
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LS COM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}