import { useState } from "react";
import { Menu, X } from "lucide-react";
// replace alias import with relative path to src/assets
import techInfoLogo from "../assets/tech-info-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo (left) */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            {/* use the imported image */}
            <img
              src={techInfoLogo}
              alt="Tech Info Logo"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Spacer pushes nav/cta to the right */}
          <div className="flex-1" />

          {/* Right side: Desktop nav + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary smooth-transition rounded-lg hover:bg-muted/50"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div>
              <Button
                variant="hero"
                size="default"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button (remains on right) */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 smooth-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-3 text-left text-sm font-medium text-foreground hover:text-secondary smooth-transition rounded-lg hover:bg-muted/50"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
