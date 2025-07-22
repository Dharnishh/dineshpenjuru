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
    title: "Innovation & Robotics Project Expo",
    description: "Showcased innovative robotics project at the university expo, demonstrating advanced automation and AI integration.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    tags: ["#Innovation", "#Robotics", "#ProjectExpo"]
  },
  {
    id: 2,
    title: "ICIAET Research Presentation",
    description: "Presented research work at International Conference on Innovative Applications of Engineering & Technology, contributing to academic discourse.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    tags: ["#ICIAET", "#Research", "#Teamwork"]
  },
  {
    id: 3,
    title: "Technical Achievement",
    description: "Successfully completed advanced technical project demonstrating proficiency in data analysis and machine learning applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    tags: ["#Technology", "#DataScience", "#ML"]
  }
];

export const AchievementsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="section-padding bg-gradient-to-br from-background to-background/50">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">My Journey</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Highlighting significant milestones and contributions in my academic and professional journey
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
                <CarouselItem key={achievement.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-48 object-cover filter blur-[0.5px] group-hover:blur-none transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <CardContent className="p-6">
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
                        
                        <h3 className="font-semibold text-lg mb-2 gradient-text">
                          {achievement.title}
                        </h3>
                        
                        <p className="text-foreground/70 text-sm leading-relaxed">
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