import { ExternalLink, Github, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Live Music Web Application",
    description:
      "Music streaming platform with secure authentication, media uploads via Cloudinary, and admin dashboard. Improved performance by 30% through optimization.",
    image: "",
    tags: ["React", "Firebase", "Tailwind CSS", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Movie Ticket Booking System",
    description:
      "Interactive web app for browsing movies, selecting showtimes, choosing seats, and booking tickets. Implemented validation to reduce booking errors.",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Soil Moisture Sensor System",
    description:
      "IoT-based system to monitor soil moisture levels in real-time and enable smart irrigation for sustainable agriculture.",
    image: "",
    tags: ["IoT", "Arduino", "Sensors", "Embedded"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Secure Image Encryption Research",
    description:
      "Published research on secure image encryption using computational ghost imaging and compressed sensing techniques.",
    image: "",
    tags: ["Research", "Cryptography", "Image Processing"],
    liveUrl: "#",
    githubUrl: "#",
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
            Real-world projects that demonstrate my skills in software development, IoT, and research.
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
    {/* Project Image Placeholder */}
    <div className="relative h-52 bg-muted overflow-hidden">
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/60">
            <ImageIcon size={40} className="mb-2" />
            <span className="text-xs uppercase tracking-wider">Project Image</span>
          </div>
        </>
      )}

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

    <div className="p-6">
      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {project.description}
      </p>
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
