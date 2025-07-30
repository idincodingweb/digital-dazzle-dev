import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-hero pt-16">
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                Halo, Saya{" "}
                <span className="text-transparent bg-gradient-primary bg-clip-text">
                  Idin Iskandar, S.Kom
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-text-light font-medium">
                Full-Stack Web Developer | Lulusan UNIKOM
              </p>
              <p className="text-lg text-text-light max-w-lg">
                Membangun aplikasi web modern dengan React, Next.js, dan TypeScript. 
                Berfokus pada user experience yang exceptional dan teknologi terdepan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#projects">
                  Lihat Proyek Saya
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="group" asChild>
                <a href="#contact">
                  Hubungi Saya
                  <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-light">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-text-light">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-light">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="Web Developer workspace"
                className="w-full h-auto rounded-2xl shadow-custom object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary rounded-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full opacity-30 animate-pulse"></div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-10 blur-xl scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;