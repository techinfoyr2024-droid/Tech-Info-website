import React from "react";
import { Youtube, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import techInfoLogo from "../assets/tech-info-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@TechInfo-2025-k4j", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/TECHINFO228976", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/tech.info.2025/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tech-info-undefined-8b846738b", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/techinfoyr2024-droid", label: "GitHub" },
  ];

  const isExternal = (url: string) => /^https?:\/\//.test(url);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* use public asset path */}
            <img
              src={techInfoLogo}
              alt="Tech Info Logo"
              className="h-10 w-auto mb-4"
              width={160}
              height={40}
            />
            <p className="text-primary-foreground/80 max-w-md">
              Transforming ideas into exceptional digital experiences through innovative design and development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
                    aria-label={link}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const external = isExternal(social.href);
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-secondary smooth-transition flex items-center justify-center"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {currentYear} Tech Info. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
