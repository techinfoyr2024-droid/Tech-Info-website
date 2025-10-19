import { User, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Ownership = () => {
  const principles = [
    {
      icon: Shield,
      title: "Full Ownership of Innovation",
      description: "All products and solutions created at Tech Info are 100% owned by the company, ensuring credibility and legal security."
    },
    {
      icon: User,
      title: "Transparent Leadership",
      description: "Loganathan leads every aspect of the startup, from creative design to technical execution, fostering trust and accountability."
    },
    {
      icon: TrendingUp,
      title: "Future-Ready Growth",
      description: "Tech Info plans to expand ownership opportunities for collaborators and employees through equity sharing as the startup scales."
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ownership & Leadership</h2>
          <p className="text-lg text-muted-foreground">
            Building the future with integrity, innovation, and transparent leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-secondary/20 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">Loganathan Murugan</h3>
                <p className="text-secondary font-semibold mb-4">Founder & B.Tech IT Final Year Student</p>
                <p className="text-muted-foreground leading-relaxed">
                  Tech Info is founded by Loganathan, a passionate student and innovator with a vision to blend 
                  technology, design, and creativity. As the sole owner and driving force behind the company, 
                  Loganathan ensures that every project—whether a web design, branding solution, or machine 
                  learning innovation—meets the highest standards of quality and originality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="border-border hover:border-secondary smooth-transition">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{principle.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We prioritize ownership, innovation, and integrity, making Tech Info a trusted partner for clients 
            seeking cutting-edge solutions and original ideas. Every project we undertake reflects our commitment 
            to excellence and our dedication to pushing the boundaries of what's possible in technology and design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ownership;
