import { Trophy } from "lucide-react";
import projectexpo from "@/assets/projectexpo.jpg";
import rem from "@/assets/rem.jpg";
import iete from "@/assets/iete.jpeg";
import emerging from "@/assets/emerging.jpg";
import beststudent from "@/assets/beststudent.jpg";

const achievements = [
  {
    id: 1,
    title: "Best Project Award",
    event: "Circuit Lab Project Expo 2K24",
    description: "Developed Automatic Street Light System.",
    image: projectexpo,
  },
  {
    id: 2,
    title: "Richard E. Merwin Scholarship",
    event: "IEEE Computer Society",
    description: "Awarded USD 1000 for academic excellence and IEEE volunteering.",
    image: rem,
  },
  {
    id: 3,
    title: "ISF Best Student Volunteer Award 2025",
    event: "IETE Students Forum",
    description: "Recognized as the best student volunteer of 2025.",
    image: iete,
  },
  {
    id: 4,
    title: "Emerging Student Volunteer Award 2025",
    event: "IEEE",
    description: "Acknowledgment for impactful early-career volunteering.",
    image: emerging,
  },
  {
    id: 5,
    title: "Best Student Volunteer Award",
    event: "2024 & 2025",
    description: "Awarded two consecutive years for outstanding contributions.",
    image: beststudent, // ✅ FIXED
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Recognitions
          </p>

          {/* ✅ SAME FONT */}
          <h2 className="section-title">
            <span className="text-primary">Achievements</span> & Awards
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-glow hover:border-primary/50 transition-all"
            >
              
              {/* ✅ REAL IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Trophy size={22} />
                  </div>

                  <div>
                    {/* ✅ SAME FONT AS PROJECTS */}
                    <h3 className="text-lg font-display font-semibold leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-secondary text-xs mt-1">
                      {item.event}
                    </p>

                    <p className="text-muted-foreground text-sm mt-2">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
