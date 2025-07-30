import { Calendar, MapPin, Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      company: "Freelance / Personal Projects",
      period: "2022 - Sekarang",
      location: "Indonesia",
      description: "Mengembangkan berbagai aplikasi web modern menggunakan React, Next.js, dan TypeScript. Fokus pada pembuatan platform streaming, chat AI, e-commerce, dan aplikasi edukasi.",
      achievements: [
        "Mengembangkan 7+ aplikasi web dengan teknologi modern",
        "Implementasi responsive design untuk semua device",
        "Integrasi API dan sistem real-time untuk user experience optimal"
      ]
    },
    {
      title: "Web Developer",
      company: "Various Projects",
      period: "2021 - 2022",
      location: "Indonesia",
      description: "Membangun foundation dalam web development dengan fokus pada pembelajaran teknologi frontend dan backend. Mengembangkan berbagai jenis aplikasi web.",
      achievements: [
        "Menguasai React.js dan ekosistemnya",
        "Implementasi responsive design dan modern UI/UX",
        "Pengalaman dengan deployment dan hosting modern"
      ]
    },
    {
      title: "Computer Science Student",
      company: "Universitas Komputer Indonesia (UNIKOM)",
      period: "2018 - 2022",
      location: "Bandung, Indonesia", 
      description: "Menyelesaikan pendidikan Sarjana Komputer dengan fokus pada software engineering dan web development. Aktif dalam organisasi dan project-based learning.",
      achievements: [
        "Lulus dengan gelar S.Kom dengan pemahaman mendalam tentang programming",
        "Mengembangkan berbagai project akademik dan personal",
        "Membangun foundation yang kuat dalam computer science"
      ]
    }
  ];

  const education = [
    {
      degree: "S1 Sistem Komputer",
      institution: "Universitas Komputer Indonesia (UNIKOM)",
      period: "2018 - 2022",
      gpa: "3.7/4.0",
      description: "Fokus pada Software Engineering dan Web Development. Mengembangkan berbagai project aplikasi web dan mobile selama masa studi."
    }
  ];

  const certifications = [
    "React Developer Certification",
    "Next.js Professional Certificate",
    "TypeScript Advanced Certification", 
    "Modern Web Development Certificate"
  ];

  const skills = [
    { name: "React.js / Next.js", level: 95 },
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "API Integration", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "Git / Version Control", level: 85 },
    { name: "Deployment (Vercel)", level: 80 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark">
                  Tentang Idin Iskandar, S.Kom
                </h1>
                <p className="text-xl text-text-light">
                  Lulusan UNIKOM dengan passion menciptakan aplikasi web modern dan inovatif
                </p>
              </div>

              <div className="prose prose-lg text-text-light">
                <p>
                  Halo! Saya adalah lulusan Universitas Komputer Indonesia (UNIKOM) dengan gelar 
                  Sarjana Komputer yang memiliki passion dalam pengembangan aplikasi web modern. 
                  Perjalanan saya dimulai dari rasa penasaran terhadap teknologi web, dan kini telah 
                  berkembang menjadi keahlian dalam menciptakan aplikasi yang tidak hanya functional, 
                  tetapi juga memberikan user experience yang exceptional.
                </p>
                <p>
                  Saya memiliki pengalaman dalam mengembangkan berbagai jenis aplikasi mulai dari 
                  platform streaming, chat AI, e-commerce, hingga aplikasi edukasi menggunakan 
                  teknologi modern seperti React, Next.js, dan TypeScript. Setiap proyek yang saya 
                  kerjakan selalu mengutamakan kualitas code dan user experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    Hubungi Saya
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-custom"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-text-light">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-section-bg">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-16 text-center">
            Pengalaman Kerja
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-custom hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-xl text-text-dark">
                      {exp.title}
                    </h3>
                    <div className="font-medium text-primary">{exp.company}</div>
                    <div className="flex items-center gap-4 text-text-light text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-text-light mb-6">{exp.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-text-dark">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-light">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-hero-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-text-dark mb-8">
                Pendidikan
              </h2>
              
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-custom"
                >
                  <h3 className="font-heading font-semibold text-lg text-text-dark mb-2">
                    {edu.degree}
                  </h3>
                  <div className="font-medium text-primary mb-2">{edu.institution}</div>
                  <div className="flex items-center gap-4 text-text-light text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                    <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                  </div>
                  <p className="text-text-light">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-text-dark mb-8">
                Sertifikasi
              </h2>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-4 shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Award className="text-primary" size={20} />
                        <span className="font-medium text-text-dark group-hover:text-primary transition-colors">
                          {cert}
                        </span>
                      </div>
                      <ExternalLink className="text-text-light group-hover:text-primary transition-colors" size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Detail */}
      <section className="py-20 bg-section-bg">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-16 text-center">
            Keahlian Detail
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text-dark">{skill.name}</span>
                  <span className="text-sm text-text-light">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="h-3 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;