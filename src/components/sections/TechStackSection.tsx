import workspaceTilted from "@/assets/workspace-tilted.jpg";
// Import Tableau logo from assets (assuming it exists, similar to SkillsSection)
import tableauLogo from "@/assets/tableau-logo.png"; // Assuming this path

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
      name: "Tableau", // Changed from "Framer Motion"
      description: "Proficient in Tableau for data visualization and analysis", // New subtitle
      icon: tableauLogo, // Use the imported image
      isImage: true, // Add this property to render as an image
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Tech Stack List */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                My <span className="gradient-text">Tech Stack</span>
              </h2>
              <p className="text-foreground/70 text-base sm:text-lg">
                I build with intention, Framer for fast, interactive web design. Figma 
                for clean interfaces, Notion and X for content. Each tool supports 
                how I think, design, and deliver.
              </p>
            </div>

            <div className="space-y-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 glass-card p-3 sm:p-4 hover-glow transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {/* Conditional rendering for image vs emoji */}
                    {tech.isImage ? (
                      <img src={tech.icon as string} alt={tech.name} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" />
                    ) : (
                      tech.icon
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg">{tech.name}</h3>
                    <p className="text-foreground/60 text-xs sm:text-sm leading-tight">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tech Stack Image */}
          <div className="relative order-first lg:order-last">
            <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={workspaceTilted}
                alt="Tech Stack Workspace"
                className="w-full max-w-md lg:max-w-none mx-auto rounded-2xl shadow-card hover-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
