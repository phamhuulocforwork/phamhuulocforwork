export interface CvLinks {
  github: string;
}

export interface Education {
  id: string;
  school: string;
  period: string;
  course: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface ExperienceProject {
  id: string;
  label: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  locale: string;
  title: string;
  description: string;
  projects?: ExperienceProject[];
  complemention: string;
  work_with: string;
  stack: string;
  date: string;
}

export interface Project {
  id: string;
  role: string;
  title: string;
  github: string;
  description: string;
  complemention: string;
  work_with: string;
  stack: string;
  date: string;
}

export interface CvRegistry {
  role: string;
  name: string;
  phone: string;
  email: string;
  links: CvLinks;
  updated_at: string;
  bio: string;
  education: Education[];
  certificates: Certificate[];
  projects: Project[];
  experiences: Experience[];
}
