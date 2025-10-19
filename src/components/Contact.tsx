import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a
                      href="mailto:techinfo.yr2024@gmail.com?subject=Inquiry%20from%20Website"
                      className="text-muted-foreground hover:text-secondary smooth-transition"
                      aria-label="Email Tech Info"
                    >
                      techinfo.yr2024@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a
                      href="tel:+919025643513"
                      className="text-muted-foreground hover:text-secondary smooth-transition"
                      aria-label="Call Tech Info"
                    >
                      +91 90256 43513
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Chennai%2C+Tamil+Nadu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary smooth-transition"
                      aria-label="Open location in Google Maps"
                    >
                      Chennai, Tamil Nadu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Form Button */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <p className="text-muted-foreground mb-6">
                Click the button below to fill out our contact form and we'll get back to you as soon as possible.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => window.open('https://surli.cc/oftvmg', '_blank')}
              >
                Open Contact Form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
