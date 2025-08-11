import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEOHead = ({ 
  title = "EASE GROWTH - Agence Web & Formation Digitale", 
  description = "Agence web spécialisée en création de sites internet, formations digitales et transformation numérique. Solutions sur mesure pour booster votre croissance.",
  keywords = "agence web, création site internet, formation digitale, développement web, référencement SEO",
  ogImage = "/og-image.png",
  noindex = false
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = `https://easegrowth.fr${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: `https://easegrowth.fr${ogImage}` },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: `https://easegrowth.fr${ogImage}` }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add structured data for the current page
    const addStructuredData = () => {
      let structuredData = document.querySelector('#structured-data');
      if (structuredData) {
        structuredData.remove();
      }

      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      
      const baseData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": canonicalUrl,
        "isPartOf": {
          "@type": "WebSite",
          "name": "EASE GROWTH",
          "url": "https://easegrowth.fr"
        },
        "about": {
          "@type": "Organization",
          "name": "EASE GROWTH"
        }
      };

      script.textContent = JSON.stringify(baseData);
      document.head.appendChild(script);
    };

    addStructuredData();

  }, [title, description, keywords, canonicalUrl, ogImage, noindex]);

  return null;
};

export default SEOHead;