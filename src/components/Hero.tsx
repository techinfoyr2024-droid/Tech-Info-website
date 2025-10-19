import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5"></div>
      
      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Design. Develop. <span className="text-secondary">Innovate.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into stunning digital experiences with our expert design and development services. We work with corporate companies on contract to deliver exceptional solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-base font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base font-semibold"
            >
              View Services
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { number: "10+", label: "Projects Delivered" },
              { number: "5+", label: "Happy Clients" },
              { number: "1+", label: "Years Experience" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg bg-card border border-border hover:border-secondary smooth-transition">
                <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
