import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Tek Pyramid",
    period: "Feb 2025 – Apr 2025",
    description:
      "Worked on responsive web applications using React, Firebase, HTML, CSS, and JavaScript. Handled frontend development, backend integration, and deployment processes.",
    skills: ["React", "Firebase", "HTML/CSS", "JavaScript"],
  },
  {
    id: 2,
    role: "IT Operations Intern",
    company: "Titan Company Limited",
    period: "Dec 2024",
    description:
      "Gained hands-on experience in IT operations, system support, and technical process assistance in a corporate environment.",
    skills: ["IT Operations", "System Support", "Technical Assistance"],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Askan Technologies",
    period: "May 2025 – Jun 2025",
    description:
      "Contributed to real-world frontend projects, building user interfaces with HTML, CSS, and JavaScript while following best practices.",
    skills: ["HTML", "CSS", "JavaScript", "UI Development"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            My Journey
          </p>
          <h2 className="section-title">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />

                {/* Content card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 card-glow">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={14} className="text-secondary" />
                      <span className="text-secondary text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className={`p-2 bg-primary/10 rounded-lg ${index % 2 === 0 ? "md:order-2" : ""}`}>
                        <Briefcase size={20} className="text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <p className={`text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
