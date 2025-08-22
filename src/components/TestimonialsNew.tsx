
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Édèle MILAN",
      handle: "@edele_milan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "L'équipe d'EASE GROWTH a su comprendre nos besoins et créer un site web qui reflète parfaitement notre image de marque. Un travail de qualité qui a dépassé nos attentes.",
    href: "#"
  },
  {
    author: {
      name: "Vincent BOUITI-VIAUDO",
      handle: "@vincent_yadaq",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Nous avons fait appel à EASE GROWTH pour la création de notre site web, et nous ne pouvons que recommander leur expertise ! Dès le premier échange, leur équipe a su comprendre nos besoins et nos attentes en matière de design et de fonctionnalités.",
    href: "#"
  },
  {
    author: {
      name: "Marie DUBOIS",
      handle: "@marie_tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Un service client exceptionnel et une équipe technique très compétente. Notre site e-commerce fonctionne parfaitement grâce à leur travail.",
    href: "#"
  },
  {
    author: {
      name: "Jean MARTIN",
      handle: "@jean_business",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "EASE GROWTH a transformé notre présence en ligne. Le design est moderne et l'interface utilisateur est intuitive. Nos clients sont ravis !",
    href: "#"
  }
]

const TestimonialsNew = () => {
  return (
    <TestimonialsSection
      title="Ce que disent nos clients"
      description="Découvrez les expériences de ceux qui nous ont fait confiance pour leurs projets web."
      testimonials={testimonials}
      className="bg-primary text-primary-foreground"
    />
  )
}

export default TestimonialsNew
