
import React from "react";
import { Link } from "react-router-dom";

interface ServiceFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  external?: boolean;
  externalLink?: string;
  soon?: boolean;
  image?: string; // Add image property
}

interface MainServiceProps {
  service: ServiceFeature;
  index: number;
}

const MainService: React.FC<MainServiceProps> = ({ service, index }) => {
  return (
    <div 
      id={service.id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
        index !== 2 ? 'border-b border-gray-100' : ''
      }`}
    >
      <div className={`animate-on-scroll ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
        <div className="flex justify-center lg:justify-start">
          {service.icon}
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">{service.title}</h2>
        <p className="text-gray-600 mb-8 text-center lg:text-left">{service.description}</p>
        
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <div className="mt-0.5 bg-gold/10 rounded-full p-1">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="text-center lg:text-left">
          {service.external ? (
            <a 
              href={service.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-full"
            >
              {service.soon ? "Bientôt disponible" : "En savoir plus"}
            </a>
          ) : (
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-black text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-full"
            >
              En savoir plus
            </Link>
          )}
        </div>
      </div>
      
      <div className={`relative animate-on-scroll ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-bl from-gold/10 to-transparent"></div>
          
          {/* Main image */}
          <img
            src={service.image}
            alt={service.title}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MainService;
