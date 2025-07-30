import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Dashboard Analytics Modern",
      description: "Platform analytics komprehensif dengan visualisasi data real-time, dashboard interaktif, dan reporting otomatis untuk business intelligence.",
      image: project1,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
      liveUrl: "https://demo-project-1.com",
      githubUrl: "https://github.com/username/project-1",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Aplikasi e-commerce mobile-first dengan fitur pembayaran terintegrasi, real-time inventory, dan user experience yang optimal.",
      image: project2,
      technologies: ["React Native", "Redux", "Express.js", "MongoDB", "Stripe API"],
      liveUrl: "https://demo-project-2.com",
      githubUrl: "https://github.com/username/project-2",
      featured: true
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Sistem manajemen tugas kolaboratif dengan fitur kanban board, real-time collaboration, dan integrasi kalendar.",
      image: project3,
      technologies: ["Vue.js", "Socket.io", "Django", "Redis", "Docker"],
      liveUrl: "https://demo-project-3.com",
      githubUrl: "https://github.com/username/project-3",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-hero-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Proyek Unggulan
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Berikut adalah beberapa proyek terbaik yang telah saya kembangkan dengan berbagai teknologi modern
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-custom hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="hero" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white hover:bg-gray-100" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-primary text-white">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-text-dark mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-light text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="ghost" 
                  className="w-full group/btn justify-between hover:bg-primary hover:text-white"
                  asChild
                >
                  <a href={`/projects/${project.id}`}>
                    Lihat Detail Proyek
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="/projects">
              Lihat Semua Proyek
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;