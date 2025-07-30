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
      title: "iMovies - Platform Streaming Film",
      description: "Platform streaming film modern dengan fitur pencarian canggih, rating sistem, dan interface yang responsif untuk pengalaman menonton yang optimal. Dilengkapi dengan sistem rekomendasi dan catalog yang lengkap.",
      longDescription: "iMovies adalah platform streaming film yang dibangun dengan teknologi modern untuk memberikan pengalaman menonton terbaik. Aplikasi ini menyediakan koleksi film terlengkap dengan fitur pencarian advanced, sistem rating, dan rekomendasi personal. Interface yang responsive memastikan pengalaman yang konsisten di semua perangkat.",
      image: project1,
      technologies: ["React", "Next.js", "Tailwind CSS", "Movie API", "Vercel", "Responsive Design"],
      category: "Web Application",
      liveUrl: "https://imovies-v3.vercel.app/",
      githubUrl: "https://github.com/idiniskandar",
      featured: true,
      status: "Completed",
      duration: "2 months",
      client: "Personal Project"
    },
    {
      id: 2,
      title: "Anime Stream - Platform Nonton Anime",
      description: "Platform streaming anime dengan koleksi lengkap, episode tracking, dan fitur bookmark untuk para penggemar anime. Menyediakan pengalaman menonton yang immersive dengan kualitas video terbaik.",
      longDescription: "Anime Stream adalah platform dedicated untuk para penggemar anime dengan koleksi series terlengkap. Fitur unggulan meliputi episode tracking, bookmark favorites, search by genre, dan streaming quality options. UI/UX dirancang khusus untuk memberikan pengalaman menonton anime yang optimal.",
      image: project2,
      technologies: ["React", "Next.js", "TypeScript", "Anime API", "Video Player", "PWA"],
      category: "Web Application",
      liveUrl: "https://anime-stream-drab-five.vercel.app/",
      githubUrl: "https://github.com/idiniskandar",
      featured: true,
      status: "Completed",
      duration: "3 months",
      client: "Personal Project"
    },
    {
      id: 3,
      title: "Chat AI Pro - Asisten AI Cerdas",
      description: "Aplikasi chat AI yang powerful dengan interface modern, riwayat percakapan, dan response yang cepat untuk berbagai kebutuhan. Terintegrasi dengan AI model terdepan untuk conversation yang natural.",
      longDescription: "Chat AI Pro adalah aplikasi conversational AI yang dirancang untuk memberikan assistance intelligent dalam berbagai topik. Dilengkapi dengan memory conversation, response streaming, dan interface yang user-friendly. Aplikasi ini menggunakan teknologi AI terbaru untuk memberikan jawaban yang akurat dan kontekstual.",
      image: project3,
      technologies: ["React", "OpenAI API", "TypeScript", "Real-time Chat", "Stream Response", "Context Memory"],
      category: "Web Application",
      liveUrl: "https://chat-ai-pro-one.vercel.app/",
      githubUrl: "https://github.com/idiniskandar",
      featured: true,
      status: "Completed",
      duration: "2 months",
      client: "Personal Project"
    },
    {
      id: 4,
      title: "CryptoWise ID - Edukasi Kripto",
      description: "Platform edukasi cryptocurrency dengan informasi terkini, analisis market, dan panduan investasi untuk pemula hingga advanced. Menyediakan tools dan resources lengkap untuk crypto learning.",
      longDescription: "CryptoWise ID adalah platform edukasi comprehensive untuk cryptocurrency dan blockchain technology. Menyediakan artikel edukatif, market analysis, price tracking, dan panduan investasi yang mudah dipahami. Target audience dari pemula yang ingin belajar crypto hingga investor experienced.",
      image: project1,
      technologies: ["React", "Chart.js", "Crypto API", "Content Management", "Market Data", "Educational Tools"],
      category: "Web Application",
      liveUrl: "https://crypto-wise-id.vercel.app/",
      githubUrl: "https://github.com/idiniskandar",
      featured: false,
      status: "Completed",
      duration: "3 months",
      client: "Personal Project"
    },
    {
      id: 5,
      title: "Digital Store - Toko Digital Modern",
      description: "E-commerce platform untuk produk digital dengan sistem pembayaran terintegrasi dan manajemen inventory yang efisien. Mendukung berbagai jenis produk digital dan digital downloads.",
      longDescription: "Digital Store adalah e-commerce platform yang khusus dirancang untuk penjualan produk digital. Fitur unggulan meliputi instant download system, secure payment gateway, product catalog management, dan customer dashboard. Platform ini optimized untuk digital products seperti ebooks, software, courses, dan digital assets lainnya.",
      image: project2,
      technologies: ["React", "E-commerce Framework", "Payment Gateway", "Download System", "Product Management", "User Dashboard"],
      category: "Web Application",
      liveUrl: "https://produk-digital-phi.vercel.app/",
      githubUrl: "https://github.com/idiniskandar",
      featured: false,
      status: "Completed",
      duration: "4 months",
      client: "Personal Project"
    },
    {
      id: 6,
      title: "Creative Business Portfolio",
      description: "Portfolio website untuk creative business dengan showcase project yang menarik, client testimonials, dan service presentation yang professional. Dirancang untuk meningkatkan brand presence.",
      longDescription: "Creative Business Portfolio adalah website showcase yang dirancang untuk creative agencies dan freelancers. Menampilkan portfolio projects dengan visual yang stunning, client testimonials, service offerings, dan contact integration. Website ini optimized untuk conversion dan brand building.",
      image: project3,
      technologies: ["React", "Portfolio Design", "Animation", "SEO Optimized", "Contact Forms", "Gallery System"],
      category: "Web Application",
      liveUrl: "https://creative-business.vercel.app/",
      githubUrl: "https://github.com/idiniskandar",
      featured: false,
      status: "Completed",
      duration: "2 months",
      client: "Creative Agency"
    },
    {
      id: 7,
      title: "Anime Story World",
      description: "Platform untuk anime storytelling dan fan fiction dengan community features, story sharing, dan interactive reading experience. Memberikan space untuk kreativitas para anime fans.",
      longDescription: "Anime Story World adalah platform community-driven untuk anime fans yang ingin berbagi cerita dan fan fiction. Dilengkapi dengan story editor, reading interface yang comfortable, community interaction features, dan story categorization. Platform ini mendukung kreativitas dan kolaborasi antar anime enthusiasts.",
      image: project1,
      technologies: ["React", "Story Editor", "Community Features", "User Authentication", "Content Management", "Social Interaction"],
      category: "Web Application",
      liveUrl: "https://asw-psi.vercel.app/",
      githubUrl: "https://github.com/idiniskandar",
      featured: false,
      status: "Completed",
      duration: "3 months",
      client: "Anime Community"
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
            Portfolio Proyek Idin Iskandar
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            Koleksi aplikasi web yang telah saya kembangkan menggunakan teknologi modern seperti React, Next.js, dan TypeScript. 
            Setiap proyek menunjukkan kemampuan full-stack development dan fokus pada user experience yang exceptional.
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