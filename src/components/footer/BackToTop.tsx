
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  onClick: () => void;
}

const BackToTop = ({ onClick }: BackToTopProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-10 right-10 p-3 bg-gold/20 hover:bg-gold/30 text-gold rounded-full transition-colors z-20"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
