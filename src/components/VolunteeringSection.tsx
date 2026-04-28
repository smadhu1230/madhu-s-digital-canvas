import { Award, Crown, Users, Calendar, Star, Heart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const featuredVolunteering = [
  { id: 1, title: "IEEE Returning Mothers Conference 2025", image: rmc },
  { id: 2, title: "Design Team Co-Lead — Connecting the Dots 4.0", image: ctd },
  { id: 3, title: "Coordinator — SDGthon 2K26 (24-hour Hackathon)", image: sdgthon },
  { id: 4, title: "IEEEXtreme 19.0 Ambassador", image: xtreme },
  { id: 5, title: "IEEE Day 2025 Ambassador", image: ieeeday },
  { id: 6, title: "AI-Based Video Analytics Lecture by Dr. Supavadee Aramvith", image: aibased },
];

const volunteeringActivities = [
  { id: 2, role: "Coordinator", event: "INSPIRE 2.0 (IEEE SPAx)", period: "Aug 2025" },
  { id: 3, role: "Graphic Designer", event: "IEEE MOVE India", period: "2025" },
  { id: 4, role: "Publicity Ambassador", event: "IEEE YESIST12 2025", period: "2025" },
  { id: 5, role: "Coordinator", event: "SheLEADS STEM Initiative (500+ students)", period: "2025" },
  { id: 6, role: "Co-Lead, Design Team", event: "Connecting the Dots 4.0", period: "Sep – Oct 2025" },
  { id: 7, role: "Design Member", event: "IDEATHON & PITCHFEST", period: "2025" },
  { id: 8, role: "Coordinator", event: "Tech for Society : SDG Awareness and Innovation Challenge for Students", period: "October 30 & 31, 2025" },
  { id: 9, role: "Organiser Lead", event: "IEEE CASS TECHFEST Three Days Workshop on Mastering PCB - Advanced Design & Fabrication Techniques", period: "December 22 - 24, 2025" },
  { id: 10, role: "Volunteer", event: "IEEE Madras Section", period: "Jul 2025 – Present" },
  { id: 11, role: "Special Track Design Lead", event: "IEEE YESIST12 2026", period: "Dec 2025 – Present" },
  { id: 12, role: "Coordinator", event: "SDGthon 2K26 — 24-hour SDG Hackathon", period: "2026" },
];

const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
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

                <h4 className="text-lg font-display font-semibold text-gradient mb-2">
                  {role.role}
                </h4>
                <p className="text-foreground font-medium text-sm mb-1">{role.organization}</p>
                <p className="text-muted-foreground text-xs">{role.chapter}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Initiatives */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Star className="text-primary" size={24} />
            <h3 className="text-2xl font-display font-semibold">Featured Initiatives</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredVolunteering.map((item) => (
              <div
                key={item.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-glow hover:border-primary/50 transition-all"
              >
                
                {/* ✅ Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-2">
                    <Heart size={16} className="text-primary mt-1 shrink-0" />
                    <h4 className="font-display font-semibold leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="text-primary" size={24} />
            <h3 className="text-2xl font-display font-semibold">All Volunteering Activities</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            {volunteeringActivities.map((activity) => (
              <div key={activity.id} className="mb-6 p-4 border rounded-xl">
                <div className="flex items-center gap-2 text-xs text-secondary mb-1">
                  <Calendar size={12} />
                  {activity.period}
                </div>

                <h4 className="font-display font-semibold">
                  {activity.role}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {activity.event}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "80+", label: "Leadership Roles", icon: <Crown size={20} /> },
            { number: "200+", label: "Events Organised and Coordinated", icon: <Heart size={20} /> },
            { number: "50+", label: "Awards & Scholarships", icon: <Award size={20} /> },
            { number: "3000+", label: "Students Impacted", icon: <Sparkles size={20} /> },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card/50 border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                {stat.icon}
              </div>

              <div className="text-3xl font-display font-bold text-gradient mb-1">
                {stat.number}
              </div>

              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VolunteeringSection;
