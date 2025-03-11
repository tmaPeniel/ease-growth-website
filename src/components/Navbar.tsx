
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu only when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" 
          : isOpen 
            ? "bg-white py-5" 
            : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-50 flex items-center"
        >
          <img 
            src="/lovable-uploads/d931a4c5-2978-4a6a-9429-18ed20c55960.png" 
            alt="EASE GROWTH Logo" 
            className="h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium relative overflow-hidden group transition-colors py-2 
                ${location.pathname === link.path ? "text-gold" : "text-black hover:text-gold"}`}
            >
              {link.name}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 
                  ${location.pathname === link.path ? "scale-x-100" : ""}`}
              ></span>
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="ml-3 px-6 py-3 bg-black text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-full text-sm font-medium"
          >
            Démarrer un projet
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 z-40 bg-white lg:hidden flex flex-col justify-center items-center transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col space-y-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-medium transition-colors hover:text-gold 
                  ${location.pathname === link.path ? "text-gold" : "text-black"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 px-8 py-3 bg-black text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-full text-base font-medium"
            >
              Démarrer un projet
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
