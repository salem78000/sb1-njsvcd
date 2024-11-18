import { initCMS } from '@staticcms/core';
import '@staticcms/core/dist/main.css';

initCMS({
  config: {
    load_config_file: false,
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    local_backend: true,
    media_folder: 'public/images',
    public_folder: '/images',
    publish_mode: 'editorial_workflow',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: "Page d'accueil",
            name: 'home',
            file: 'content/home.md',
            fields: [
              { label: 'Hero Title', name: 'heroTitle', widget: 'string' },
              { label: 'Hero Description', name: 'heroDescription', widget: 'markdown' },
              {
                label: 'Services',
                name: 'services',
                widget: 'list',
                fields: [
                  { label: 'Titre', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Icon', name: 'icon', widget: 'select', options: ['zap', 'wrench', 'shield', 'home'] }
                ]
              }
            ]
          },
          {
            label: "À propos",
            name: 'about',
            file: 'content/about.md',
            fields: [
              { label: 'Titre', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'markdown' },
              { label: 'Image', name: 'image', widget: 'image' },
              {
                label: 'Caractéristiques',
                name: 'features',
                widget: 'list',
                fields: [
                  { label: 'Titre', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'description', widget: 'text' },
                  { label: 'Icon', name: 'icon', widget: 'select', options: ['award', 'users', 'check-circle'] }
                ]
              }
            ]
          },
          {
            label: "Contact",
            name: 'contact',
            file: 'content/contact.md',
            fields: [
              { label: 'Titre', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' },
              { label: 'Téléphone', name: 'phone', widget: 'string' },
              { label: 'Email', name: 'email', widget: 'string' },
              { label: 'Adresse', name: 'address', widget: 'text' },
              { label: 'Google Maps URL', name: 'mapUrl', widget: 'string' }
            ]
          }
        ]
      },
      {
        name: 'blog',
        label: 'Articles Blog',
        folder: 'content/blog',
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        fields: [
          { label: 'Titre', name: 'title', widget: 'string' },
          { label: 'Description', name: 'description', widget: 'text' },
          { label: 'Date', name: 'date', widget: 'datetime', format: 'DD/MM/YYYY' },
          { label: 'Image', name: 'image', widget: 'image' },
          { label: 'Contenu', name: 'body', widget: 'markdown' },
          { label: 'Tags', name: 'tags', widget: 'list', default: ['électricité'] }
        ]
      },
      {
        name: 'services',
        label: 'Services',
        folder: 'content/services',
        create: true,
        fields: [
          { label: 'Titre', name: 'title', widget: 'string' },
          { label: 'Description', name: 'description', widget: 'text' },
          { label: 'Image', name: 'image', widget: 'image' },
          { label: 'Prix', name: 'price', widget: 'string' },
          {
            label: 'Caractéristiques',
            name: 'features',
            widget: 'list',
            fields: [
              { label: 'Titre', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' }
            ]
          }
        ]
      },
      {
        name: 'projects',
        label: 'Réalisations',
        folder: 'content/projects',
        create: true,
        fields: [
          { label: 'Titre', name: 'title', widget: 'string' },
          { label: 'Description', name: 'description', widget: 'text' },
          { label: 'Image', name: 'image', widget: 'image' },
          { label: 'Date', name: 'date', widget: 'datetime' },
          { label: 'Client', name: 'client', widget: 'string' },
          { label: 'Localisation', name: 'location', widget: 'string' },
          { label: 'Catégorie', name: 'category', widget: 'select', options: ['Résidentiel', 'Commercial', 'Industriel'] },
          { label: 'Contenu', name: 'body', widget: 'markdown' }
        ]
      },
      {
        name: 'cities',
        label: 'Villes',
        folder: 'content/cities',
        create: true,
        fields: [
          { label: 'Nom', name: 'name', widget: 'string' },
          { label: 'Code Postal', name: 'postalCode', widget: 'string' },
          { label: 'Description', name: 'description', widget: 'markdown' },
          { label: 'Image', name: 'image', widget: 'image' },
          {
            label: 'Services Spécifiques',
            name: 'services',
            widget: 'list',
            fields: [
              { label: 'Titre', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' }
            ]
          }
        ]
      }
    ]
  }
});