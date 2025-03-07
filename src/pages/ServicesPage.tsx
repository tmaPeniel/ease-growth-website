
import Layout from "../components/Layout";
import { Monitor, BookOpen, BarChart, Users, Code, Database, Search } from "lucide-react";
import MainService from "../components/MainService";
import AdditionalService from "../components/AdditionalService";
import ServicesHero from "../components/ServicesHero";

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
      ],
      external: true,
      externalLink: "https://www.example.com/formations",
      soon: true
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
      <ServicesHero />

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {mainServices.map((service, index) => (
            <MainService 
              key={service.id}
              service={service}
              index={index}
            />
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
              <AdditionalService
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
