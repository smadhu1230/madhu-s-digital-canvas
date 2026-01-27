import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border-2 border-secondary/30 animate-spin-slow" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-secondary animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full border border-primary/20 animate-float" />
      <div className="absolute top-1/2 left-1/6 w-4 h-4 rounded-full bg-primary/60 animate-pulse-glow animation-delay-400" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <p className="text-secondary font-medium mb-4 tracking-wider uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 leading-tight">
                Hi,
                <br />
                I'm <span className="text-primary">Madhumitha</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Frontend Developer | Graphic Designer | ECE Undergraduate
              </p>
            </div>

            <div className="animate-fade-up animation-delay-200">
              <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
                A passionate Electronics and Communication Engineering student with a love for emerging technologies, 
                creative design, and building user-friendly digital experiences. I blend technical skills with 
                artistic vision to create impactful web solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Button size="lg" className="group glow-primary">
                View Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="border-muted-foreground/30 hover:border-primary">
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>

            {/* Social sidebar for mobile */}
            <div className="flex justify-center lg:hidden gap-6 mt-8 animate-fade-up animation-delay-600">
              <SocialLink href="https://linkedin.com" label="LinkedIn" />
              <SocialLink href="https://github.com" label="GitHub" />
              <SocialLink href="https://leetcode.com" label="LeetCode" />
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-90" />
              
              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-muted">
                <img
                  src={profilePhoto}
                  alt="Madhumitha Saravanan"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-secondary/50 animate-float" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full border border-primary/50 animate-float animation-delay-200" />
            </div>
          </div>
        </div>

        {/* Vertical social links for desktop */}
        <div className="hidden lg:flex flex-col gap-4 fixed left-8 bottom-1/4 animate-fade-in animation-delay-600">
          <div className="w-px h-24 bg-border mx-auto" />
          <SocialLink href="https://linkedin.com" label="Li" />
          <SocialLink href="https://github.com" label="Gh" />
          <SocialLink href="https://hackerrank.com" label="Hr" />
          <SocialLink href="https://leetcode.com" label="Lc" />
          <div className="w-px h-24 bg-border mx-auto" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors"
  >
    {label}
  </a>
);

export default HeroSection;
