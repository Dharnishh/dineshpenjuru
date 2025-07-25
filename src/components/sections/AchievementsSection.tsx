import { useRef } from "react";
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
    title: "CMR-Hyd Project Expo",
    points: [
      "Secured 3rd Prize at CMR Hackfest 1.0, Hyderabad.",
      "Participated in a national-level project expo with a tech solution.",
      "Presented a robotic system for inspection and monitoring.",
      "Praised for innovation, execution, and real-world impact.",
      "Stood out among top teams from across India."
    ],
    image: "/lovable-uploads/8c988a89-661e-42d2-8752-50f9791ea9d2.png"
  },
  {
    id: 2,
    title: "VIT-AP Innovation Expo",
    points: [
      "Won 2nd Prize at VIT-AP National Innovation Expo.",
      "Presented a smart industrial monitoring robot project.",
      "Recognized for creativity, problem-solving, and functionality.",
      "Gained appreciation from jury for technical innovation.",
      "Among top performers in a highly competitive event."
    ],
    image: "/lovable-uploads/8cfb313b-dc1a-4a83-ba80-c0138306e261.png"
  },
  {
    id: 3,
    title: "ICIAET-2025 Journal Paper",
    points: [
      "Presented our research paper at ICIAET 2025, a national-level conference.",
      "Topic focused on innovation in core ECE engineering technologies.",
      "Our work was appreciated for its originality and technical depth.",
      "Received certificates from the expert jury panel during the event.",
      "The paper was successfully published in a recognized journal, marking our academic contribution."
    ],
    image: "/lovable-uploads/205c0c9f-354d-4d0d-bf65-6716efb705ad.png"
  },
  {
    id: 4,
    title: "CBIT-Patel Project Expo",
    points: [
      "Achieved 3rd Prize at CBIT-Patel State-level Expo.",
      "Demonstrated a compact robotic monitoring solution.",
      "The project is admired for its design and real-world application.",
      "Won for simplicity, scalability, and innovation.",
      "Impressed judges in a competitive engineering event."
    ],
    image: "/lovable-uploads/5d34dce2-e50c-4f44-89fa-b5e2c980650d.png"
  }
];

export const AchievementsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="section-padding">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white">My Journey</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          <span className="gradient-text">ACHIEVEMENTS</span>
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <Carousel
          plugins={[plugin.current] as any}
          className="w-full"
        >
          <CarouselContent>
            {achievements.map((achievement) => (
              <CarouselItem key={achievement.id} className="basis-full">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 min-h-[500px]">
                  {/* Decorative dots pattern */}
                  <div className="absolute top-4 right-4 grid grid-cols-6 gap-1 opacity-30">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 h-full items-center">
                    {/* Left side - Content */}
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {achievement.title}
                      </h3>
                      
                      <div className="space-y-3">
                        {achievement.points.map((point, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></div>
                            <p className="text-white text-base md:text-lg leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="relative">
                      <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="glass-card border-0 -left-12 hover:scale-110 transition-transform text-white" />
          <CarouselNext className="glass-card border-0 -right-12 hover:scale-110 transition-transform text-white" />
        </Carousel>
      </div>
    </section>
  );
};