import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft, Calendar, User, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or context
  const projects = {
    "1": {
      id: 1,
      title: "Dashboard Analytics Modern",
      description: "Platform analytics komprehensif dengan visualisasi data real-time, dashboard interaktif, dan reporting otomatis untuk business intelligence.",
      longDescription: "Aplikasi ini merupakan solusi end-to-end untuk business intelligence yang memungkinkan perusahaan untuk memvisualisasikan data mereka secara real-time. Dibangun dengan arsitektur microservices dan optimasi untuk handling big data dengan performa tinggi.",
      challenge: "Klien membutuhkan solusi untuk mengintegrasikan data dari multiple sources dan memberikan insights yang actionable dalam format yang mudah dipahami oleh stakeholders non-technical.",
      solution: "Mengembangkan platform dengan custom dashboard builder, real-time data streaming, dan automated report generation. Implementasi caching strategy dan optimasi query untuk handling large datasets.",
      results: [
        "Mengurangi waktu analisis data dari 2 hari menjadi real-time",
        "Meningkatkan efisiensi team analytics sebesar 75%",
        "ROI positif dalam 3 bulan pertama deployment"
      ],
      images: [project1, project2, project3],
      technologies: [
        { name: "React", category: "Frontend" },
        { name: "TypeScript", category: "Language" },
        { name: "Node.js", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Chart.js", category: "Visualization" },
        { name: "Docker", category: "DevOps" },
        { name: "AWS", category: "Cloud" },
        { name: "Redis", category: "Caching" }
      ],
      features: [
        "Real-time data visualization",
        "Custom dashboard builder",
        "Automated report generation",
        "Multi-tenant architecture",
        "Role-based access control",
        "API integrations",
        "Export to multiple formats",
        "Mobile responsive design"
      ],
      liveUrl: "https://demo-project-1.com",
      githubUrl: "https://github.com/username/project-1",
      duration: "4 months",
      client: "Tech Corp Enterprise",
      status: "Completed",
      date: "2023"
    },
    "2": {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Aplikasi e-commerce mobile-first dengan fitur pembayaran terintegrasi, real-time inventory, dan user experience yang optimal.",
      longDescription: "Aplikasi mobile commerce yang dirancang khusus untuk memberikan pengalaman berbelanja yang seamless. Terintegrasi dengan sistem inventory real-time, multiple payment options, push notifications, dan fitur social commerce untuk meningkatkan engagement.",
      challenge: "Membangun aplikasi e-commerce yang dapat handle high traffic, real-time inventory updates, dan multiple payment gateways dengan user experience yang smooth di berbagai device.",
      solution: "Menggunakan React Native untuk cross-platform development, implementasi state management dengan Redux, real-time updates menggunakan WebSocket, dan optimasi performance untuk loading time yang minimal.",
      results: [
        "Meningkatkan conversion rate sebesar 45%",
        "Mengurangi cart abandonment rate hingga 30%",
        "User retention rate mencapai 80% dalam 30 hari"
      ],
      images: [project2, project1, project3],
      technologies: [
        { name: "React Native", category: "Mobile" },
        { name: "Redux", category: "State Management" },
        { name: "Express.js", category: "Backend" },
        { name: "MongoDB", category: "Database" },
        { name: "Stripe API", category: "Payment" },
        { name: "Firebase", category: "Services" },
        { name: "Socket.io", category: "Real-time" },
        { name: "Jest", category: "Testing" }
      ],
      features: [
        "Cross-platform mobile app",
        "Real-time inventory tracking",
        "Multiple payment gateways",
        "Push notifications",
        "Social commerce features",
        "Order tracking",
        "Wishlist & favorites",
        "Customer reviews & ratings"
      ],
      liveUrl: "https://demo-project-2.com",
      githubUrl: "https://github.com/username/project-2",
      duration: "6 months",
      client: "RetailMax Indonesia",
      status: "Completed",
      date: "2023"
    },
    "3": {
      id: 3,
      title: "Task Management System",
      description: "Sistem manajemen tugas kolaboratif dengan fitur kanban board, real-time collaboration, dan integrasi kalendar.",
      longDescription: "Platform kolaborasi team yang memungkinkan management project yang efisien. Dilengkapi dengan kanban board yang customizable, time tracking, file sharing, comment system, dan integration dengan popular tools seperti Slack dan Google Workspace.",
      challenge: "Menciptakan platform kolaborasi yang dapat menggantikan multiple tools yang digunakan team untuk project management, dengan focus pada real-time collaboration dan ease of use.",
      solution: "Membangun aplikasi Vue.js dengan real-time features menggunakan Socket.io, implementasi drag-and-drop interface, dan integrasi dengan external APIs untuk seamless workflow.",
      results: [
        "Mengurangi meeting time sebesar 40%",
        "Meningkatkan team productivity hingga 60%",
        "Adopted oleh 500+ teams dalam 6 bulan"
      ],
      images: [project3, project2, project1],
      technologies: [
        { name: "Vue.js", category: "Frontend" },
        { name: "Socket.io", category: "Real-time" },
        { name: "Django", category: "Backend" },
        { name: "Redis", category: "Caching" },
        { name: "Docker", category: "DevOps" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Nginx", category: "Server" },
        { name: "AWS EC2", category: "Cloud" }
      ],
      features: [
        "Kanban board interface",
        "Real-time collaboration",
        "Time tracking",
        "File sharing",
        "Comment system",
        "Calendar integration",
        "Team workspaces",
        "Third-party integrations"
      ],
      liveUrl: "https://demo-project-3.com",
      githubUrl: "https://github.com/username/project-3",
      duration: "3 months",
      client: "ProductivityPro",
      status: "Completed",
      date: "2023"
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Project Not Found</h1>
          <p className="text-text-light mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Navigation */}
      <div className="bg-section-bg border-b border-border py-4">
        <div className="container-custom">
          <Button variant="ghost" asChild className="group">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Projects
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-gradient-primary text-white">
                  {project.status}
                </Badge>
                <span className="text-text-light">{project.date}</span>
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
                {project.title}
              </h1>
              
              <p className="text-lg text-text-light leading-relaxed">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-t border-border/50">
                <div className="flex items-center gap-2 text-text-light">
                  <User size={16} />
                  <span className="text-sm">{project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-text-light">
                  <Clock size={16} />
                  <span className="text-sm">{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-text-light">
                  <Calendar size={16} />
                  <span className="text-sm">{project.date}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full rounded-2xl shadow-custom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-section-bg">
        <div className="container-custom">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-custom hover:shadow-lg transition-all duration-300">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-hero-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark">
                Challenge
              </h2>
              <p className="text-text-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark">
                Solution
              </h2>
              <p className="text-text-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-section-bg">
        <div className="container-custom">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-12 text-center">
            Technologies Used
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...new Set(project.technologies.map(tech => tech.category))].map(category => (
              <div key={category} className="space-y-4">
                <h3 className="font-semibold text-lg text-text-dark">{category}</h3>
                <div className="space-y-2">
                  {project.technologies
                    .filter(tech => tech.category === category)
                    .map(tech => (
                      <div key={tech.name} className="flex items-center p-3 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {tech.name}
                        </Badge>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Results */}
      <section className="py-16 bg-hero-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="space-y-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark">
                Key Features
              </h2>
              <div className="grid gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-text-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark">
                Results & Impact
              </h2>
              <div className="space-y-6">
                {project.results.map((result, index) => (
                  <div key={index} className="p-6 bg-gradient-card rounded-xl border border-border/50">
                    <p className="text-text-dark font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-section-bg">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-6">
            Interested in Similar Project?
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Saya siap membantu mewujudkan proyek digital Anda dengan kualitas dan dedikasi yang sama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Diskusi Proyek Anda</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">Lihat Proyek Lainnya</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;