import { useState } from "react";
import Layout from "../components/Layout";
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import { blogArticles, getAllCategories } from "@/data/blog";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", ...getAllCategories()];
  
  const filteredArticles = selectedCategory === "all" 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

  return (
    <Layout>
      <BlogHero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category === "all" ? "Tous les articles" : category}
              </Button>
            ))}
          </div>
          
          {/* Blog Grid */}
          <BlogGrid articles={filteredArticles} />
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun article trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;