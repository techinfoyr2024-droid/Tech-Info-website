import { Code, Palette, Package, Layout, Share2, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Build responsive, high-performance websites tailored to your business needs.",
    },
    {
      icon: Palette,
      title: "Graphic & Branding Design",
      description: "Create memorable brand identities that resonate with your target audience.",
    },
    {
      icon: Package,
      title: "Product Design",
      description: "Design innovative products that solve real problems and delight users.",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Craft intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Grow your brand presence and engage your audience across social platforms.",
    },
    {
      icon: Brain,
      title: "Machine Learning Projects",
      description: "Leverage AI and ML to build intelligent solutions for complex challenges.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl smooth-transition hover:scale-105 border-border hover:border-secondary bg-[var(--gradient-card)]"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 smooth-transition">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
