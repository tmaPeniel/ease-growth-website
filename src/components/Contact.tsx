
import { useState } from "react";
import { Send, Phone, Mail, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after some time
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-gold" />,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
      link: "tel:+33123456789"
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: "Email",
      details: "contact@easegrowth.fr",
      link: "mailto:contact@easegrowth.fr"
    }
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="p-6 glass-card rounded-xl hover:shadow-gold transition-all duration-300 no-underline text-current"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-gold/10 rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Prêt à transformer votre présence en ligne ?</h3>
              <p className="text-gray-600 mb-6">
                Que vous souhaitiez créer un nouveau site, optimiser votre site existant ou suivre une formation, notre équipe est là pour vous accompagner à chaque étape.
              </p>
              <ul className="mb-6 space-y-3">
                {["Réponse sous 24h", "Devis personnalisé", "Accompagnement sur mesure"].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="mt-0.5 bg-gold/10 rounded-full p-1">
                      <CheckCircle className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl animate-on-scroll">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-gray-600">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Création de site web">Création de site web</option>
                      <option value="Formation">Formation</option>
                      <option value="Marketing digital">Marketing digital</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg bg-black text-white font-medium flex items-center justify-center transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gold hover:text-black"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
