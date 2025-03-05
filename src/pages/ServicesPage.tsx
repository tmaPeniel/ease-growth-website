
import Layout from "../components/Layout";
import { Monitor, PenTool, BookOpen, BarChart, Users, Code, Database, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const mainServices = [
    {
      id: "web-creation",
      icon: <Monitor className="w-12 h-12 mb-6 text-gold" />,
      title: "Création de site web",
      description: "Des sites web professionnels, responsive et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Sites vitrines élégants",
        "E-commerce performants",
        "Applications web sur mesure",
        "Interfaces administrateur intuitives",
        "Optimisation mobile"
      ]
    },
    {
      id: "design",
      icon: <PenTool className="w-12 h-12 mb-6 text-gold" />,
      title: "Design UI/UX",
      description: "Des interfaces utilisateur esthétiques et intuitives qui engagent vos visiteurs et améliorent leur expérience.",
      features: [
        "Maquettes & prototypes",
        "Design responsive",
        "Identité visuelle",
        "Tests utilisateurs",
        "Optimisation de l'expérience"
      ]
    },
    {
      id: "training",
      icon: <BookOpen className="w-12 h-12 mb-6 text-gold" />,
      title: "Formation web",
      description: "Des formations personnalisées pour vous permettre de maîtriser les outils web et gérer votre site en toute autonomie.",
      features: [
        "WordPress & CMS",
        "HTML/CSS pour débutants",
        "SEO fondamental",
        "Administration de site",
        "Marketing digital"
      ]
    },
    {
      id: "marketing",
      icon: <BarChart className="w-12 h-12 mb-6 text-gold" />,
      title: "Marketing digital",
      description: "Des stratégies digitales efficaces pour augmenter votre visibilité en ligne et attirer plus de clients.",
      features: [
        "Référencement naturel (SEO)",
        "Publicité Google Ads",
        "Réseaux sociaux",
        "Email marketing",
        "Analyse de performance"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="w-10 h-10 mb-4 text-gold" />,
      title: "Consulting",
      description: "Conseils stratégiques pour optimiser votre présence digitale et atteindre vos objectifs business."
    },
    {
      icon: <Code className="w-10 h-10 mb-4 text-gold" />,
      title: "Développement sur mesure",
      description: "Solutions techniques adaptées à vos besoins spécifiques pour des fonctionnalités uniques."
    },
    {
      icon: <Database className="w-10 h-10 mb-4 text-gold" />,
      title: "Maintenance & support",
      description: "Suivi technique, mises à jour et assistance pour garantir la pérennité de votre site."
    },
    {
      icon: <Search className="w-10 h-10 mb-4 text-gold" />,
      title: "Audit & optimisation",
      description: "Analyse approfondie de votre site existant avec recommandations d'amélioration."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gold/5 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3 animate-fade-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              NOS SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Solutions digitales complètes
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              De la conception à la mise en ligne, nous vous accompagnons à chaque étape de votre projet digital pour des résultats à la hauteur de vos ambitions.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 rounded-full text-base font-medium animate-fade-down opacity-0"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {mainServices.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                index !== mainServices.length - 1 ? 'border-b border-gray-100' : ''
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
                  <Link 
                    to="/contact" 
                    className="inline-block px-6 py-3 bg-black text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-full"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
              
              <div className={`relative animate-on-scroll ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-gold/10 to-transparent"></div>
                  
                  {/* Main image - using placeholder images, replace with actual service images */}
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1460925895917-afdab827c52f' : 
                      index === 1 ? '1542744095-fcf48f21aae9' : 
                      index === 2 ? '1517245386807-bb43ffb1f7b2' : 
                      '1533750349088-cd871a92f8a7'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`}
                    alt={service.title}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
              SERVICES COMPLÉMENTAIRES
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Pour aller plus loin
            </h2>
            <p className="text-gray-600">
              En plus de nos services principaux, nous proposons des prestations complémentaires pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:shadow-gold transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-gray-300 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-gold text-black hover:bg-white transition-colors duration-300 rounded-full text-base font-medium"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
