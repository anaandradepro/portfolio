import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contato" className="relative bg-primary text-primary-foreground py-24 px-4 sm:px-6 lg:px-8 mt-24 overflow-hidden rounded-t-[3rem]">
      <div className="absolute inset-0 noise-bg pointer-events-none mix-blend-overlay opacity-20" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Vamos bater um papo?</h2>
        <p className="text-xl md:text-2xl font-light mb-12 opacity-90 max-w-2xl">
          Estou sempre aberta a novas oportunidades, colaborações ou apenas para trocar uma ideia sobre design.
        </p>
        
        <Link 
          href="https://wa.me/5531982132170" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-10 py-5 text-lg font-bold shadow-2xl hover:scale-105 hover:shadow-background/20 transition-all duration-300"
        >
          Fale comigo no WhatsApp
          <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium opacity-80">
        <p>Todos os direitos reservados © Ana Luiza Andrade Chagas - 2025</p>
        <div className="flex gap-6">
          <Link href="#projetos" className="hover:text-background transition-colors">Projetos</Link>
          <Link href="https://www.linkedin.com/in/anaandradepro/" target="_blank" className="hover:text-background transition-colors">LinkedIn</Link>
          <Link href="mailto:anaandradepro@gmail.com" className="hover:text-background transition-colors">Email</Link>
        </div>
      </div>
    </footer>
  );
}
