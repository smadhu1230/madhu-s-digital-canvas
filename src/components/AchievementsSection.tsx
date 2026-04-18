import { Trophy, ImageIcon } from "lucide-react";
import projectexpo from "@/assets/projectexpo.jpg";
import rem from "@/assets/rem.jpg";
import iete from "@/assets/iete.jpg";
import emerging from "@/assets/emerging.jpg";
import beststudent from "@/assets/volunteeraward.jpg";

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
    image: beststudent,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Recognitions
          </p>
          <h2 className="section-title">
            <span className="text-primary">Achievements</span> & Awards
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-glow hover:border-primary/50 transition-all"
            >
              {/* Image placeholder */}
              <div className="relative h-40 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/15" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/60">
                  <ImageIcon size={32} className="mb-1" />
                  <span className="text-xs uppercase tracking-wider">Award Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-snug">{item.title}</h3>
                    <p className="text-secondary text-xs mt-1">{item.event}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
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
