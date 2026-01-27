import { GraduationCap, Music, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Get to know me
          </p>
          <h2 className="section-title">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm <span className="text-foreground font-medium">Madhumitha Saravanan</span>, 
              an Electronics and Communication Engineering undergraduate at 
              <span className="text-primary"> Panimalar Engineering College, Chennai</span>, 
              with an expected graduation in <span className="text-secondary">2027</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech is fueled by a deep passion for emerging technologies and 
              a creative eye for design. I thrive in collaborative environments where I can 
              combine my technical knowledge with artistic vision to build meaningful digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding and design, I believe in continuous learning, adaptability, and taking 
              initiative. When I'm not working on projects, you'll find me exploring new music 
              or discovering the latest trends in technology.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <QuickFact icon={<GraduationCap size={20} />} label="ECE Student" value="Class of 2027" />
              <QuickFact icon={<Sparkles size={20} />} label="Focus" value="Frontend & Design" />
              <QuickFact icon={<Music size={20} />} label="Hobby" value="Music Enthusiast" />
              <QuickFact icon={<Sparkles size={20} />} label="Location" value="Chennai, India" />
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold mb-8">Education</h3>
            
            <div className="relative border-l-2 border-muted pl-8 space-y-10">
              <TimelineItem
                year="2023 - 2027"
                title="B.E. Electronics and Communication Engineering"
                institution="Panimalar Engineering College, Chennai"
                description="Pursuing a comprehensive engineering degree with focus on electronics, communication systems, and emerging technologies."
              />
              <TimelineItem
                year="2021 - 2023"
                title="Higher Secondary Education"
                institution="Chennai, Tamil Nadu"
                description="Completed HSC with strong foundation in Mathematics and Science."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickFact = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-card rounded-lg p-4 border border-border card-glow">
    <div className="flex items-center gap-3">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  </div>
);

const TimelineItem = ({
  year,
  title,
  institution,
  description,
}: {
  year: string;
  title: string;
  institution: string;
  description: string;
}) => (
  <div className="relative">
    {/* Dot */}
    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
    
    <div className="bg-card rounded-lg p-6 border border-border card-glow">
      <span className="text-secondary text-sm font-medium">{year}</span>
      <h4 className="text-lg font-semibold mt-1">{title}</h4>
      <p className="text-primary text-sm mt-1">{institution}</p>
      <p className="text-muted-foreground text-sm mt-3">{description}</p>
    </div>
  </div>
);

export default AboutSection;
