import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/username",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/username",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
    },
  ];

  return (
    <footer className="bg-muted mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Nama Lengkap Anda</h3>
            <p className="text-text-light text-sm">
              Full-Stack Web Developer yang berfokus pada pembuatan aplikasi web modern,
              skalabel, dan user-friendly dengan teknologi terkini.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-text-light hover:text-primary transition-custom">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/about" className="text-text-light hover:text-primary transition-custom">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="/projects" className="text-text-light hover:text-primary transition-custom">
                  Proyek
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-light hover:text-primary transition-custom">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Terhubung</h4>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-white"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-text-light text-sm">
              Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-text-light">
          <p>
            © {currentYear} Nama Lengkap Anda. Semua hak dilindungi.
          </p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Dibuat dengan <Heart size={16} className="text-red-500" /> menggunakan React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;