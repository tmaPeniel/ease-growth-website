
import { Monitor, PenTool, BookOpen, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Monitor className="w-10 h-10 mb-4 text-gold" />,
    title: "Création de site web",
    description: "Sites vitrines, e-commerce ou applications web sur mesure avec un design moderne et responsive.",
    link: "/services#web-creation"
  },
  {
    icon: <PenTool className="w-10 h-10 mb-4 text-gold" />,
    title: "Design UI/UX",
    description: "Interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.",
    link: "/services#design"
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-gold" />,
    title: "Formation web",
    description: "Formations personnalisées pour maîtriser les outils web et gérer votre présence en ligne.",
    link: "/services#training"
  },
  {
    icon: <BarChart className="w-10 h-10 mb-4 text-gold" />,
    title: "Marketing digital",
    description: "Stratégies de référencement et de contenu pour augmenter votre visibilité en ligne.",
    link: "/services#marketing"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
            NOS SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solutions digitales complètes pour votre entreprise
          </h2>
          <p className="text-gray-600">
            Nous proposons une gamme de services pensés pour répondre à tous vos besoins numériques et vous aider à atteindre vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-gold animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-sm font-medium text-gold hover:text-black inline-flex items-center transition-colors group"
              >
                <span>En savoir plus</span>
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Link 
            to="/services" 
            className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
