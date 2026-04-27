import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Redesign de plataforma com base em pesquisas",
    description:
      "A pesquisa indicou que criar uma nova plataforma era mais viável do que manter o Hub legado. O effort de sustentação da equipe de desenvolvimento reduziria de 80 para 20%.",
    tags: ["UX Research", "UX/UI Design", "Design System"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Higia Fit: da concepção ao MVP",
    description:
      "Transformando uma ideia em um MVP útil, viável e escalável. Higia Fit App promete ser o aplicativo gerenciador de rotina saudável mais completo e personalizado do mercado.",
    tags: ["UX Strategy", "UX/UI Design", "Id. Visual", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pesquisa surpreende a diretoria e muda o planejamento do quarter",
    description:
      "Apresentação de métricas e descobertas através de dados qualitativos e quantitativos que modificaram a visão do produto perante os stakeholders.",
    tags: ["UX Research", "Data Analytics", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Redesign de e-commerce traz resultados imediatos",
    description:
      "Redesign e otimização trouxe aumento de tráfego, aprovação no Google Shopping, performace A no GT Metrix, 387% de ROI e taxa de satisfação de 87% NPS.",
    tags: ["UX Research", "UX Design", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4 hidden">Projetos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col rounded-[2rem] glass-card overflow-hidden hover:border-primary/50 transition-colors duration-500 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-8">
              <h3 className="text-2xl font-bold mb-4 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-8 flex-1 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group/link whitespace-nowrap"
                >
                  Ver detalhes
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
