import { Award, Crown, Users, Calendar, Star, Heart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ✅ Import Images
import rmc from "@/assets/rmc.jpg";
import ctd from "@/assets/ctd.jpg";
import sdgthon from "@/assets/sdgthon.jpg";
import xtreme from "@/assets/xtreme.png";
import ieeeday from "@/assets/ieeeday.jpg";
import aibased from "@/assets/ai-based.jpg";

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

// ✅ Updated with Images
const featuredVolunteering = [
  { id: 1, title: "IEEE Returning Mothers Conference 2025", image: rmc },
  { id: 2, title: "Design Team Co-Lead — Connecting the Dots 4.0", image: ctd },
  { id: 3, title: "Coordinator — SDGthon 2K26 (24-hour Hackathon)", image: sdgthon },
  { id: 4, title: "IEEEXtreme 19.0 Ambassador", image: xtreme },
  { id: 5, title: "IEEE Day 2025 Ambassador", image: ieeeday },
  { id: 6, title: "AI-Based Video Analytics Lecture by Dr. Supavadee Aramvith", image: aibased },
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
  { id: 13, role: "Volunteer", event: "AI-Based Video Analytics Lecture", period: "2025" },
];

const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="py-24 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">

        {/* Header */}
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
            <Crown className="text-secondary" size={24} />
            <h3 className="text-2xl font-semibold">IEEE Leadership Roles</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {leadershipRoles.map((role) => (
              <div key={role.id} className="bg-card border rounded-2xl p-6 text-center">
                {role.current && <Badge className="mb-2">Active</Badge>}
                <h4 className="font-semibold">{role.role}</h4>
                <p className="text-sm">{role.organization}</p>
                <p className="text-xs text-muted-foreground">{role.chapter}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Volunteering with Images */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Star className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Featured Initiatives</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredVolunteering.map((item) => (
              <div key={item.id} className="group bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition">

                {/* ✅ Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-5 flex items-start gap-2">
                  <Heart size={16} className="text-primary mt-1" />
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">All Volunteering Activities</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            {volunteeringActivities.map((activity) => (
              <div key={activity.id} className="mb-6 p-4 border rounded-xl">
                <div className="flex items-center gap-2 text-xs text-secondary mb-1">
                  <Calendar size={12} />
                  {activity.period}
                </div>
                <h4 className="font-semibold">{activity.role}</h4>
                <p className="text-sm text-muted-foreground">{activity.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "4", label: "Leadership Roles" },
            { number: "13+", label: "Volunteer Activities" },
            { number: "5", label: "Awards" },
            { number: "500+", label: "Students Impacted" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 border rounded-xl">
              <div className="text-2xl font-bold">{stat.number}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VolunteeringSection;
