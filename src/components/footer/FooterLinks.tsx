
import { Link } from "react-router-dom";

interface FooterLinksProps {
  title: string;
  links: Array<{
    name: string;
    path: string;
  }>;
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
