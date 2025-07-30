import { useState } from "react";
import { ExternalLink, Github, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Dashboard Analytics Modern",
      description: "Platform analytics komprehensif dengan visualisasi data real-time, dashboard interaktif, dan reporting otomatis untuk business intelligence. Dibangun dengan arsitektur microservices dan optimasi untuk handling big data.",
      longDescription: "Aplikasi ini merupakan solusi end-to-end untuk business intelligence yang memungkinkan perusahaan untuk memvisualisasikan data mereka secara real-time. Fitur utama meliputi custom dashboard builder, advanced filtering, export ke berbagai format, dan notification system untuk anomaly detection.",
      image: project1,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Docker", "AWS"],
      category: "Web Application",
      liveUrl: "https://demo-project-1.com",
      githubUrl: "https://github.com/username/project-1",
      featured: true,
      status: "Completed",
      duration: "4 months",
      client: "Tech Corp Enterprise"
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Aplikasi e-commerce mobile-first dengan fitur pembayaran terintegrasi, real-time inventory, dan user experience yang optimal. Mendukung multiple payment gateways dan system loyalty program.",
      longDescription: "Aplikasi mobile commerce yang dirancang khusus untuk memberikan pengalaman berbelanja yang seamless. Terintegrasi dengan sistem inventory real-time, multiple payment options, push notifications, dan fitur social commerce untuk meningkatkan engagement.",
      image: project2,
      technologies: ["React Native", "Redux", "Express.js", "MongoDB", "Stripe API", "Firebase"],
      category: "Mobile App",
      liveUrl: "https://demo-project-2.com",
      githubUrl: "https://github.com/username/project-2",
      featured: true,
      status: "Completed",
      duration: "6 months",
      client: "RetailMax Indonesia"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Sistem manajemen tugas kolaboratif dengan fitur kanban board, real-time collaboration, dan integrasi kalendar. Mendukung team workspace dan project timeline management.",
      longDescription: "Platform kolaborasi team yang memungkinkan management project yang efisien. Dilengkapi dengan kanban board yang customizable, time tracking, file sharing, comment system, dan integration dengan popular tools seperti Slack dan Google Workspace.",
      image: project3,
      technologies: ["Vue.js", "Socket.io", "Django", "Redis", "Docker", "PostgreSQL"],
      category: "Web Application",
      liveUrl: "https://demo-project-3.com",
      githubUrl: "https://github.com/username/project-3",
      featured: false,
      status: "Completed",
      duration: "3 months",
      client: "ProductivityPro"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Dashboard media sosial untuk manajemen multiple accounts dengan fitur scheduling posts, analytics, dan content management. Terintegrasi dengan Facebook, Instagram, dan Twitter APIs.",
      longDescription: "Tool manajemen media sosial all-in-one yang memungkinkan businesses untuk mengelola presence mereka di multiple platform. Features termasuk content calendar, automated posting, engagement analytics, dan competitor analysis.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Social Media APIs", "Tailwind CSS"],
      category: "Web Application",
      liveUrl: "https://demo-project-4.com",
      githubUrl: "https://github.com/username/project-4",
      featured: false,
      status: "In Progress",
      duration: "2 months",
      client: "SocialBuzz Agency"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Platform e-learning dengan fitur course management, video streaming, quiz system, dan progress tracking. Mendukung live sessions dan interactive content.",
      longDescription: "LMS yang comprehensive untuk institusi pendidikan dan corporate training. Dilengkapi dengan video conferencing integration, assessment tools, gradebook, discussion forums, dan mobile app untuk student access.",
      image: project2,
      technologies: ["React", "Django", "PostgreSQL", "WebRTC", "AWS S3", "Docker"],
      category: "Web Application",
      liveUrl: "https://demo-project-5.com",
      githubUrl: "https://github.com/username/project-5",
      featured: false,
      status: "Completed",
      duration: "5 months",
      client: "EduTech Solutions"
    },
    {
      id: 6,
      title: "Restaurant POS System",
      description: "Sistem Point of Sale untuk restoran dengan fitur order management, inventory tracking, dan reporting. Terintegrasi dengan kitchen display dan payment systems.",
      longDescription: "Complete POS solution untuk restaurant operations. Features meliputi table management, menu customization, kitchen workflow optimization, staff management, dan comprehensive reporting untuk business insights.",
      image: project3,
      technologies: ["Flutter", "Firebase", "Node.js", "Stripe", "PWA"],
      category: "Mobile App",
      liveUrl: "https://demo-project-6.com",
      githubUrl: "https://github.com/username/project-6",
      featured: false,
      status: "Completed",
      duration: "4 months",
      client: "RestaurantTech Co"
    }
  ];

  const categories = ["All", "Web Application", "Mobile App", "Desktop App"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Portfolio Proyek
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            Koleksi proyek yang telah saya kembangkan dengan berbagai teknologi modern. 
            Setiap proyek mencerminkan dedikasi untuk kualitas, inovasi, dan user experience yang exceptional.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
              <div className="text-text-light">Total Proyek</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{projects.filter(p => p.featured).length}</div>
              <div className="text-text-light">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{projects.filter(p => p.status === "Completed").length}</div>
              <div className="text-text-light">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-text-light">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-section-bg border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
              <Input
                placeholder="Cari proyek atau teknologi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-text-light" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-section-bg">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-heading text-xl font-semibold text-text-dark mb-2">
                Tidak ada proyek yang ditemukan
              </h3>
              <p className="text-text-light">
                Coba ubah kata kunci pencarian atau filter kategori
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-custom hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
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
                            Demo
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

                    {/* Status & Featured Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.featured && (
                        <Badge className="bg-gradient-primary text-white">
                          Featured
                        </Badge>
                      )}
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed" ? "bg-green-500" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-text-light">{project.duration}</span>
                    </div>

                    <h3 className="font-heading font-semibold text-xl text-text-dark mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-text-light text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      {/* Client */}
                      <div className="text-xs text-text-light">
                        <span className="font-medium">Client:</span> {project.client}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between hover:bg-primary hover:text-white group/btn"
                        asChild
                      >
                        <a href={`/projects/${project.id}`}>
                          Lihat Detail
                          <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;