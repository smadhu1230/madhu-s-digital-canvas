import { 
  Code, Database, Figma, GitBranch, Globe, 
  MessageSquare, Clock, Users, Lightbulb, RefreshCw 
} from "lucide-react";

const skills = {
  technical: [
    { name: "HTML5", icon: <Globe size={24} />, level: 90 },
    { name: "CSS3", icon: <Globe size={24} />, level: 85 },
    { name: "JavaScript", icon: <Code size={24} />, level: 80 },
    { name: "React", icon: <Code size={24} />, level: 75 },
    { name: "Tailwind CSS", icon: <Globe size={24} />, level: 85 },
    { name: "Java", icon: <Code size={24} />, level: 70 },
  ],
  tools: [
    { name: "Figma", icon: <Figma size={24} /> },
    { name: "Photoshop", icon: <Figma size={24} /> },
    { name: "Canva", icon: <Figma size={24} /> },
    { name: "Git & GitHub", icon: <GitBranch size={24} /> },
    { name: "VS Code", icon: <Code size={24} /> },
    { name: "MySQL", icon: <Database size={24} /> },
  ],
  soft: [
    { name: "Teamwork", icon: <Users size={20} /> },
    { name: "Problem Solving", icon: <Lightbulb size={20} /> },
    { name: "Communication", icon: <MessageSquare size={20} /> },
    { name: "Time Management", icon: <Clock size={20} /> },
    { name: "Adaptability", icon: <RefreshCw size={20} /> },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            My Expertise
          </p>
          <h2 className="section-title">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.technical.map((skill) => (
              <SkillCard key={skill.name} skill={skill} showLevel />
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold mb-8 text-center">Tools & Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.tools.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-display font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.soft.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 hover:border-primary transition-colors"
              >
                <span className="text-secondary">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  skill, 
  showLevel = false 
}: { 
  skill: { name: string; icon: React.ReactNode; level?: number }; 
  showLevel?: boolean;
}) => (
  <div className="bg-card border border-border rounded-xl p-6 text-center card-glow group hover:border-primary/50 transition-all">
    <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
      {skill.icon}
    </div>
    <p className="text-sm font-medium">{skill.name}</p>
    {showLevel && skill.level && (
      <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    )}
  </div>
);

export default SkillsSection;
