
import { Phone, Mail, CheckCircle } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-gold" />,
      title: "Téléphone",
      details: "+33 6 26 43 85 07",
      link: "tel:+33626438507"
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: "Email",
      details: "easegrowth0@gmail.com",
      link: "mailto:easegrowth0@gmail.com"
    }
  ];

  return (
    <>
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
    </>
  );
};

export default ContactInfo;
