import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const achievements = [
  {
    id: 1,
    title: "Robotics Expo",
    description: "Showcased innovative automation project",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    tags: ["#Innovation", "#Robotics"]
  },
  {
    id: 2,
    title: "ICIAET Conference",
    description: "Research presentation on engineering tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    tags: ["#Research", "#Conference"]
  },
  {
    id: 3,
    title: "ML Project",
    description: "Advanced data analysis achievement",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    tags: ["#ML", "#DataScience"]
  },
  {
    id: 4,
    title: "Web Development",
    description: "Full-stack application showcase",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=600&fit=crop",
    tags: ["#WebDev", "#Fullstack"]
  },
  {
    id: 5,
    title: "AI Integration",
    description: "Smart system implementation",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop",
    tags: ["#AI", "#Innovation"]
  }
];

export const AchievementsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <section className="section-padding bg-gradient-to-br from-background to-background/50">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">My Journey</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          
          <p className="text-foreground/80 text-base max-w-xl mx-auto">
            Key milestones in my journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {achievements.map((achievement) => (
                <CarouselItem key={achievement.id} className="md:basis-1/2 lg:basis-2/5">
                  <div className="p-2">
                    <Card className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {achievement.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="font-semibold text-base mb-1 gradient-text">
                          {achievement.title}
                        </h3>
                        
                        <p className="text-foreground/70 text-xs leading-relaxed">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="glass-card border-0 -left-12 hover:scale-110 transition-transform" />
            <CarouselNext className="glass-card border-0 -right-12 hover:scale-110 transition-transform" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};