import workspaceTilted from "@/assets/workspace-tilted.jpg";

export const TechStackSection = () => {
  const techStack = [
    {
      name: "Python",
      description: "Data analysis, machine learning, and automation",
      icon: "🐍",
    },
    {
      name: "SQL", 
      description: "Database queries and data manipulation",
      icon: "🗃️",
    },
    {
      name: "Power BI",
      description: "Business intelligence and data visualization",
      icon: "📊",
    },
    {
      name: "Framer Motion",
      description: "Interactive animations and UI effects",
      icon: "🎭",
    },
    {
      name: "ESP32",
      description: "IoT development and microcontroller programming",
      icon: "🔧",
    },
    {
      name: "AI Tools",
      description: "Machine learning and artificial intelligence",
      icon: "🤖",
    },
    {
      name: "HTML/CSS/JS",
      description: "Frontend web development",
      icon: "🌐",
    },
    {
      name: "Data Cleaning",
      description: "Data preprocessing and quality assurance",
      icon: "🧹",
    },
  ];

  return (
    <section id="tech-stack" className="section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Tech Stack List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                My <span className="gradient-text">Tech Stack</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                I build with intention, Framer for fast, interactive web design. Figma 
                for clean interfaces, Notion and X for content. Each tool supports 
                how I think, design, and deliver.
              </p>
            </div>

            <div className="space-y-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 glass-card p-4 hover-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center text-2xl">
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                    <p className="text-foreground/60 text-sm">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tech Stack Image */}
          <div className="relative">
            <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={workspaceTilted}
                alt="Tech Stack Workspace"
                className="w-full rounded-2xl shadow-card hover-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};