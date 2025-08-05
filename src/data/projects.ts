
import projectsData from './projects.json';

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  challenge: string;
  solution: string;
  screenshots: string[];
}

export const projects: Project[] = projectsData;
