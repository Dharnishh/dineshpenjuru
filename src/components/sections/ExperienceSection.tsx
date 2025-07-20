export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Native Soft Tech",
      role: "Python Developer Intern",
      duration: "Jun 2024 - Aug 2024",
      responsibilities: [
        "Developed automated data processing scripts using Python and pandas",
        "Built web scraping tools for market research and data collection",
        "Collaborated with senior developers on machine learning projects"
      ]
    },
    {
      company: "Edunet Foundation", 
      role: "Cybersecurity Intern",
      duration: "Mar 2024 - May 2024",
      responsibilities: [
        "Conducted security assessments and vulnerability testing",
        "Analyzed network traffic and identified potential security threats",
        "Created documentation for security protocols and best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Building expertise through hands-on internships and real-world projects
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 hover-glow transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">{exp.company}</h3>
                    <h4 className="text-xl font-semibold text-foreground/90">{exp.role}</h4>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-foreground/80 leading-relaxed">
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