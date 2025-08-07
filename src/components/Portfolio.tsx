
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const Portfolio = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Auto-scroll every 4 seconds
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => {
      api?.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
            NOTRE PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projets réalisés avec passion
          </h2>
          <p className="text-gray-600">
            Découvrez quelques-unes de nos réalisations récentes qui ont permis à nos clients d'atteindre leurs objectifs.
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
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={project.id} className={`pl-2 md:pl-4 transition-all duration-500 ${
                index === current 
                  ? "basis-full md:basis-3/5 lg:basis-1/2" 
                  : "basis-3/4 md:basis-2/5 lg:basis-1/3 opacity-60"
              }`}>
                <Link 
                  to={project.link}
                  className="group relative overflow-hidden rounded-xl block"
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 z-10"
                  ></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
                      index === current ? "h-96 md:h-[480px]" : "h-64 md:h-80"
                    }`}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                    <span className="text-xs font-medium text-white/80 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className={`font-bold text-white mt-3 group-hover:text-gold transition-colors ${
                      index === current ? "text-xl md:text-2xl" : "text-lg"
                    }`}>
                      {project.title}
                    </h3>
                    {index === current && (
                      <p className="text-white/80 mt-2 text-sm md:text-base line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    <div className="mt-3 flex items-center text-white/90 text-sm group-hover:text-gold transition-colors">
                      <span>Voir le projet</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-gold w-8" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>

        <div className="mt-16 text-center animate-on-scroll">
          <Link 
            to="/portfolio" 
            className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
          >
            Voir tous nos projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
