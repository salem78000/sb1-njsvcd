import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Les normes électriques en 2024',
    excerpt: 'Découvrez les nouvelles normes électriques à respecter pour votre installation.',
    content: `Les normes électriques évoluent constamment pour garantir la sécurité des installations. En 2024, plusieurs changements majeurs sont à noter :

    1. Renforcement des dispositifs de protection
    - Obligation d'installer des disjoncteurs différentiels 30mA
    - Protection renforcée contre les surtensions
    - Nouveaux dispositifs de coupure d'urgence

    2. Nouvelles exigences pour les installations photovoltaïques
    - Normes spécifiques pour le raccordement
    - Sécurité renforcée des onduleurs
    - Protocoles de maintenance obligatoires

    3. Mise à jour des normes de câblage
    - Nouvelles sections minimales des conducteurs
    - Identification des circuits obligatoire
    - Protection renforcée des câbles

    4. Obligations concernant les bornes de recharge électrique
    - Installation de prises dédiées
    - Protection spécifique des circuits
    - Dimensionnement adapté aux besoins

    Ces évolutions visent à améliorer la sécurité et l'efficacité énergétique des installations électriques.`,
    date: '15 Mars 2024',
    author: 'LS COM',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3',
    keywords: ['normes électriques', 'sécurité', 'installation électrique', '2024']
  },
  {
    id: 2,
    title: 'Économies d\'énergie : les solutions d\'un électricien',
    excerpt: 'Comment réduire sa facture d\'électricité grâce à des installations intelligentes ?',
    content: `La maîtrise de la consommation électrique est devenue une priorité. Voici les solutions qu'un électricien peut vous proposer :

    1. Installation de systèmes domotiques
    - Gestion automatisée de l'éclairage
    - Programmation du chauffage
    - Contrôle à distance des appareils

    2. Choix des équipements
    - LED basse consommation
    - Appareils électroménagers classe A+++
    - Détecteurs de présence

    3. Solutions de monitoring
    - Suivi en temps réel de la consommation
    - Identification des postes énergivores
    - Alertes de surconsommation

    4. Isolation et ventilation
    - VMC intelligente
    - Isolation des circuits électriques
    - Optimisation du chauffage électrique`,
    date: '10 Mars 2024',
    author: 'LS COM',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3',
    keywords: ['économies d\'énergie', 'domotique', 'consommation électrique']
  },
  {
    id: 3,
    title: 'La domotique pour les seniors',
    excerpt: 'Solutions domotiques pour faciliter le maintien à domicile des personnes âgées.',
    content: `La domotique offre des solutions adaptées pour sécuriser et faciliter le quotidien des seniors :

    1. Sécurité
    - Éclairage automatique
    - Détecteurs de chute
    - Système d'appel d'urgence

    2. Confort
    - Commandes vocales
    - Automatisation des volets
    - Régulation thermique intelligente

    3. Communication
    - Visiophone connecté
    - Alertes sur smartphone
    - Télésurveillance

    4. Accessibilité
    - Commandes centralisées
    - Interrupteurs ergonomiques
    - Scénarios automatisés`,
    date: '5 Mars 2024',
    author: 'LS COM',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3',
    keywords: ['domotique', 'seniors', 'maintien à domicile', 'sécurité']
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <Helmet>
        <title>Blog LS COM - Actualités et conseils en électricité</title>
        <meta name="description" content="Découvrez nos articles sur l'électricité, la domotique et les économies d'énergie. Conseils d'experts et actualités du secteur." />
        <meta name="keywords" content="blog électricité, domotique, économies énergie, installation électrique, normes électriques" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog & Actualités</h2>
          <p className="text-xl text-gray-600">Restez informé des dernières actualités en électricité</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{article.date}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center text-[#b32a29] hover:text-[#4b404] transition-colors"
                >
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{selectedArticle.title}</h3>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{selectedArticle.date}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{selectedArticle.author}</span>
                </div>

                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="prose max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedArticle.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}