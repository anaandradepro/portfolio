import { ArrowRight, FileText, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 mt-16">
      <div className="absolute inset-0 glow-purple pointer-events-none -z-10" />
      <div className="absolute inset-0 noise-bg pointer-events-none -z-10" />

      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center z-10 animate-fade-in-up">
        <div className="mb-8 relative rounded-full p-2 glass-card animate-float">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50 relative bg-muted">
            {/* Ideally replace src with actual image of Ana Luiza */}
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80"
              alt="Ana Luiza Andrade"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 mb-6 glass-card">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Ana Luiza Andrade
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight max-w-3xl">
          Product Designer que transforma necessidades em experiências digitais{" "}
          <span className="text-gradient">intuitivas e acessíveis</span>
        </h1>

        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Gerando valor de negócio através de um design limpo, moderno e focado nas pessoas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="https://www.linkedin.com/in/anaandradepro/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-secondary text-secondary-foreground border border-border px-8 py-4 text-sm font-bold hover:bg-secondary/80 hover:scale-105 transition-all duration-300 glass-card"
          >
            <FileText className="w-5 h-5" />
            Currículo
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
