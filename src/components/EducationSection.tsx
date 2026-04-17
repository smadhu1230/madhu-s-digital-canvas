import { GraduationCap, ExternalLink } from "lucide-react";

const educationItems = [
  {
    id: 1,
    period: "2023 – 2027",
    title: "B.E. Electronics and Communication Engineering",
    institution: "Panimalar Engineering College, Chennai",
  },
  {
    id: 2,
    period: "2021 – 2023",
    title: "Higher Secondary Education",
    institution: "Chennai, Tamil Nadu",
  },
];

const codingProfiles = [
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/12282madhu",
    handle: "@12282madhu",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/o9F2OPfHYH/",
    handle: "@o9F2OPfHYH",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Academic Background
          </p>
          <h2 className="section-title">
            <span className="text-primary">Education</span> & Profiles
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education timeline */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={26} />
              Education
            </h3>
            <div className="relative border-l-2 border-muted pl-8 space-y-8">
              {educationItems.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="bg-card rounded-lg p-6 border border-border card-glow">
                    <span className="text-secondary text-sm font-medium">{item.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-primary text-sm mt-1">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coding profiles */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <ExternalLink className="text-secondary" size={24} />
              Coding Profiles
            </h3>
            <div className="space-y-4">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {profile.name}
                    </p>
                    <p className="text-muted-foreground text-sm">{profile.handle}</p>
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
