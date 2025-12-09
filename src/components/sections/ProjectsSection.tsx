import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "📈 Power BI Dashboard Project",
      description:
        "A clean and powerful BI dashboard showcasing regional sales, KPIs, trends, and performance insights. Built for business impact and professional reporting.",
      technologies: ["Power BI", "Power Query", "DAX", "Excel"],
      githubLink: "https://github.com/Dharnishh/Global-Energy-Trends-Analysis", 
    },
    {
      title: "🏏 IPL Data Analysis Project",
      description:
        "A data-driven deep dive into IPL history – revealing winning patterns, player performance, and game-changing stats. Perfect for sports fans and analytics lovers!",
      technologies: ["Python", "Excel", "Pivot Tables", "Vlookup"],
      githubLink: "https://github.com/Dharnishh/ipl_data_analysis",
    },
    {
      title: "🧾 Automated Certificate Generator",
      description:
        "A powerful automation tool that takes Google Form responses and instantly generates personalized certificates – streamlining event management like never before.",
      technologies: ["Python", "Google Sheets API", "Google Slides API", "Gmail API"],
      githubLink: "#",
    },
    {
      title: "🤖 Virtual Assistant",
      description:
        "A smart robot built using Python and hardware integration to perform real-time tasks via voice commands. From answering queries to moving across rooms, JarvisBot is an AI-powered mini robot designed for basic home assistance and interactive automation.",
      technologies: ["Python", "AI/ML", "SpeechRecognition", "ESP/Arduino", "pyttsx3"],
      githubLink: "https://github.com/Dharnishh/Virtual-Assistant",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="space-y-8 lg:space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              🌐 Projects That <span className="gradient-text">Define Me</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              🌟 These projects reflect my passion to innovate, analyse, and build solutions that make a difference.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 hover-glow transition-all duration-300 space-y-4 sm:space-y-6"
              >
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="pt-3 sm:pt-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Browse All Projects Button */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Browse All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
