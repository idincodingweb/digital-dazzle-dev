import { 
  Code2, 
  Database, 
  Server, 
  Palette,
  GitBranch,
  Cloud,
  Smartphone,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-blue-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript ES6+", level: 95 },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Django", level: 75 },
        { name: "PHP", level: 70 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "text-purple-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Supabase", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      color: "text-orange-500",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Netlify/Vercel", level: 90 },
        { name: "Webpack/Vite", level: 85 },
        { name: "Testing (Jest)", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Keahlian & Teknologi
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Berbagai teknologi dan framework yang saya kuasai untuk membangun aplikasi web yang powerful dan modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-primary/10 ${category.color} mr-4`}>
                  <category.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-dark group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-text-dark">{skill.name}</span>
                      <span className="text-xs text-text-light">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
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
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="font-heading font-semibold text-xl text-text-dark mb-8">
            Dan masih banyak teknologi lainnya...
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Palette, name: "UI/UX Design" },
              { icon: Smartphone, name: "Mobile First" },
              { icon: GitBranch, name: "Version Control" },
              { icon: Cloud, name: "Cloud Services" },
              { icon: Code2, name: "Clean Code" },
              { icon: Server, name: "DevOps" },
              { icon: Database, name: "Data Modeling" },
              { icon: Zap, name: "Performance" },
            ].map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-primary/5 transition-colors group"
              >
                <item.icon 
                  size={32} 
                  className="text-primary group-hover:scale-110 transition-transform mb-2" 
                />
                <span className="text-xs text-text-light text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;