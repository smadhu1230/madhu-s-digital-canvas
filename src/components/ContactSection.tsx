import { Github, Linkedin, Mail, Send, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const socialLinks = [
  {
    name: "Email",
    icon: <Mail size={20} />,
    href: "mailto:12282madhu@gmail.com",
    label: "12282madhu@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/madhumitha-s-18f/",
    label: "linkedin.com/in/madhumitha-s-18f",
  },
  {
    name: "GitHub",
    icon: <Github size={20} />,
    href: "https://github.com/smadhu1230",
    label: "github.com/smadhu1230",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="section-title">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.name}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-display font-semibold mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full glow-primary" size="lg">
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
