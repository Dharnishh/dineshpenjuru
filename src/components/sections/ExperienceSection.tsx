export const ExperienceSection = () => {
  const experiences = [
    {
      company: "SmartInternz | Virtual",
      role: " Data Analyst Power BI",
      duration: "May 2025 - Jul 2025",
      responsibilities: [
        "Analysed real-world datasets and built interactive dashboards using Power BI.",
        "Applied data cleaning, transformation, and DAX for actionable business insights.",
        "Delivered a capstone project simulating real-time business intelligence reporting."
      ]
    },
    {
      company: "Mastervance | Virtual",
      role: " User Research Intern",
      duration: "Feb 2025 - Mar 2025",
      responsibilities: [
        "Analysed survey data to identify key competitive benchmarks and industry trends, presenting findings in a comprehensive report.",
        "Delivered actionable insights and recommendations that influenced a 15% improvement in user satisfaction scores during subsequent product testing."
      ]
    },
    {
      company: "Edunet Foundation", 
      role: "Cybersecurity Intern",
      duration: "Mar 2024 - May 2024",
      responsibilities: [
        "Conducted security assessments and vulnerability testing",
        "Analysed network traffic and identified potential security threats",
        "Created documentation for security protocols and best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Building expertise through hands-on internships and real-world projects
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 lg:p-8 hover-glow transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 lg:mb-6 gap-3 sm:gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">{exp.company}</h3>
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground/90">{exp.role}</h4>
                  </div>
                  <div className="sm:mt-0 sm:flex-shrink-0">
                    <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                      <span className="text-primary mt-1 sm:mt-1.5 flex-shrink-0">•</span>
                      <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
