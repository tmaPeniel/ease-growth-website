
import { useState } from "react";
import Layout from "../components/Layout";
import { Code, Award, Bulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Site vitrine Agence Photo",
    category: "Site Vitrine",
    client: "C'EST DANS LA BOÎTE",
    year: "2025",
    description: "Site vitrine pour agence photo avec une interface élégante et un parcours d'achat optimisé.",
    image: "lovable-uploads/CDLB - logo.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express"],
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
    technologies: ["React", "Next.js", "Styled Components", "MongoDB"],
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
    technologies: ["React", "Firebase", "Redux", "Material UI"],
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
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
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
    technologies: ["WordPress", "Elementor", "PHP", "CSS"],
    challenge: "Concevoir un site élégant qui reflète l'expertise en conseil d'image avec une prise de rendez-vous simplifiée.",
    solution: "Création d'un site à l'esthétique raffinée avec un système de réservation intégré et une présentation claire des prestations."
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProject = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gold/5 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3 animate-fade-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              NOTRE PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Nos réalisations
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Découvrez une sélection de projets que nous avons réalisés pour nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center mb-16 gap-2 animate-on-scroll">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? "bg-black text-white" 
                    : "bg-gray-100 text-gray-800 hover:bg-gold/10"
                }`}
              >
                {category === "all" ? "Tous les projets" : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProject(project.id)}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 z-10"
                ></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="text-xs font-medium text-white/80 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-2 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                    <span className="inline-flex items-center text-white/90 text-sm">
                      <span>Voir le détail</span>
                      <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in" onClick={closeProject}>
          <div 
            className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-card" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full z-10 transition-colors"
              onClick={closeProject}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {project && (
              <div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover rounded-t-xl"
                />
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
                      {project.category}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700 mb-4">Client : {project.client}</p>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Code className="w-5 h-5 mr-2 text-gold" />
                      <h3 className="text-lg font-bold">Technologies utilisées</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Challenge Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 mr-2 text-gold" />
                      <h3 className="text-lg font-bold">Le défi</h3>
                    </div>
                    <p className="text-gray-600">
                      {project.challenge}
                    </p>
                  </div>
                  
                  {/* Solution Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Bulb className="w-5 h-5 mr-2 text-gold" />
                      <h3 className="text-lg font-bold">Notre solution</h3>
                    </div>
                    <p className="text-gray-600">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PortfolioPage;
