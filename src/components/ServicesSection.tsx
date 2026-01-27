import { Code, Palette, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly web interfaces using modern technologies like React, Tailwind CSS, and JavaScript with a strong focus on performance and accessibility.",
    icon: <Code size={32} />,
    features: ["React Applications", "Responsive Design", "Modern UI/UX", "Performance Optimization"],
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Creating visually stunning designs for digital and print media, including posters, social media creatives, banners, and presentation designs.",
    icon: <Palette size={32} />,
    features: ["Social Media Graphics", "Poster Design", "Presentation Design", "Brand Visuals"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and experiences that balance aesthetics with functionality, ensuring seamless user journeys.",
    icon: <Sparkles size={32} />,
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            What I Offer
          </p>
          <h2 className="section-title">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Combining technical expertise with creative vision to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-card border border-border rounded-2xl p-8 card-glow hover:border-primary/50 transition-all relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 relative">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 relative">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 relative">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
