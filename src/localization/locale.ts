import LocalizedStrings from 'react-localization';
import { createContext } from 'react';
import locales from './localization.json';

export interface IStrings {
  // Navigation
  nav_home: string;
  nav_about: string;
  nav_skills: string;
  nav_projects: string;
  nav_contact: string;
  nav_language: string;
  nav_theme: string;

  // Hero Section
  hero_greeting: string;
  hero_name: string;
  hero_description: string;
  hero_btn_contact: string;
  hero_btn_more: string;

  // About Section
  about_title: string;
  about_education: string;
  about_certificates: string;
  about_university: string;
  about_gpa: string;
  about_cert_cybersecurity: string;
  about_cert_toeic: string;

  // Skills Section
  skills_title: string;
  skills_architecture: string;
  skills_frontend: string;
  skills_backend: string;
  skills_security: string;
  skills_database: string;
  skills_api: string;
  skills_cicd: string;
  skills_tools: string;

  // Projects Section
  projects_title: string;
  projects_project1_title: string;
  projects_project1_desc: string;
  projects_btn_code: string;

  // Contact Section
  contact_title: string;
  contact_address: string;
  contact_email: string;
  contact_phone: string;
}

// Strings object
export const strings = new LocalizedStrings({
  en: locales.en,
  vi: locales.vi,
});

// Initialize with saved language or default
const savedLanguage = localStorage.getItem('language') || 'vi';
strings.setLanguage(savedLanguage);

// Language Context
export interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default strings;
