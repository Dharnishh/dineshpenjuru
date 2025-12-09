import tableauLogo from "@/assets/tableau-logo.png";

export const SkillsSection = () => {
  const skills = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Power BI", level: 85, icon: "📊" },
    { name: "SQL", level: 80, icon: "🗃️" },
    { name: "Data Cleaning", level: 88, icon: "🧹" },
    { name: "Tableau", level: 75, icon: tableauLogo, isImage: true },
    { name: "ESP32", level: 70, icon: "🔧" },
    { name: "AI Tools", level: 82, icon: "🤖" },
    { name: "HTML/CSS/JS", level: 78, icon: "🌐" },
  ];

  return (
    <section id="skills-section" className="section-padding">
      <div className="container-width">
        <div className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Technical expertise built through continuous learning and hands-on projects
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 text-center hover-glow transition-all duration-300 space-y-3 sm:space-y-4"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl">
                  {skill.isImage ? (
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto object-contain" />
                  ) : (
                    skill.icon
                  )}
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-semibold text-sm sm:text-base">{skill.name}</h3>
                  <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-gradient-primary h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm text-foreground/60">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};