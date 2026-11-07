export const languages = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const translations = {
  en: {
    siteTitle: 'Data Science Portfolio',
    siteDescription: 'Data Science, Machine Learning and Automation portfolio.',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Welcome to my portfolio',
      title: 'Data Science & Machine Learning',
      description:
        'Building intelligent solutions with Python, SQL, Machine Learning and Automation.',
      projectsButton: 'Explore Projects',
      contactButton: 'Contact Me',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  fr: {
    siteTitle: 'Portfolio Data Science',
    siteDescription: 'Portfolio en science des données, apprentissage automatique et automatisation.',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bienvenue sur mon portfolio',
      title: 'Science des données & Machine Learning',
      description:
        'Développement de solutions intelligentes avec Python, SQL, Machine Learning et automatisation.',
      projectsButton: 'Découvrir les projets',
      contactButton: 'Me contacter',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },

  de: {
    siteTitle: 'Data-Science-Portfolio',
    siteDescription: 'Portfolio für Data Science, maschinelles Lernen und Automatisierung.',
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      skills: 'Kompetenzen',
      projects: 'Projekte',
      certifications: 'Zertifikate',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Willkommen in meinem Portfolio',
      title: 'Data Science & Maschinelles Lernen',
      description:
        'Entwicklung intelligenter Lösungen mit Python, SQL, maschinellem Lernen und Automatisierung.',
      projectsButton: 'Projekte entdecken',
      contactButton: 'Kontakt aufnehmen',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
} as const;

export function getTranslations(lang: Language) {
  return translations[lang];
}
