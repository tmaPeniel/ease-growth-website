
import { CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
            CONTACTEZ-NOUS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-gray-600">
            Vous avez un projet en tête ou une question ? N'hésitez pas à nous contacter pour en discuter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <ContactInfo />
          </div>

          <div className="glass-card p-8 rounded-xl animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
