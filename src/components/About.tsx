import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 glow-purple pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Abstract/Image side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4 mx-auto max-w-md lg:max-w-none transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-muted">
              {/* Optional: Actual photo of Ana Luiza contextually working */}
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                alt="Ana Luiza Working"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Um pouco sobre mim</h2>
          
          <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              <strong className="text-foreground font-medium">Formada em Administração de Empresas</strong>, atuei por mais de 13 anos na área comercial. Fui representante, líder de vendas e microempresária no ramo varejista.
            </p>
            <p>
              Com meu conhecimento acumulado sobre clientes e jornadas de compra, em 2019 criei um e-commerce e iniciei os estudos de Design, SEO, Front End, Análise de Dados e Marketing para focar no digital. No período pandêmico prestei serviços de Webdesign para e-commerces com foco em vendas, acessibilidade e responsividade.
            </p>
            <p>
              Quando conheci o <strong className="text-foreground font-medium">UX e UI Design em 2022</strong>, toda minha paixão em traduzir os desejos e necessidades dos clientes em soluções visuais fizeram ainda mais sentido. Migrei para a área e me especializei através do MBA em UX Research e Liderança em Design.
            </p>
            <p className="text-primary font-medium">
              Hoje, sou uma Designer de Produtos que ama o que faz, focada em criar experiências significativas que impactam negócios e milhões de usuários!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
