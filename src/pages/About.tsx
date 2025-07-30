import { Calendar, MapPin, Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Corp",
      period: "2022 - Sekarang",
      location: "Jakarta, Indonesia",
      description: "Memimpin pengembangan aplikasi web enterprise dengan team 5+ developer. Bertanggung jawab atas arsitektur sistem, code review, dan mentoring junior developer.",
      achievements: [
        "Meningkatkan performance aplikasi hingga 40%",
        "Implementasi CI/CD pipeline yang mengurangi deployment time 60%",
        "Memimpin migrasi legacy system ke modern tech stack"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2021 - 2022",
      location: "Bandung, Indonesia",
      description: "Mengembangkan berbagai aplikasi web untuk klien dari berbagai industri. Fokus pada pengembangan frontend React dan backend Node.js.",
      achievements: [
        "Menyelesaikan 15+ proyek dengan tingkat kepuasan klien 100%",
        "Implementasi responsive design yang meningkatkan mobile traffic 35%",
        "Optimasi SEO yang meningkatkan organic search traffic 50%"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub Indonesia",
      period: "2020 - 2021",
      location: "Jakarta, Indonesia",
      description: "Memulai karir sebagai web developer dengan fokus pada pembelajaran dan pengembangan skill. Terlibat dalam berbagai proyek startup.",
      achievements: [
        "Berkontribusi pada 10+ MVP untuk startup early-stage",
        "Menguasai fundamentals web development dan best practices",
        "Mendapat promosi ke posisi Full-Stack dalam 8 bulan"
      ]
    }
  ];

  const education = [
    {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Indonesia",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Fokus pada Software Engineering dan Web Development. Aktif dalam organisasi mahasiswa dan berbagai kompetisi programming."
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Meta Frontend Developer Professional Certificate"
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 85 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "GraphQL", level: 70 }
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
                  Tentang Saya
                </h1>
                <p className="text-xl text-text-light">
                  Passionate Full-Stack Developer dengan misi menciptakan solusi digital yang berdampak
                </p>
              </div>

              <div className="prose prose-lg text-text-light">
                <p>
                  Halo! Saya adalah seorang Full-Stack Web Developer dengan pengalaman 3+ tahun 
                  dalam industri teknologi. Perjalanan saya dimulai dari rasa penasaran terhadap 
                  bagaimana website bekerja, dan kini telah berkembang menjadi passion yang mendalam 
                  dalam menciptakan aplikasi web yang tidak hanya functional, tetapi juga memberikan 
                  pengalaman pengguna yang luar biasa.
                </p>
                <p>
                  Saya percaya bahwa teknologi terbaik adalah yang dapat memecahkan masalah nyata 
                  dengan cara yang elegan dan efisien. Dalam setiap proyek, saya selalu mengutamakan 
                  clean code, scalability, dan user experience yang optimal.
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