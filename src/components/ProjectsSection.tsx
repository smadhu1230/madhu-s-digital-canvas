import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Live Music Web Application",
    description:
      "A full-featured music streaming platform with secure user authentication, media uploads via Cloudinary, and admin content management capabilities.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Tailwind CSS", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Movie Ticket Booking System",
    description:
      "An interactive web application allowing users to browse movies, select showtimes, choose seats, and complete ticket bookings seamlessly.",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium mb-2 tracking-wider uppercase text-sm">
            Featured Work
          </p>
          <h2 className="section-title">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of projects that demonstrate my skills in frontend development and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="group bg-card border border-border rounded-2xl overflow-hidden card-glow">
    {/* Project Image */}
    <div className="relative h-48 bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-display font-bold text-muted-foreground/30">
          {project.title.charAt(0)}
        </span>
      </div>
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <Button size="sm" variant="outline" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={16} className="mr-2" />
            Code
          </a>
        </Button>
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6">
      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-muted rounded-full text-secondary font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsSection;
