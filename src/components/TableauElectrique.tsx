import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Shield, Zap, Wrench, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const services = [
  {
    title: "Installation tableau neuf",
    price: "À partir de 890€",
    details: [
      "Tableau électrique aux normes NF C 15-100",
      "Disjoncteur différentiel 500mA",
      "Interrupteurs différentiels 30mA",
      "Disjoncteurs divisionnaires",
      "Protection foudre",
      "Test et mise en service"
    ]
  },
  {
    title: "Mise aux normes tableau",
    price: "À partir de 590€",
    details: [
      "Diagnostic complet",
      "Remplacement des composants obsolètes",
      "Installation protection différentielle",
      "Mise à la terre",
      "Étiquetage des circuits",
      "Certificat de conformité"
    ]
  },
  {
    title: "Extension tableau",
    price: "À partir de 290€",
    details: [
      "Ajout de nouveaux circuits",
      "Installation disjoncteurs supplémentaires",
      "Raccordement nouveaux équipements",
      "Vérification capacité",
      "Test de fonctionnement",
      "Documentation technique"
    ]
  }
];

export default function TableauElectrique() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Installation et Mise aux Normes Tableau Électrique - LS COM Électricien</title>
        <meta 
          name="description" 
          content="Expert en installation et mise aux normes de tableau électrique à Magny-les-Hameaux et environs. Devis gratuit, intervention rapide, prix compétitifs." 
        />
        <meta 
          name="keywords" 
          content="tableau électrique, installation électrique, mise aux normes, électricien Magny-les-Hameaux, disjoncteur, protection différentielle" 
        />
      </Helmet>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Installation et Mise aux Normes Tableau Électrique
            </h1>
            <p className="text-xl text-gray-600">
              Expert en tableaux électriques à Magny-les-Hameaux et environs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3" 
                alt="Tableau électrique professionnel"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
              />
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="text-[#b32a29] h-5 w-5 mr-3" />
                    <span>Garantie décennale</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="text-[#b32a29] h-5 w-5 mr-3" />
                    <span>Certification NF C 15-100</span>
                  </div>
                  <div className="flex items-center">
                    <Wrench className="text-[#b32a29] h-5 w-5 mr-3" />
                    <span>Matériel professionnel haut de gamme</span>
                  </div>
                  <div className="flex items-center">
                    <Euro className="text-[#b32a29] h-5 w-5 mr-3" />
                    <span>Prix transparents et compétitifs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Notre expertise en tableaux électriques</h2>
                <p className="text-gray-700 mb-4">
                  Spécialiste des tableaux électriques, LS COM vous accompagne dans tous vos projets d'installation, 
                  de mise aux normes et d'extension de tableau électrique. Notre équipe qualifiée intervient à Magny-les-Hameaux 
                  et dans toute la région pour garantir la sécurité de vos installations électriques.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Nos services comprennent :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3 mt-1" />
                    <span>Installation de tableau électrique neuf aux normes NF C 15-100</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3 mt-1" />
                    <span>Mise aux normes de tableau existant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3 mt-1" />
                    <span>Extension et modification de tableau</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#b32a29] h-5 w-5 mr-3 mt-1" />
                    <span>Diagnostic et dépannage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#b32a29] text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
                <p className="mb-4">
                  Besoin d'un devis pour votre tableau électrique ? Contactez-nous dès maintenant !
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+33622523902"
                    className="flex items-center text-white hover:opacity-80"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    +33 6 22 52 39 02
                  </a>
                  <Link 
                    to="/contact"
                    className="inline-block w-full bg-white text-[#b32a29] py-3 px-6 rounded-md hover:bg-gray-100 transition-colors text-center"
                  >
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[#b32a29] text-2xl font-bold mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-[#b32a29] h-4 w-4 mr-2 mt-1" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">FAQ Tableau Électrique</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Quand faut-il remplacer son tableau électrique ?</h3>
                <p className="text-gray-700">
                  Il est recommandé de remplacer son tableau électrique dans les cas suivants : installation de plus de 30 ans, 
                  absence de protection différentielle, fusibles à vis, manque de place pour de nouveaux circuits, ou signes 
                  d'usure visibles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Combien coûte la mise aux normes d'un tableau électrique ?</h3>
                <p className="text-gray-700">
                  Le coût varie selon l'état de l'installation et les travaux nécessaires. Comptez entre 590€ et 1500€ pour 
                  une mise aux normes complète. Nous établissons un devis gratuit après diagnostic de votre installation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quelle est la durée des travaux ?</h3>
                <p className="text-gray-700">
                  L'installation d'un nouveau tableau électrique prend généralement une journée. Une mise aux normes peut 
                  être réalisée en 4 à 8 heures selon la complexité des travaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}