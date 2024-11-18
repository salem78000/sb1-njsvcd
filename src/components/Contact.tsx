import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600">Nous sommes à votre écoute pour tous vos projets</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#b32a29]"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#b32a29]"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#b32a29]"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#b32a29]"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#b32a29] text-white py-3 px-4 rounded-md hover:bg-[#4b404] transition-colors flex items-center justify-center"
              >
                Envoyer
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="text-[#b32a29] h-6 w-6 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Téléphone</h3>
                  <a 
                    href="tel:+33622523902"
                    className="text-gray-600 hover:text-[#b32a29]"
                  >
                    +33 6 22 52 39 02
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-[#b32a29] h-6 w-6 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a 
                    href="mailto:contact@ls-com.fr"
                    className="text-gray-600 hover:text-[#b32a29]"
                  >
                    contact@ls-com.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-[#b32a29] h-6 w-6 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Adresse</h3>
                  <a 
                    href="https://goo.gl/maps/votre-adresse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#b32a29]"
                  >
                    24 Avenue de Chevincourt<br />78114 Magny-les-Hameaux
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              {/* Replace with actual Google Maps integration */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                Carte Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}