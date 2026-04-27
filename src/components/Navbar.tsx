import Link from "next/link";
import { Copy, Mail, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter text-primary">
          A.<span className="text-foreground">A</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#projetos" className="text-muted-foreground hover:text-primary transition-colors">Projetos</Link>
          <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
          <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
          <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
