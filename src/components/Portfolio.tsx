import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ecommerce from "@/assets/portfolio/ecommerce-platform.jpg";
import branding from "@/assets/portfolio/brand-identity.jpg";
import mobileApp from "@/assets/portfolio/mobile-app.jpg";
import aiChatbot from "@/assets/portfolio/ai-chatbot.jpg";
import socialMedia from "@/assets/portfolio/social-media.jpg";
import saasDashboard from "@/assets/portfolio/saas-dashboard.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully responsive online shopping platform with advanced product filtering, secure payment integration, and seamless user experience. Built with modern web technologies for optimal performance.",
      image: ecommerce,
    },
    {
      id: "brand-identity",
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete brand identity package including logo design, color palette, typography guidelines, and brand collateral. Creating memorable visual experiences that resonate with target audiences.",
      image: branding,
    },
    {
      id: "mobile-app",
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "Intuitive mobile application interface designed for maximum user engagement. Features smooth animations, accessible navigation, and a delightful user journey from onboarding to conversion.",
      image: mobileApp,
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Solution",
      category: "Machine Learning",
      description: "Intelligent conversational AI powered by machine learning algorithms. Provides 24/7 customer support with natural language processing and context-aware responses for enhanced user satisfaction.",
      image: aiChatbot,
    },
    {
      id: "social-media",
      title: "Social Media Campaign",
      category: "Marketing",
      description: "Strategic social media marketing campaign featuring engaging content creation, audience targeting, and data-driven insights. Maximizes brand visibility and drives meaningful customer engagement.",
      image: socialMedia,
    },
    {
      id: "saas-dashboard",
      title: "SaaS Dashboard",
      category: "Product Design",
      description: "Comprehensive business intelligence dashboard with real-time analytics, customizable widgets, and data visualization. Empowers teams to make informed decisions with actionable insights.",
      image: saasDashboard,
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Explore some of our recent projects and see how we bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`}>
              <Card 
                className="group overflow-hidden hover:shadow-xl smooth-transition cursor-pointer border-border hover:border-secondary h-full"
              >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 smooth-transition flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 smooth-transition" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-secondary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
