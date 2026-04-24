import { Rocket } from "lucide-react";
import oneyes from "@/assets/oneyes.jpg";
import hackatronics from "@/assets/hackatronics.jpg";

const hackathons = [
  {
    id: 1,
    title: "ONEYES Hackathon 2026",
    image: oneyes,
    description: "Built innovative solutions for startup-focused challenges.",
  },
  {
    id: 2,
    title: "Hackatronics-2K25",
    image: hackatronics,
    description: "Participated in electronics and software integration challenges.",
  },
];

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-glow hover:border-primary/50 transition-all"
            >

              {/* ✅ REAL IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={hack.image}
                  alt={hack.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3">

                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary shrink-0">
                    <Rocket size={22} />
                  </div>

                  <div>
                    {/* ✅ SAME FONT */}
                    <h3 className="text-lg font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                      {hack.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {hack.description}
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

export default HackathonsSection;
