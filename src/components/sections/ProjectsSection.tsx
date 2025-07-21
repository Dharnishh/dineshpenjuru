import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Power BI Sales Dashboard",
      description: "Interactive sales analytics dashboard with real-time data visualization, KPI tracking, and forecasting capabilities for business intelligence.",
      technologies: ["Power BI", "SQL", "DAX", "Excel"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Certificate Automation with Python & Google API",
      description: "Automated certificate generation system using Python, Google Sheets API, and email automation for streamlined certification processes.",
      technologies: ["Python", "Google API", "Pandas", "SMTP"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Industrial Robot Monitoring Device",
      description: "IoT-based monitoring system using ESP32 to track industrial robot performance, temperature, and maintenance schedules in real-time.",
      technologies: ["ESP32", "C++", "IoT", "Sensors"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "AI-Powered SaaS Platform for Local Shops",
      description: "Complete SaaS solution with inventory management, sales analytics, and AI-driven insights to help local businesses optimize operations.",
      technologies: ["Python", "AI/ML", "React", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              A showcase of my data analysis and development work
            </p>
          </div>

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

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

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