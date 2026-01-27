import { Award, Crown, Users, Calendar, Star, Heart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const scholarships = [
  {
    id: 1,
    title: "Richard E. Merwin Scholarship",
    amount: "USD 1000",
    organization: "IEEE Computer Society",
    icon: <Award size={24} />,
  },
  {
    id: 2,
    title: "ISF Best Student Volunteer Award 2025",
    amount: "",
    organization: "IETE Students Forum",
    icon: <Star size={24} />,
  },
];

const leadershipRoles = [
  {
    id: 1,
    role: "Chairperson",
    organization: "IEEE Electron Devices Society",
    chapter: "Panimalar SB Chapter",
    period: "Dec 2025 – Present",
    current: true,
  },
  {
    id: 2,
    role: "Chairperson",
    organization: "IEEE Education Society",
    chapter: "Panimalar SB Chapter",
    period: "Mar 2025 – Present",
    current: true,
  },
  {
    id: 3,
    role: "Active IEEE Volunteer",
    organization: "IEEE",
    chapter: "",
    period: "Ongoing",
    current: true,
  },
];

const volunteeringActivities = [
  {
    id: 1,
    role: "Special Track – Design Team Lead",
    event: "IEEE YESIST12",
    period: "Dec 2025 – Present",
    year: 2026,
  },
  {
    id: 2,
    role: "Volunteer",
    event: "IEEE Madras Section",
    period: "Jul 2025 – Present",
    year: 2025,
  },
  {
    id: 3,
    role: "Graphic Designer",
    event: "IEEE WIE Madras Section AG",
    period: "Mar 2025 – Present",
    year: 2025,
  },
  {
    id: 4,
    role: "Co-Lead, Design Team",
    event: "Connecting the Dots 4.0",
    period: "Sep 2025 – Oct 2025",
    year: 2025,
  },
  {
    id: 5,
    role: "Design Member",
    event: "IDEATHON & PITCHFEST Track 2025",
    period: "2025",
    year: 2025,
  },
  {
    id: 6,
    role: "Volunteer",
    event: "IEEE Returning Mothers Conference 2025",
    period: "Jun 2025 – Nov 2025",
    year: 2025,
  },
  {
    id: 7,
    role: "IEEE Day Ambassador",
    event: "Panimalar Engineering College",
    period: "Jul 2025 – Oct 2025",
    year: 2025,
  },
  {
    id: 8,
    role: "IEEEXTREME 19.0 Ambassador",
    event: "Panimalar Engineering College",
    period: "Jun 2025 – Oct 2025",
    year: 2025,
  },
  {
    id: 9,
    role: "Volunteer",
    event: "Techdivathon – 24 Hours Hackathon",
    period: "2025",
    year: 2025,
  },
  {
    id: 10,
    role: "IETE Volunteer",
    event: "IETE Students Forum",
    period: "Ongoing",
    year: 2025,
  },
];

const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Making an Impact
          </p>
          <h2 className="section-title">
            Volunteering & <span className="text-primary">Leadership</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Dedicated to community service, technical education, and empowering the next generation through IEEE and beyond.
          </p>
        </div>

        {/* Scholarships & Awards */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">Scholarships & Awards</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {scholarships.map((award) => (
              <div
                key={award.id}
                className="group relative bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-6 card-glow hover:border-primary/50 transition-all overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-semibold">{award.title}</h4>
                      {award.amount && (
                        <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                          {award.amount}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <Sparkles size={14} className="text-secondary" />
                      {award.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IEEE Leadership Roles */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Crown className="text-secondary" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">IEEE Leadership Roles</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadershipRoles.map((role) => (
              <div
                key={role.id}
                className="group relative bg-card border border-border rounded-2xl p-6 card-glow hover:border-secondary/50 transition-all text-center"
              >
                {role.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground animate-pulse-glow">
                      Active
                    </Badge>
                  </div>
                )}
                
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Crown size={28} className="text-secondary" />
                </div>
                
                <h4 className="text-xl font-semibold text-gradient mb-2">{role.role}</h4>
                <p className="text-foreground font-medium text-sm mb-1">{role.organization}</p>
                {role.chapter && (
                  <p className="text-muted-foreground text-xs mb-3">{role.chapter}</p>
                )}
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>{role.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IEEE & Technical Volunteering */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">IEEE & Technical Volunteering</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30 transform md:-translate-x-1/2" />
              
              {volunteeringActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`relative mb-8 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background transform -translate-x-1/2 z-10 animate-pulse-glow" />
                  
                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/30 transition-all hover:bg-card">
                      <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Heart size={14} className="text-primary" />
                        <span className="text-xs text-secondary font-medium">{activity.period}</span>
                      </div>
                      
                      <h4 className={`font-semibold text-foreground mb-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {activity.role}
                      </h4>
                      <p className={`text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {activity.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "2", label: "Leadership Roles", icon: <Crown size={20} /> },
            { number: "10+", label: "Volunteer Activities", icon: <Heart size={20} /> },
            { number: "2", label: "Awards & Scholarships", icon: <Award size={20} /> },
            { number: "3+", label: "Design Contributions", icon: <Sparkles size={20} /> },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card/50 border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl font-display font-bold text-gradient mb-1">{stat.number}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;
