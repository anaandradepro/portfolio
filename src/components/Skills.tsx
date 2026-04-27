const hardSkills = [
  "UX/UI Design", "UX Research", "Design System", "Prototipação", "Figma", 
  "Web Design", "Wordpress", "HTML5", "CSS3", "SEO", "Acessibilidade WCAG", 
  "Heurísticas / Design Visual", "Design Sprint", "Metodologias Ágeis", "IA - LLMs", 
  "Hotjar / M.Clarity", "Notion / Azure Dev.Ops", "Discord / Slack", "+ Mais"
];

const softSkills = [
  "Pensamento Analítico", "Detalhista", "Colaborativa", "Senso estético", 
  "Autogerenciada", "Comunicação multidisciplinar", "Resolução de problemas", 
  "Aprendizagem rápida", "Cultura Ágil", "Orientada para o crescimento", "+ Mais"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Hard Skills */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-8 text-primary">Hard Skills</h2>
          <div className="flex flex-wrap gap-3">
            {hardSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 rounded-full glass-card border-border hover:border-primary/40 transition-colors text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 rounded-full border border-secondary text-secondary-foreground bg-secondary/10 hover:bg-secondary/30 transition-colors text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
