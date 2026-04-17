import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Internship Trainee",
    company: "Ashok Leyland",
    description: "Gained exposure to industrial workflows and technical processes.",
  },
  {
    id: 2,
    role: "Developer",
    company: "Infomatronics Project Services",
    description: "Developed a Movie Ticket Booking System with dynamic functionality.",
  },
  {
    id: 3,
    role: "IT Operations Intern",
    company: "Titan Company Limited",
    description: "Assisted in IT operations and system support.",
  },
  {
    id: 4,
    role: "UI/UX Intern",
    company: "CODTECH IT SOLUTIONS",
    description: "Designed user-friendly interfaces with strong focus on usability.",
  },
  {
    id: 5,
    role: "Web Development Intern",
    company: "CodeBind Technologies",
    description: "Built responsive web pages using core web technologies.",
  },
  {
    id: 6,
    role: "Web Developer Intern",
    company: "Codec Technologies India",
    description: "Implemented frontend features for web applications.",
  },
  {
    id: 7,
    role: "Web Developer Intern",
    company: "Tek Pyramid",
    description: "Developed applications using React, Firebase, and Cloudinary.",
  },
  {
    id: 8,
    role: "Frontend Developer Intern",
    company: "Askan Technologies",
    description: "Built responsive and optimized user interfaces.",
  },
  {
    id: 9,
    role: "IoT Training Program",
    company: "Acmegrade (IIT Bombay Mood Indigo)",
    description:
      "Hands-on internship focused on IoT — developed smart automation systems and a face recognition robot.",
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
            Internships & <span className="text-primary">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Practical experience across web development, UI/UX design, IoT, and IT operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-10 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />

                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 card-glow">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className={`p-2 bg-primary/10 rounded-lg ${index % 2 === 0 ? "md:order-2" : ""}`}>
                        <Briefcase size={20} className="text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <p className={`text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>
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
