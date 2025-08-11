import Layout from "../components/Layout";
import { Monitor, BookOpen, BarChart, Users, Code, Database, Search, Smartphone, MonitorCog, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import MainService from "../components/MainService";
import AdditionalService from "../components/AdditionalService";
import ServicesHero from "../components/ServicesHero";
import SEOHead from "../components/SEOHead";

// Import images
import webCreationImg from "../assets/web-creation-service.jpg";
import webmarketingImg from "../assets/webmarketing-service.jpg";
import webAppsImg from "../assets/web-apps-service.jpg";
import businessAppsImg from "../assets/business-apps-service.jpg";
import hostingImg from "../assets/hosting-service.jpg";
import formationImg from "../assets/formation-service.jpg";
import refonteImg from "../assets/refonte-service.jpg";

const ServicesPage = () => {
  const mainServices = [
    {
      id: "web-creation",
      icon: <Monitor className="w-12 h-12 mb-6 text-gold" />,
      title: "Création de site web sur mesure",
      description: "Nous concevons des sites web professionnels, modernes et optimisés pour tous les supports (ordinateur, mobile, tablette).",
      features: [
        "Site vitrine pour présenter vos services",
        "Site e-commerce pour vendre vos produits en ligne", 
        "Portfolio pour valoriser votre expertise",
        "Site basé sur CMS (WordPress, Shopify, Webflow, etc.)",
        "Sites SEO-friendly, rapides et pensés pour la conversion"
      ],
      image: webCreationImg
    },
    {
      id: "web-apps",
      icon: <Smartphone className="w-12 h-12 mb-6 text-gold" />,
      title: "Développement d'applications web & PWA",
      description: "Nous développons des applications web personnalisées et des Progressive Web Apps (PWA) alliant performance, sécurité et accessibilité hors ligne.",
      features: [
        "Applications web personnalisées",
        "Progressive Web Apps (PWA)",
        "Performance et sécurité optimales",
        "Fonctionnement hors ligne",
        "Solutions robustes et évolutives"
      ],
      image: webAppsImg
    },
    {
      id: "business-apps",
      icon: <Monitor className="w-12 h-12 mb-6 text-gold" />,
      title: "Création d'applications métiers",
      description: "Nous concevons des applications métiers sur mesure pour digitaliser vos processus internes.",
      features: [
        "Gestion commerciale digitalisée",
        "Outils RH personnalisés",
        "Solutions logistique et comptabilité",
        "Amélioration de la productivité",
        "Développement spécifique à votre activité"
      ],
      image: businessAppsImg
    },
    {
      id: "refonte-maintenance",
      icon: <MonitorCog className="w-12 h-12 mb-6 text-gold" />,
      title: "Refonte et maintenance de site web",
      description: "Votre site web est obsolète ou ne convertit pas ? Nous vous proposons une refonte complète, tant sur le plan graphique que technique.",
      features: [
        "Refonte graphique moderne",
        "Optimisation technique complète",
        "Maintenance sécurisée continue",
        "Mises à jour régulières",
        "Performance garantie"
      ],
      image: refonteImg
    },
    {
      id: "hosting",
      icon: <Cloud className="w-12 h-12 mb-6 text-gold" />,
      title: "Hébergement web sécurisé",
      description: "Nous offrons des solutions d'hébergement web fiables, rapides et sécurisées pour vos sites et applications.",
      features: [
        "Serveurs optimisés haute performance",
        "Temps de chargement rapide",
        "Haute disponibilité garantie",
        "Protection renforcée contre les cybermenaces",
        "Support technique 24/7"
      ],
      image: hostingImg
    },
    {
      id: "marketing",
      icon: <BarChart className="w-12 h-12 mb-6 text-gold" />,
      title: "Webmarketing : SEO & SEA",
      description: "Optimisez votre visibilité avec nos services de webmarketing pour générer plus de trafic qualifié et booster votre chiffre d'affaires.",
      features: [
        "Référencement naturel (SEO) : amélioration positionnement Google",
        "Référencement payant (SEA) : campagnes Google Ads ciblées",
        "Audit SEO et stratégie de mots-clés",
        "Netlinking et optimisation de contenu",
        "Rapports de performance détaillés"
      ],
      image: webmarketingImg
    },
    {
      id: "formation",
      icon: <BookOpen className="w-12 h-12 mb-6 text-gold" />,
      title: "Formations en développement web & data",
      description: "Nous proposons des formations professionnelles dans les domaines du développement web et de la data.",
      features: [
        "Développement web (HTML, CSS, JavaScript, frameworks)",
        "Data (analyse, visualisation, bases de données)",
        "Parcours adaptés à votre niveau",
        "Formation des équipes internes",
        "Montée en compétence personnalisée"
      ],
      external: true,
      externalLink: "https://www.example.com/formations",
      soon: true,
      image: formationImg
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
      <SEOHead 
        title="Services Web & Formation Digitale | EASE GROWTH"
        description="Découvrez nos services de création de sites web, développement d'applications, formations digitales et solutions de transformation numérique sur mesure."
        keywords="services web, création site internet, développement application, formation digitale, transformation numérique, agence web"
      />
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

          {/* Why choose us section */}
          <div className="bg-gradient-to-br from-gold/5 to-transparent rounded-2xl p-8 md:p-12 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Pourquoi faire appel à notre agence digitale ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold mb-2">Approche centrée sur vos objectifs</h3>
                <p className="text-gray-600 text-sm">Solutions alignées avec votre stratégie business</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Équipe passionnée et expérimentée</h3>
                <p className="text-gray-600 text-sm">Experts réactifs à votre service</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Solutions personnalisées</h3>
                <p className="text-gray-600 text-sm">Pas de modèles préconçus, tout sur mesure</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Suivi rigoureux</h3>
                <p className="text-gray-600 text-sm">Transparence totale sur l'avancement</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Résultats mesurables</h3>
                <p className="text-gray-600 text-sm">Impact concret sur votre croissance</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Innovation continue</h3>
                <p className="text-gray-600 text-sm">Technologies de pointe et tendances actuelles</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
