import { CheckCircle } from "lucide-react";
import StatsBoxes from "./StatsBoxes";

const About = () => {
  const values = [
    "Client-focused approach",
    "Innovation and creativity",
    "Quality and excellence",
    "Timely delivery",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left: text + values + stats (centered on mobile, left on md+) */}
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About Tech Info
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              We are a passionate team of designers, developers, and digital strategists dedicated to creating
              exceptional digital experiences. With years of expertise across multiple domains, we help businesses
              transform their ideas into reality.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Our mission is to empower businesses with cutting-edge technology and innovative design solutions
              that drive growth and success in the digital age.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 justify-items-center md:justify-items-start mb-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium text-sm sm:text-base">{value}</span>
                </div>
              ))}
            </div>

            {/* Stats boxes (responsive) */}
            <StatsBoxes className="mt-4" />
          </div>

          {/* Right: decorative visual card (stays centered & responsive) */}
          <div className="flex items-center justify-center mt-2 md:mt-0">
            <div className="relative w-full max-w-sm">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent opacity-20"></div>

              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="bg-card/85 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-secondary shadow-lg w-full">
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-secondary mb-1">Experience & Quality</h3>
                    <p className="text-sm text-muted-foreground">Design-driven solutions that deliver results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
