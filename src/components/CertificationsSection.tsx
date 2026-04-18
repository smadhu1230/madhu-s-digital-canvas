import { Award } from "lucide-react";
import hdca from "@/assets/hdca.jpg";
import java from "@/assets/java developer.jpg";
import tcsion from "@/assets/tcsion.jpg";
import Oracle from "@/assets/Oracle.jpg";
import googlecloud from "@/assets/googlecloud.jpg";

const certifications = [
  {
    id: 1,
    title: "Honours Diploma in Computer Application (HDCA)",
    issuer: "Computer Software College",
    image: hdca,
    description:
      "Foundational knowledge in programming, databases, and office tools. Built a Bank Management System (C) and Flappy Bird Game (C++).",
  },
  {
    id: 2,
    title: "Java Developer Certification",
    issuer: "Infosys Springboard",
    image: java,
    description:
      "Strong foundation in Java and Object-Oriented Programming concepts.",
  },
  {
    id: 3,
    title: "TCS iON Career Edge",
    issuer: "Tata Consultancy Services",
    image: tcsion,
    description:
      "Enhanced employability skills, communication, and interview preparation.",
  },
  {
    id: 4,
    title: "Oracle Cloud Generative AI Professional",
    issuer: "Oracle",
    image: Oracle,
    description:
      "Learned AI fundamentals and cloud concepts for generative AI applications.",
  },
  {
    id: 5,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    image: googlecloud,
    description:
      "Explored generative AI concepts, models, and real-world applications.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Continuous Learning
          </p>
          <h2 className="text-3xl font-bold">
            Certifications & <span className="text-primary">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Completed certifications in software development, AI, and emerging technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-secondary text-xs mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
