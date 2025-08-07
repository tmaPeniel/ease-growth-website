
import { useState, useEffect } from "react";
import { Monitor, BookOpen, BarChart, Smartphone, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Auto-scroll every 5 seconds for services
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      api?.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);
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
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full animate-on-scroll"
        >
          <CarouselContent className="-ml-1 md:-ml-2">
            {services.map((service, index) => (
              <CarouselItem key={index} className={`pl-1 md:pl-2 transition-all duration-500 ${
                index === current 
                  ? "basis-full md:basis-3/5 lg:basis-1/2" 
                  : "basis-4/5 md:basis-2/5 lg:basis-1/3 opacity-70"
              }`}>
                <div className={`glass-card rounded-2xl transition-all duration-300 hover:shadow-gold overflow-hidden h-full ${
                  index === current ? "shadow-lg scale-105" : ""
                }`}>
                  <div className={`relative overflow-hidden ${
                    index === current ? "h-48 md:h-56 lg:h-64" : "h-40 md:h-44 lg:h-48"
                  }`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className={`${index === current ? "p-6 md:p-8" : "p-4 md:p-6"}`}>
                    {service.icon}
                    <h3 className={`font-bold mb-3 ${
                      index === current ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                    }`}>{service.title}</h3>
                    <p className={`text-gray-600 mb-5 ${
                      index === current ? "text-base" : "text-sm"
                    }`}>{service.description}</p>
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
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-gold w-8" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
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
