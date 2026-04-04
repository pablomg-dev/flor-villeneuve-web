export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Pack {
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  cta: string;
}

export interface FormacionDiscipline {
  title: string;
  description: string;
  href: string;
}

export interface SongProject {
  title: string;
  description: string;
  duration?: string;
  year?: string;
}