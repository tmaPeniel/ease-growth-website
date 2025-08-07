
import { Monitor, BookOpen, BarChart, Smartphone, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Monitor className="w-10 h-10 mb-4 text-gold" />,
    title: "Création de site web sur mesure",
    description: "Sites vitrines, e-commerce, portfolios et applications web avec design moderne et optimisation complète.",
    link: "/services#web-creation"
  },
  {
    icon: <BarChart className="w-10 h-10 mb-4 text-gold" />,
    title: "Webmarketing (SEO et SEA)",
    description: "Référencement naturel et payant pour booster votre visibilité et générer du trafic qualifié.",
    link: "/services#marketing"
  },
  {
    icon: <Smartphone className="w-10 h-10 mb-4 text-gold" />,
    title: "Applications web & PWA",
    description: "Développement d'applications web personnalisées et Progressive Web Apps performantes.",
    link: "/services#web-apps"
  },
  {
    icon: <Monitor className="w-10 h-10 mb-4 text-gold" />,
    title: "Applications métiers",
    description: "Solutions sur mesure pour digitaliser vos processus internes et améliorer votre productivité.",
    link: "/services#business-apps"
  },
  {
    icon: <Cloud className="w-10 h-10 mb-4 text-gold" />,
    title: "Hébergement sécurisé",
    description: "Solutions d'hébergement web fiables, rapides et protégées contre les cybermenaces.",
    link: "/services#hosting"
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-gold" />,
    title: "Formations web & data",
    description: "Formations professionnelles en développement web et analyse de données.",
    link: "https://www.example.com/formations",
    external: true,
    soon: true
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
            Services digitaux pour booster votre croissance
          </h2>
          <p className="text-gray-600">
            Découvrez nos services digitaux conçus pour répondre aux enjeux actuels du marché et propulser votre transformation digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-gold animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              {service.external ? (
                <a 
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gold hover:text-black inline-flex items-center transition-colors group"
                >
                  <span>{service.soon ? "Bientôt disponible" : "En savoir plus"}</span>
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              ) : (
                <Link 
                  to={service.link} 
                  className="text-sm font-medium text-gold hover:text-black inline-flex items-center transition-colors group"
                >
                  <span>En savoir plus</span>
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              )}
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
