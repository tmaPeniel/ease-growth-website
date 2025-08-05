import { useState } from "react";
import Layout from "../components/Layout";
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import { blogArticles, getAllCategories } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const categories = ["all", ...getAllCategories()];
  
  // Filter articles by category and search query
  const filteredArticles = blogArticles
    .filter(article => selectedCategory === "all" || article.category === selectedCategory)
    .filter(article => 
      searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
  // Get recent articles (last 3)
  const recentArticles = [...blogArticles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);
  
  // Get popular categories
  const popularCategories = getAllCategories().slice(0, 3);

  return (
    <Layout>
      <BlogHero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                    size="sm"
                  >
                    {category === "all" ? "Tous les articles" : category}
                  </Button>
                ))}
              </div>
              
              {/* Results Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
                  {searchQuery && ` pour "${searchQuery}"`}
                </p>
              </div>

              {/* Blog Grid */}
              <BlogGrid articles={filteredArticles} />
              
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {searchQuery 
                      ? `Aucun article trouvé pour "${searchQuery}"`
                      : "Aucun article trouvé dans cette catégorie."
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Recent Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-gold" />
                    Articles Récents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentArticles.map((article) => (
                    <div key={article.id} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-sm leading-snug mb-1 hover:text-gold transition-colors cursor-pointer">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    Catégories Populaires
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {popularCategories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      onClick={() => setSelectedCategory(category)}
                      className="w-full justify-start text-sm h-8"
                    >
                      {category}
                      <span className="ml-auto text-xs text-gray-400">
                        {blogArticles.filter(a => a.category === category).length}
                      </span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Search Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conseils de Recherche</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• Utilisez des mots-clés spécifiques</p>
                    <p>• Recherchez par titre ou contenu</p>
                    <p>• Filtrez par catégorie pour affiner</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;