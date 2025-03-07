
import React from "react";
import { LucideIcon } from "lucide-react";

interface AdditionalServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const AdditionalService: React.FC<AdditionalServiceProps> = ({ 
  icon, 
  title, 
  description, 
  index 
}) => {
  return (
    <div 
      className="glass-card p-8 rounded-2xl hover:shadow-gold transition-all duration-300 animate-on-scroll"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default AdditionalService;
