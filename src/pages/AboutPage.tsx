import Layout from "../components/Layout";
import { ArrowRight, Users, Award, Calendar, Check } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const milestones = [
    {
      year: "Decembre 2023",
      title: "Fondation d'EASE GROWTH",
      description: "Création de l'agence avec une vision claire : simplifier l'accès au digital."
    },
    {
      year: "Septembre 2024",
      title: "Premier projet : YADAQ",
      description: "Developpement d'un site vitrine pour une agence de communication."
    },
    {
      year: "Octobre 2024",
      title: "Deuxieme projet : C'EST DANS LA BOITE",
      description: "Developpement d'un site vitrine pour une photographe professionnelle."
    },
    {
      year: "2025",
      title: "Mise en place du pôle formation",
      description: "Développement de programmes pour former aux compétences web et data."
    }
  ];

  const teamMembers = [
    {
      name: "Karl SAWADOGO",
      role: "Administration et Formation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Experte en stratégie digitale avec plus de 10 ans d'expérience dans le secteur web."
    },
    {
      name: "Péniel TAOUEMA",
      role: "Technique et Formation",
      image: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Développeur full-stack passionné par les technologies innovantes et l'expérience utilisateur."
    },
    {
      name: "Lorenzo DELOFON",
      role: "Relation Client et Formation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Designer UX/UI créative spécialisée dans la conception d'interfaces intuitives et esthétiques."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir des solutions de la plus haute qualité, en nous tenant à jour des dernières tendances et technologies."
    },
    {
      title: "Innovation",
      description: "Nous repoussons constamment les limites pour créer des expériences digitales uniques et efficaces."
    },
    {
      title: "Collaboration",
      description: "Nous croyons en une approche transparente et collaborative, en travaillant en étroite relation avec nos clients."
    },
    {
      title: "Impact",
      description: "Notre objectif est de créer des solutions qui génèrent des résultats concrets et mesurables pour nos clients."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
              NOTRE HISTOIRE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Découvrez l'équipe derrière <br /><span className="text-gold">EASE GROWTH</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Une agence passionnée par l'innovation et dédiée à la réussite digitale de ses clients.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-black/10 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="L'équipe EASE GROWTH en plein brainstorming" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
                NOTRE MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Faciliter la croissance des entreprises grâce au digital
              </h2>
              <p className="text-gray-600 mb-6">
                Créée en 2024, EASE GROWTH est née d'une conviction : aider les PME, Artisants et Startup à gagner en visibilité sur le web. 
                Notre mission est d'aider les entreprises, PME, Artisants... à se développer grâce à une présence en ligne efficace et impactante.
              </p>
              <p className="text-gray-600 mb-8">
                Nous sommes plus qu'une simple agence web; nous sommes des partenaires de croissance. Notre approche combine expertise technique, créativité et compréhension approfondie des besoins de nos clients pour créer des solutions sur mesure qui génèrent des résultats tangibles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="p-6 rounded-xl bg-black/5 hover:bg-gold/10 transition-colors">
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="relative">
                {/* Timeline */}
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 bg-gold text-black font-bold py-1 px-3 rounded-full text-sm mr-4">
                        {milestone.year}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                      </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 -bottom-10 left-[18px] w-0.5 bg-gray-200 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-black/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
              NOTRE ÉQUIPE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Les talents derrière notre succès
            </h2>
            <p className="text-gray-600">
              Notre équipe diversifiée combine créativité, expertise technique et sens du service pour offrir des solutions innovantes et adaptées à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="animate-on-scroll relative rounded-xl overflow-hidden group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{member.name}</h3>
                  <p className="text-gold mb-2">{member.role}</p>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll text-center p-8 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-4xl font-bold mb-2">+5</h3>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            
            <div className="animate-on-scroll text-center p-8 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-4xl font-bold mb-2">+5</h3>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
            
            <div className="animate-on-scroll text-center p-8 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-4xl font-bold mb-2">+1</h3>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/20 text-gold rounded-full mb-3">
                POURQUOI NOUS CHOISIR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Une approche centrée sur vos objectifs
              </h2>
              <p className="text-gray-400 mb-8">
                Nous nous différencions par notre approche personnalisée et notre engagement envers la réussite de nos clients. Notre objectif est de créer des solutions qui non seulement répondent à vos besoins actuels, mais qui évoluent également avec votre entreprise.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Accompagnement sur mesure à chaque étape de votre projet",
                  "Solutions adaptées à votre secteur d'activité et vos objectifs",
                  "Transparence totale sur nos méthodes et nos tarifs",
                  "Support continu et mise à jour régulière de vos outils"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-0.5 bg-gold/20 rounded-full p-1">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gold text-black hover:bg-white transition-colors duration-300 rounded-full"
              >
                Discuter de votre projet
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="animate-on-scroll order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/30 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full filter blur-xl"></div>
                
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Équipe EASE GROWTH en collaboration"
                  className="relative z-10 rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
              PRÊT À DÉMARRER ?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformons ensemble votre entreprise
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Que vous soyez une petite entreprise ou une grande organisation, nous avons les compétences et l'expertise nécessaires pour vous aider à atteindre vos objectifs digitaux.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-black text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-full text-base font-medium"
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
