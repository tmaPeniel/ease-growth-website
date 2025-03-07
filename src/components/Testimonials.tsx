
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "L'équipe d'EASE GROWTH a su comprendre nos besoins et créer un site web qui reflète parfaitement notre image de marque. Un travail de qualité qui a dépassé nos attentes.",
    name: "Édèle MILAN",
    position: "Founder, C'EST DANS LA BOITE",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    quote: "Grâce à la formation dispensée par EASE GROWTH, nous sommes maintenant autonomes dans la gestion de notre site e-commerce. Une équipe pédagogue et à l'écoute !",
    name: "Vincent BOUITI-VIAUDO",
    position: "Founder, YADAQ",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "Professionnalisme, réactivité et créativité : voilà comment je décrirais EASE GROWTH. Ils ont transformé notre présence en ligne et les résultats sont impressionnants.",
    name: "Émilie Leduc",
    position: "CEO, StartUp Innovante",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-gold rounded-full mb-3 backdrop-blur-sm">
            TÉMOIGNAGES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-300">
            Découvrez les expériences de ceux qui nous ont fait confiance pour leurs projets web.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col items-center py-8 px-4 md:px-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Quote className="w-16 h-16 text-gold/20" />
            </div>

            <div className="min-h-64 flex items-center justify-center">
              <div 
                key={activeIndex}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
              >
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-16 h-16 rounded-full mb-4 border-2 border-gold"
                  />
                  <div className="text-gold font-bold">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-400 text-sm">{testimonials[activeIndex].position}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-12 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-gold w-6" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <button 
                onClick={goToPrev}
                className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={goToNext}
                className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
