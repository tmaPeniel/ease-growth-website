const BlogHero = () => {
  return (
    <section className="pt-32 pb-20 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gold/5 to-white"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Notre <span className="text-gold">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Découvrez nos insights, conseils et dernières actualités sur le développement web, 
            le design et les stratégies digitales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;