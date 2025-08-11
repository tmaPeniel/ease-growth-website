import { useEffect, useMemo, useRef, useState } from "react";
import { type Project } from "@/data/projects";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface FeaturedProjectsCarouselProps {
  projects: Project[];
}
const AUTOPLAY_INTERVAL = 4000;
const FeaturedProjectsCarousel = ({
  projects
}: FeaturedProjectsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Update selected index and snaps when API is ready
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    setSnapCount(api.scrollSnapList().length);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Pause autoplay when offscreen
  useEffect(() => {
    if (!containerRef.current) return;
    const target = containerRef.current;
    const observer = new IntersectionObserver(entries => {
      setInView(entries[0]?.isIntersecting ?? true);
    }, {
      threshold: 0.2
    });
    observer.observe(target);
    return () => observer.unobserve(target);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!api || !inView || isHovered) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(id);
  }, [api, inView, isHovered]);
  const items = useMemo(() => projects, [projects]);
  return <div ref={containerRef} className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Edge gradients to suggest scroll */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <Carousel opts={{
      loop: true,
      align: "center",
      skipSnaps: false
    }} setApi={setApi} className="px-4" aria-label="Projets en vedette">
        <CarouselContent>
          {items.map((project, index) => <CarouselItem key={project.id} className="basis-[85%] md:basis-1/2 xl:basis-1/3">
              <FeaturedProjectCard project={project} active={index === selectedIndex} index={index} />
            </CarouselItem>)}
        </CarouselContent>

        
        
      </Carousel>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => api?.scrollPrev()}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
          aria-label="Projet précédent"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        {snapCount > 1 && (
          <div className="flex items-center gap-2">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button 
                key={i} 
                onClick={() => api?.scrollTo(i)} 
                aria-label={`Aller au slide ${i + 1}`} 
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-6 bg-black" : "w-2 bg-black/30 hover:bg-black/50"
                }`} 
              />
            ))}
          </div>
        )}

        <button
          onClick={() => api?.scrollNext()}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
          aria-label="Projet suivant"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>;
};
export default FeaturedProjectsCarousel;