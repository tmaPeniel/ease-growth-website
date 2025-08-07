
import { Monitor, BookOpen, BarChart, Smartphone, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import images
import webCreationImg from "../assets/web-creation-service.jpg";
import webmarketingImg from "../assets/webmarketing-service.jpg";
import webAppsImg from "../assets/web-apps-service.jpg";
import businessAppsImg from "../assets/business-apps-service.jpg";
import hostingImg from "../assets/hosting-service.jpg";
import formationImg from "../assets/formation-service.jpg";

const services = [
  {
    icon: <Monitor className="w-10 h-10 mb-4 text-gold" />,
    title: "Création de site web sur mesure",
    description: "Sites vitrines, e-commerce, portfolios et applications web avec design moderne et optimisation complète.",
    link: "/services#web-creation",
    image: webCreationImg
  },
  {
    icon: <BarChart className="w-10 h-10 mb-4 text-gold" />,
    title: "Webmarketing (SEO et SEA)",
    description: "Référencement naturel et payant pour booster votre visibilité et générer du trafic qualifié.",
    link: "/services#marketing",
    image: webmarketingImg
  },
  {
    icon: <Smartphone className="w-10 h-10 mb-4 text-gold" />,
    title: "Applications web & PWA",
    description: "Développement d'applications web personnalisées et Progressive Web Apps performantes.",
    link: "/services#web-apps",
    image: webAppsImg
  },
  {
    icon: <Monitor className="w-10 h-10 mb-4 text-gold" />,
    title: "Applications métiers",
    description: "Solutions sur mesure pour digitaliser vos processus internes et améliorer votre productivité.",
    link: "/services#business-apps",
    image: businessAppsImg
  },
  {
    icon: <Cloud className="w-10 h-10 mb-4 text-gold" />,
    title: "Hébergement sécurisé",
    description: "Solutions d'hébergement web fiables, rapides et protégées contre les cybermenaces.",
    link: "/services#hosting",
    image: hostingImg
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-gold" />,
    title: "Formations web & data",
    description: "Formations professionnelles en développement web et analyse de données.",
    link: "https://www.example.com/formations",
    external: true,
    soon: true,
    image: formationImg
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

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full animate-on-scroll"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="glass-card rounded-2xl transition-all duration-300 hover:shadow-gold overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

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
