import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Layout from "../components/Layout";
import { getBlogArticleBySlug } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }
  
  const article = getBlogArticleBySlug(slug);
  
  if (!article) {
    return <NotFound />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gold">
              <Link to="/blog" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Link>
            </Button>
          </div>
          
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  {article.category}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {formatDate(article.publishDate)}
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {article.author}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
            </header>
            
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                {article.excerpt}
              </p>
              
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {article.content}
              </div>
            </div>
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Cet article vous a plu ?</p>
                <Button asChild>
                  <Link to="/contact">
                    Discutons de votre projet
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticlePage;