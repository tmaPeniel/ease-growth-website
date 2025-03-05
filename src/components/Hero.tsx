
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
        heroContent.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gold/5 to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-gold/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
      
      {/* Animated grid lines - vertical */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-black/5"
            style={{ left: `${10 * (i + 1)}%`, animation: `fade-in 1.5s ease-out ${i * 0.1}s forwards` }}
          ></div>
        ))}
        
        {/* Animated grid lines - horizontal */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-black/5"
            style={{ top: `${10 * (i + 1)}%`, animation: `fade-in 1.5s ease-out ${i * 0.1}s forwards` }}
          ></div>
        ))}
      </div>
      
      {/* Hero content */}
      <div className="hero-content container mx-auto px-6 relative z-10 text-center pt-24">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-xs md:text-sm font-medium mb-5 animate-fade-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            AGENCE WEB & FORMATION
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Propulsez votre entreprise <br /> <span className="text-gold">vers de nouveaux sommets</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Nous créons des sites web professionnels et des stratégies digitales qui transforment votre vision en réalité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-down opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Link
              to="/contact"
              className="px-8 py-4 bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 rounded-full text-base font-medium group flex items-center"
            >
              <span>Démarrer un projet</span>
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full text-base font-medium"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2 text-gray-500">Découvrir</span>
        <ChevronDown size={20} className="text-gray-500 animate-bounce" />
      </button>
    </div>
  );
};

export default Hero;
