import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ecommerce from "@/assets/portfolio/ecommerce-platform.jpg";
import branding from "@/assets/portfolio/brand-identity.jpg";
import mobileApp from "@/assets/portfolio/mobile-app.jpg";
import aiChatbot from "@/assets/portfolio/ai-chatbot.jpg";
import socialMedia from "@/assets/portfolio/social-media.jpg";
import saasDashboard from "@/assets/portfolio/saas-dashboard.jpg";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A fully responsive online shopping platform with advanced product filtering, secure payment integration, and seamless user experience. Built with modern web technologies for optimal performance.",
    image: ecommerce,
    fullDescription: "This comprehensive e-commerce solution features a modern, intuitive interface designed to maximize conversions. The platform includes advanced product filtering, real-time inventory management, secure payment gateway integration, and a responsive design that works flawlessly across all devices. Built using React, Node.js, and integrated with leading payment providers to ensure a secure and smooth shopping experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    duration: "3 months",
    client: "Retail Corporation"
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete brand identity package including logo design, color palette, typography guidelines, and brand collateral. Creating memorable visual experiences that resonate with target audiences.",
    image: branding,
    fullDescription: "A comprehensive brand identity system developed for a growing startup. This project included logo design, color palette selection, typography guidelines, business card design, letterhead, and complete brand style guide. The identity system ensures consistency across all touchpoints while being flexible enough to adapt to various marketing materials and digital platforms.",
    technologies: ["Adobe Illustrator", "Figma", "Photoshop"],
    duration: "6 weeks",
    client: "Tech Startup"
  },
  {
    id: "mobile-app",
    title: "Mobile App Design",
    category: "UI/UX Design",
    description: "Intuitive mobile application interface designed for maximum user engagement. Features smooth animations, accessible navigation, and a delightful user journey from onboarding to conversion.",
    image: mobileApp,
    fullDescription: "A user-centered mobile application design focused on creating an intuitive and engaging experience. The design process included user research, wireframing, prototyping, and user testing. Features include smooth micro-interactions, accessible navigation patterns, dark mode support, and a comprehensive onboarding flow. The app achieved a 4.8-star rating on both iOS and Android platforms.",
    technologies: ["Figma", "Principle", "React Native", "Firebase"],
    duration: "4 months",
    client: "Healthcare Provider"
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Solution",
    category: "Machine Learning",
    description: "Intelligent conversational AI powered by machine learning algorithms. Provides 24/7 customer support with natural language processing and context-aware responses for enhanced user satisfaction.",
    image: aiChatbot,
    fullDescription: "An advanced AI-powered chatbot system that handles customer inquiries with human-like understanding. The solution uses natural language processing, machine learning, and contextual awareness to provide accurate responses. It integrates seamlessly with existing customer service platforms, learns from interactions, and continuously improves its responses. The chatbot reduced customer service response time by 70% and handles 80% of inquiries without human intervention.",
    technologies: ["Python", "TensorFlow", "NLP", "Docker", "Kubernetes"],
    duration: "5 months",
    client: "Financial Services"
  },
  {
    id: "social-media",
    title: "Social Media Campaign",
    category: "Marketing",
    description: "Strategic social media marketing campaign featuring engaging content creation, audience targeting, and data-driven insights. Maximizes brand visibility and drives meaningful customer engagement.",
    image: socialMedia,
    fullDescription: "A comprehensive social media marketing campaign designed to increase brand awareness and engagement. The campaign included content strategy development, creative asset production, influencer partnerships, and performance analytics. Through targeted advertising and organic content, we achieved a 300% increase in engagement, 150% growth in followers, and a significant boost in brand recognition across all platforms.",
    technologies: ["Meta Ads", "Google Analytics", "Canva", "Hootsuite"],
    duration: "3 months",
    client: "Fashion Brand"
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "Product Design",
    description: "Comprehensive business intelligence dashboard with real-time analytics, customizable widgets, and data visualization. Empowers teams to make informed decisions with actionable insights.",
    image: saasDashboard,
    fullDescription: "A powerful analytics dashboard that transforms complex data into actionable insights. Features include real-time data visualization, customizable widgets, advanced filtering, export capabilities, and role-based access control. The dashboard integrates with multiple data sources and provides interactive charts, graphs, and reports. Users can create custom dashboards tailored to their specific needs, improving decision-making speed by 60%.",
    technologies: ["React", "D3.js", "PostgreSQL", "GraphQL", "Redis"],
    duration: "6 months",
    client: "Enterprise SaaS Company"
  },
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto">
            <Link to="/#portfolio">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="text-sm text-secondary font-medium mb-3">{project.category}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-4">Project Info</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Client</div>
                      <div className="font-medium">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Duration</div>
                      <div className="font-medium">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Category</div>
                      <div className="font-medium">{project.category}</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  View Live Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;