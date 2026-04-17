import { Rocket, ImageIcon, Calendar } from "lucide-react";

const hackathons = [
  {
    id: 1,
    title: "ONEYES Hackathon 2026",
    description: "Built innovative solutions for startup-focused challenges.",
  },
  {
    id: 2,
    title: "Hackatronics-2K25",
    description: "Participated in electronics and software integration challenges.",
  },
];

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Innovation in Action
          </p>
          <h2 className="section-title">
            <span className="text-primary">Hackathons</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Actively participating in hackathons focused on innovation and real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-glow hover:border-primary/50 transition-all"
            >
              {/* Image placeholder */}
              <div className="relative h-44 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/60">
                  <ImageIcon size={36} className="mb-1" />
                  <span className="text-xs uppercase tracking-wider">Hackathon Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary shrink-0">
                    <Rocket size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{hack.title}</h3>
                    <p className="text-muted-foreground text-sm">{hack.description}</p>
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

export default HackathonsSection;
