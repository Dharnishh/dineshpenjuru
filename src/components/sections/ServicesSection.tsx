import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import workspaceTilted from "@/assets/workspace-tilted.jpg";

export const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      number: "1",
      title: "Data Cleaning & Preprocessing",
      description: "Transform raw data into clean, structured formats ready for analysis. I handle missing values, outliers, and data inconsistencies to ensure high-quality datasets.",
    },
    {
      number: "2", 
      title: "Data Visualization & Dashboarding",
      description: "Create compelling visual stories from your data using Power BI, Python libraries, and modern visualization techniques to make complex insights accessible.",
    },
    {
      number: "3",
      title: "Statistical Analysis & Modeling",
      description: "Apply statistical methods and machine learning algorithms to uncover patterns, trends, and predictive insights from your business data.",
    },
    {
      number: "4",
      title: "SQL & Database Management", 
      description: "Design efficient database queries, optimize data retrieval processes, and manage data warehouses for scalable analytics solutions.",
    },
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Services List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                What I Can Do{" "}
                <span className="gradient-text">For You</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                As a data analyst, I am a visual storyteller, crafting 
                experiences that connect deeply and spark creativity.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-glow cursor-pointer transition-all duration-300"
                  onClick={() => toggleService(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold gradient-text">
                        {service.number}.
                      </span>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    {expandedService === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-foreground/60" />
                    )}
                  </div>
                  
                  {expandedService === index && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tilted Image */}
          <div className="relative">
            <div className="transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <img
                src={workspaceTilted}
                alt="Data Analytics Workspace"
                className="w-full rounded-2xl shadow-card hover-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};