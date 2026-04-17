import { ExternalLink } from "lucide-react";

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
            Practice & Problem Solving
          </p>
          <h2 className="section-title">
            Coding <span className="text-primary">Profiles</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group card-glow"
            >
              <div>
                <p className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {profile.name}
                </p>
                <p className="text-muted-foreground text-sm">{profile.handle}</p>
              </div>
              <ExternalLink
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
