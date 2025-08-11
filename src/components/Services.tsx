import { Monitor, BookOpen, BarChart, Smartphone, Cloud, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// Import images
import webCreationImg from "../assets/web-creation-service.jpg";
import webmarketingImg from "../assets/webmarketing-service.jpg";
import webAppsImg from "../assets/web-apps-service.jpg";
import businessAppsImg from "../assets/business-apps-service.jpg";
import hostingImg from "../assets/hosting-service.jpg";
import formationImg from "../assets/formation-service.jpg";
const services = [{
  icon: <Monitor className="w-10 h-10 mb-4 text-gold" />,
  title: "Création de site web sur mesure",
  description: "Sites vitrines, e-commerce, portfolios et applications web avec design moderne et optimisation complète.",
  link: "/services#web-creation",
  image: webCreationImg
}, {
  icon: <BarChart className="w-10 h-10 mb-4 text-gold" />,
  title: "Webmarketing (SEO et SEA)",
  description: "Référencement naturel et payant pour booster votre visibilité et générer du trafic qualifié.",
  link: "/services#marketing",
  image: webmarketingImg
}, {
  icon: <Smartphone className="w-10 h-10 mb-4 text-gold" />,
  title: "Applications web & PWA",
  description: "Développement d'applications web personnalisées et Progressive Web Apps performantes.",
  link: "/services#web-apps",
  image: webAppsImg
}, {
  icon: <Monitor className="w-10 h-10 mb-4 text-gold" />,
  title: "Applications métiers",
  description: "Solutions sur mesure pour digitaliser vos processus internes et améliorer votre productivité.",
  link: "/services#business-apps",
  image: businessAppsImg
}, {
  icon: <Cloud className="w-10 h-10 mb-4 text-gold" />,
  title: "Hébergement sécurisé",
  description: "Solutions d'hébergement web fiables, rapides et protégées contre les cybermenaces.",
  link: "/services#hosting",
  image: hostingImg
}, {
  icon: <BookOpen className="w-10 h-10 mb-4 text-gold" />,
  title: "Formations web & data",
  description: "Formations professionnelles en développement web et analyse de données.",
  link: "https://www.example.com/formations",
  external: true,
  soon: true,
  image: formationImg
}];
const Services = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3 animate-fade-down opacity-0" style={{
          animationDelay: '0.2s',
          animationFillMode: 'forwards'
        }}>
            NOS SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-down opacity-0" style={{
          animationDelay: '0.4s',
          animationFillMode: 'forwards'
        }}>
            Services digitaux pour booster votre croissance
          </h2>
          <p className="text-gray-600 animate-fade-down opacity-0" style={{
          animationDelay: '0.6s',
          animationFillMode: 'forwards'
        }}>
            Découvrez nos services digitaux conçus pour répondre aux enjeux actuels du marché et propulser votre transformation digitale.
          </p>
        </div>

        <Carousel setApi={setApi} opts={{
        align: "start",
        loop: false
      }} className="w-full animate-fade-in opacity-0" style={{
        animationDelay: '0.8s',
        animationFillMode: 'forwards'
      }}>
          <CarouselContent className="-ml-2 md:-ml-3 px-4 md:px-6 py-4 md:py-6">
            {services.map((service, index) => <CarouselItem key={index} className="pl-2 md:pl-3 basis-4/5 md:basis-2/5 lg:basis-1/3">
                <div 
                  className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-gold h-full animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 z-10"
                  ></div>
                  
                  <div className="relative h-40 md:h-44 lg:h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-xs font-medium text-white/80 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm mb-3 inline-block">
                      {service.title.split(' ')[0]}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-5 text-sm">{service.description}</p>
                    <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                      {service.external ? 
                        <a href={service.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/90 text-sm">
                          <span>{service.soon ? "Bientôt disponible" : "En savoir plus"}</span>
                          <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a> : 
                        <Link to={service.link} className="inline-flex items-center text-white/90 text-sm">
                          <span>En savoir plus</span>
                          <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      }
                    </div>
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          
          
        </Carousel>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center gap-4 mt-4 animate-fade-in opacity-0" style={{
        animationDelay: '1.0s',
        animationFillMode: 'forwards'
      }}>
          <button onClick={() => api?.scrollPrev()} className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors" aria-label="Service précédent">
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          {count > 1 && <div className="flex items-center gap-2">
              {Array.from({
            length: count
          }).map((_, i) => <button key={i} onClick={() => api?.scrollTo(i)} aria-label={`Aller au slide ${i + 1}`} className={`h-2 rounded-full transition-all duration-300 ${i + 1 === current ? "w-6 bg-gold" : "w-2 bg-black/30 hover:bg-black/50"}`} />)}
            </div>}

          <button onClick={() => api?.scrollNext()} className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors" aria-label="Service suivant">
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="mt-8 text-center animate-fade-in opacity-0" style={{
        animationDelay: '1.2s',
        animationFillMode: 'forwards'
      }}>
          <Link to="/services" className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full">
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>;
};
export default Services;