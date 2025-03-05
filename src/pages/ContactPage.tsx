
import Layout from "../components/Layout";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
              CONTACTEZ-NOUS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discutons de votre <span className="text-gold">projet</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Nous sommes impatients de découvrir votre vision et de vous aider à la concrétiser.
            </p>
          </div>
        </div>
      </section>
      
      <Contact />
    </Layout>
  );
};

export default ContactPage;
