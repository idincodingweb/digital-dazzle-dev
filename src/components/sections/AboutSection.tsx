import { ArrowRight, Award, Coffee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      number: "50+",
      label: "Proyek Selesai",
      description: "Dari startup hingga enterprise"
    },
    {
      icon: Users,
      number: "30+",
      label: "Client Puas",
      description: "Kolaborasi yang sukses"
    },
    {
      icon: Coffee,
      number: "1000+",
      label: "Jam Coding",
      description: "Dedikasi untuk kualitas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image & Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-custom object-cover"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-text-light">Tahun</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-text-light">Dedication</div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-10 blur-xl scale-105"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
                Tentang Saya
              </h2>
              <p className="text-lg text-text-light leading-relaxed">
                Saya adalah seorang Full-Stack Web Developer dengan passion dalam menciptakan 
                solusi digital yang inovatif dan user-friendly. Dengan pengalaman lebih dari 3 tahun 
                di industri teknologi, saya telah membantu berbagai klien dari startup hingga 
                perusahaan besar dalam merealisasikan visi digital mereka.
              </p>
              <p className="text-text-light leading-relaxed">
                Keahlian saya mencakup pengembangan frontend dengan React dan Vue.js, 
                backend development dengan Node.js dan Python, serta database management. 
                Saya selalu mengutamakan clean code, performance optimization, dan user experience 
                yang exceptional dalam setiap proyek yang saya kerjakan.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg hover:bg-card transition-colors group"
                >
                  <item.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={32} />
                  <div className="text-2xl font-bold text-text-dark mb-1">{item.number}</div>
                  <div className="text-sm font-medium text-text-dark mb-1">{item.label}</div>
                  <div className="text-xs text-text-light">{item.description}</div>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
              <h3 className="font-heading font-semibold text-lg text-text-dark mb-3">
                Filosofi Kerja Saya
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                "Setiap baris kode yang saya tulis memiliki tujuan: menciptakan pengalaman digital 
                yang tidak hanya berfungsi dengan baik, tetapi juga memberikan value yang nyata 
                bagi pengguna dan bisnis."
              </p>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>Kualitas • Inovasi • Kolaborasi</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/about">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;