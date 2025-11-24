import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/assets/Service & Maintenance Zone.jpeg")`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background/95" />
      </div>

      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
            Area 7 – Service & Maintenance Zone
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-12 font-light">
            Supports the retreat’s operational needs, including maintenance facilities, staff amenities, and logistics hubs.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={scrollToContent}
            className="group hover:shadow-lg transition-all"
          >
            Explore More
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/70" />
      </div>
    </section>
  );
};
