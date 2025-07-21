import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dineshProfile from "/lovable-uploads/edbf57cc-59e4-4b54-ae2c-8c41861472ed.png";

export const AboutMeSection = () => {
  return (
    <section id="about-me" className="section-padding bg-background">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Me Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                ABOUT ME
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Hi, I'm Dinesh — a digital designer and Framer developer passionate 
                about crafting meaningful and impactful digital experiences.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-foreground/70">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">270</div>
                <div className="text-sm text-foreground/70">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-foreground/70">Clients on Worldwide</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <div className="text-sm text-foreground/70 mb-1">Call Today :</div>
                <div className="text-foreground font-medium">+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-sm text-foreground/70 mb-1">Email :</div>
                <div className="text-foreground font-medium">designer@example.com</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="w-10 h-10">
                <span className="text-sm">X</span>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10">
                <span className="text-sm">📷</span>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10">
                <span className="text-sm">💼</span>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10">
                <span className="text-sm">🌐</span>
              </Button>
            </div>

            {/* My Story Button */}
            <div>
              <Button variant="outline" className="px-8 py-3">
                MY STORY
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <img
                src={dineshProfile}
                alt="P.V. Dinesh"
                className="w-full max-w-sm h-auto object-cover rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};