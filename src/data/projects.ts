
export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Site vitrine Agence Photo",
    category: "Site Vitrine",
    client: "C'EST DANS LA BOÎTE",
    year: "2025",
    description: "Site vitrine pour agence photo avec une interface élégante et un parcours d'achat optimisé.",
    image: "lovable-uploads/CDLB - logo.png",
    technologies: ["Hostinger", "CMS"],
    challenge: "Créer une interface attrayante et intuitive pour mettre en valeur les services photographiques tout en optimisant les conversions.",
    solution: "Développement d'un site avec une galerie interactive et un système de réservation fluide qui valorise le travail du photographe."
  },
  {
    id: 2,
    title: "Site vitrine Agence de communication",
    category: "Site Vitrine",
    client: "YADAQ",
    year: "2024",
    description: "Site vitrine pour une agence de communication avec réservation en ligne et présentation des services.",
    image: "lovable-uploads/Blanc et Cercle Rouge Art Logo.jpg",
    technologies: ["Odoo", "Calendly"],
    challenge: "Mettre en place une identité visuelle forte et cohérente pour une agence de communication qui souhaite démontrer son expertise.",
    solution: "Création d'un design épuré mais impactant avec des animations subtiles et une présentation claire des services proposés."
  },
  {
    id: 3,
    title: "Plateforme e-learning",
    category: "E-Learning",
    client: "Ease Growth Formation",
    year: "2025",
    description: "Plateforme d'apprentissage en ligne avec système de cours, quiz et suivi de progression.",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Odoo", "Hostinger"],
    challenge: "Développer une plateforme d'apprentissage interactive et performante permettant le suivi précis de la progression des apprenants.",
    solution: "Implémentation d'un système de cours modulaire avec des quiz interactifs et un tableau de bord détaillé pour visualiser la progression."
  },
  {
    id: 4,
    title: "Sankhiny",
    category: "E-Commerce",
    client: "Sankhiny",
    year: "2025",
    description: "Site E-Commerce pour la vente d'épice.",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Hostinger", "CMS"],
    challenge: "Créer une expérience d'achat immersive et sécurisée pour la vente d'épices en ligne avec une gestion efficace des stocks.",
    solution: "Développement d'une boutique en ligne avec des fiches produits détaillées, un processus de commande simplifié et un système de recommandations personnalisées."
  },
  {
    id: 5,
    title: "L'OR et L'ÉLÉGANCE",
    category: "Site Vitrine",
    client: "L'OR et L'ÉLÉGANCE",
    year: "2025",
    description: "Site vitrine pour une conseillère en image.",
    image: "lovable-uploads/loretlelegance.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
    challenge: "Concevoir un site élégant qui reflète l'expertise en conseil d'image avec une prise de rendez-vous simplifiée.",
    solution: "Création d'un site à l'esthétique raffinée avec un système de réservation intégré et une présentation claire des prestations."
  }
];
