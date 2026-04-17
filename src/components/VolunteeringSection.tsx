import { Award, Crown, Users, Calendar, Star, Heart, Sparkles, ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const leadershipRoles = [
  {
    id: 1,
    role: "Chairperson",
    organization: "IEEE Electron Devices Society",
    chapter: "Panimalar SB Chapter",
    current: true,
  },
  {
    id: 2,
    role: "Chairperson",
    organization: "IEEE Education Society",
    chapter: "Panimalar SB Chapter",
    current: true,
  },
  {
    id: 3,
    role: "Vice Chair",
    organization: "IEEE Electronics Packaging Society",
    chapter: "Panimalar SB Chapter",
    current: true,
  },
  {
    id: 4,
    role: "Treasurer",
    organization: "IEEE Society on Social Implications of Technology",
    chapter: "Panimalar SB Chapter",
    current: true,
  },
];

// Highlighted volunteering with image placeholders
const featuredVolunteering = [
  { id: 1, title: "IEEE Returning Mothers Conference 2025" },
  { id: 2, title: "Design Team Co-Lead — Connecting the Dots 4.0" },
  { id: 3, title: "Coordinator — SDGthon 2K26 (24-hour Hackathon)" },
  { id: 4, title: "IEEEXtreme 19.0 Ambassador" },
  { id: 5, title: "IEEE Day 2025 Ambassador" },
  { id: 6, title: "AI-Based Video Analytics Lecture by Dr. Supavadee Aramvith" },
];

const volunteeringActivities = [
  
  { id: 2, role: "Volunteer", event: "INSPIRE 2.0 (IEEE SPAx)", period: "Aug 2025" },
  { id: 3, role: "Graphic Designer", event: "IEEE MOVE India", period: "2025" },
  { id: 4, role: "Publicity Ambassador", event: "IEEE YESIST12 2025", period: "2025" },
  { id: 5, role: "Coordinator", event: "SheLEADS STEM Initiative (500+ students)", period: "2025" },
  { id: 6, role: "Co-Lead, Design Team", event: "Connecting the Dots 4.0", period: "Sep – Oct 2025" },
  { id: 7, role: "Design Member", event: "IDEATHON & PITCHFEST", period: "2025" },
  { id: 8, role: "IEEE Day Ambassador", event: "Panimalar Engineering College", period: "Jul – Oct 2025" },
  { id: 9, role: "IEEEXTREME 19.0 Ambassador", event: "Panimalar Engineering College", period: "Jun – Oct 2025" },
  { id: 10, role: "Volunteer", event: "IEEE Madras Section", period: "Jul 2025 – Present" },
  { id: 11, role: "Special Track Design Lead", event: "IEEE YESIST12 2026", period: "Dec 2025 – Present" },
  { id: 12, role: "Coordinator", event: "SDGthon 2K26 — 24-hour SDG Hackathon", period: "2026" },
  { id: 13, role: "Volunteer", event: "AI-Based Video Analytics Lecture (Dr. Supavadee Aramvith, Chair IEEE Thailand)", period: "2025" },
];

const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Making an Impact
          </p>
          <h2 className="section-title">
            Leadership & <span className="text-primary">Volunteering</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Demonstrating leadership and community impact through IEEE roles and initiatives.
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Crown className="text-secondary" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">IEEE Leadership Roles</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Crown size={24} className="text-secondary" />
                </div>

                <h4 className="text-lg font-semibold text-gradient mb-2">{role.role}</h4>
                <p className="text-foreground font-medium text-sm mb-1">{role.organization}</p>
                <p className="text-muted-foreground text-xs">{role.chapter}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Volunteering with Image Placeholders */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Star className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">Featured Initiatives</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredVolunteering.map((item) => (
              <div
                key={item.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-glow hover:border-primary/50 transition-all"
              >
                <div className="relative h-44 bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/15" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/60">
                    <ImageIcon size={32} className="mb-1" />
                    <span className="text-xs uppercase tracking-wider">Event Image</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-2">
                    <Heart size={16} className="text-primary mt-1 shrink-0" />
                    <h4 className="font-semibold leading-snug">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Volunteering Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">All Volunteering Activities</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30 transform md:-translate-x-1/2" />

              {volunteeringActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`relative mb-8 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background transform -translate-x-1/2 z-10 animate-pulse-glow" />

                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/30 transition-all hover:bg-card">
                      <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Calendar size={12} className="text-secondary" />
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
            { number: "4", label: "Leadership Roles", icon: <Crown size={20} /> },
            { number: "13+", label: "Volunteer Activities", icon: <Heart size={20} /> },
            { number: "5", label: "Awards & Scholarships", icon: <Award size={20} /> },
            { number: "500+", label: "Students Impacted", icon: <Sparkles size={20} /> },
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
