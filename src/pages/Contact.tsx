import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
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
        title: "Pesan Berhasil Dikirim!",
        description: "Terima kasih atas minat Anda. Saya akan merespon dalam 24 jam.",
      });
      setFormData({ 
        name: "", 
        email: "", 
        company: "", 
        budget: "", 
        timeline: "", 
        message: "" 
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      href: "mailto:your.email@example.com",
      description: "Untuk inquiries umum dan diskusi proyek"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      href: "https://wa.me/6281234567890",
      description: "Untuk diskusi cepat dan urgent matters"
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Jakarta, Indonesia",
      href: "#",
      description: "Available untuk meeting di area Jakarta"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 24 jam",
      href: "#",
      description: "Waktu respon rata-rata untuk email"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/username",
      color: "hover:text-gray-900",
      description: "Lihat portfolio code saya"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/username",
      color: "hover:text-blue-600",
      description: "Connect untuk opportunity profesional"
    }
  ];

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan proyek?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas. Proyek kecil 2-4 minggu, proyek medium 1-3 bulan, proyek besar 3-6 bulan."
    },
    {
      question: "Apakah tersedia untuk proyek jangka panjang?",
      answer: "Ya, saya tersedia untuk proyek jangka panjang dan kontrak maintenance. Diskusikan kebutuhan spesifik Anda."
    },
    {
      question: "Teknologi apa yang paling saya kuasai?",
      answer: "React.js, Node.js, TypeScript, dan PostgreSQL adalah tech stack utama. Namun saya fleksibel dengan berbagai teknologi."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Mari Wujudkan Proyek Anda
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            Siap membantu merealisasikan ide digital Anda menjadi aplikasi web yang powerful dan user-friendly. 
            Mari diskusikan bagaimana saya dapat berkontribusi untuk kesuksesan proyek Anda.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-text-light text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-text-light text-sm">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-text-light text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-text-light text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-0">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-section-bg p-8 lg:p-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-text-dark mb-4">
                Ceritakan Tentang Proyek Anda
              </h2>
              <p className="text-text-light leading-relaxed">
                Semakin detail informasi yang Anda berikan, semakin akurat estimasi dan saran yang dapat saya berikan. 
                Semua informasi akan dijaga kerahasiaannya.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-text-dark">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 transition-custom focus:border-primary focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-text-dark">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 transition-custom focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              {/* Company Info */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-text-dark">
                  Perusahaan/Organisasi
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nama perusahaan Anda"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 transition-custom focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-text-dark">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-custom focus:border-primary focus:ring-primary"
                  >
                    <option value="">Pilih budget range</option>
                    <option value="under-50m">&lt; 50 Juta</option>
                    <option value="50-100m">50 - 100 Juta</option>
                    <option value="100-200m">100 - 200 Juta</option>
                    <option value="over-200m">&gt; 200 Juta</option>
                    <option value="discuss">Diskusi langsung</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-semibold text-text-dark">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-custom focus:border-primary focus:ring-primary"
                  >
                    <option value="">Pilih timeline</option>
                    <option value="asap">ASAP (Rush)</option>
                    <option value="1month">1 Bulan</option>
                    <option value="2-3months">2-3 Bulan</option>
                    <option value="3-6months">3-6 Bulan</option>
                    <option value="6months+">6+ Bulan</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-text-dark">
                  Deskripsi Proyek *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ceritakan detail tentang proyek yang ingin Anda kembangkan:
                  
• Jenis aplikasi (web app, mobile app, dashboard, e-commerce, dll)
• Target pengguna dan use case utama
• Fitur-fitur yang diinginkan
• Teknologi/platform preference (jika ada)
• Challenges atau requirements khusus
• Referensi aplikasi serupa (jika ada)

Semakin detail informasi yang Anda berikan, semakin baik saya dapat memahami kebutuhan Anda."
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="transition-custom focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isLoading}
                className="w-full group"
              >
                {isLoading ? (
                  "Mengirim Pesan..."
                ) : (
                  <>
                    Kirim Proposal Proyek
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-sm text-text-light text-center">
                Dengan mengirim form ini, Anda setuju bahwa saya akan menghubungi Anda untuk membahas proyek.
                Respon biasanya dalam 24 jam.
              </p>
            </form>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="bg-hero-bg p-8 lg:p-12">
          <div className="space-y-10">
            {/* Contact Methods */}
            <div>
              <h3 className="font-heading text-xl font-bold text-text-dark mb-6">
                Kontak Langsung
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block p-4 bg-card rounded-lg shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon size={20} className="text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-text-dark group-hover:text-primary transition-colors text-sm">
                          {item.label}
                        </div>
                        <div className="text-text-dark font-medium">{item.value}</div>
                        <div className="text-text-light text-xs mt-1">{item.description}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading text-xl font-bold text-text-dark mb-6">
                Social Media
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card rounded-lg shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <link.icon className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-text-dark group-hover:text-primary transition-colors">
                        {link.name}
                      </div>
                      <div className="text-text-light text-sm">{link.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-heading font-semibold text-lg text-text-dark">
                  Currently Available
                </h4>
              </div>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                Saat ini saya tersedia untuk proyek baru. Response time rata-rata 24 jam untuk inquiry dan proposal.
              </p>
              <div className="text-xs text-text-light">
                <div>• Available untuk meeting: Senin - Jumat, 9AM - 6PM WIB</div>
                <div>• Remote/on-site project: Both available</div>
                <div>• Contract type: Project-based atau long-term</div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-heading text-xl font-bold text-text-dark mb-6">
                Frequently Asked
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MessageCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <div>
                        <h4 className="font-medium text-text-dark text-sm">{faq.question}</h4>
                        <p className="text-text-light text-xs mt-1">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;