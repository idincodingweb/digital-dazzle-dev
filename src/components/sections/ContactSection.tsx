import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih atas pesan Anda. Saya akan segera merespon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890"
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Jakarta, Indonesia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/username",
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/username",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-hero-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Ada proyek menarik atau opportunity yang ingin didiskusikan? 
            Saya siap membantu mewujudkan ide digital Anda menjadi kenyataan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-xl text-text-dark mb-4">
                Kirim Pesan
              </h3>
              <p className="text-text-light mb-6">
                Isi form di bawah atau hubungi saya langsung melalui kontak yang tersedia.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-dark">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-custom focus:border-primary focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-dark">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-custom focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-dark">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ceritakan tentang proyek atau opportunity yang ingin Anda diskusikan..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="transition-custom focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isLoading}
                className="w-full group"
              >
                {isLoading ? (
                  "Mengirim..."
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-xl text-text-dark mb-4">
                Informasi Kontak
              </h3>
              <p className="text-text-light mb-6">
                Hubungi saya melalui cara yang paling nyaman untuk Anda.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-4 bg-card rounded-lg shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-dark group-hover:text-primary transition-colors">
                      {item.label}
                    </div>
                    <div className="text-text-light text-sm">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-lg text-text-dark">
                Terhubung di Social Media
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="lg"
                    className="group"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <link.icon className="mr-2 h-5 w-5" />
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
              <h4 className="font-heading font-semibold text-lg text-text-dark mb-3">
                Ketersediaan
              </h4>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                Saat ini saya tersedia untuk proyek freelance dan opportunity full-time. 
                Response time biasanya dalam 24 jam.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;