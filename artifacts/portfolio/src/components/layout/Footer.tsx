import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-white/5 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold font-mono tracking-tighter text-white inline-block mb-2">
            <span className="text-primary">&lt;</span>
            UM
            <span className="text-primary">/&gt;</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Building digital products, brands, and experience.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/usamamaqsood690"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/usamamaqsoodai"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:usamamaqsood416@gmail.com"
            className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-8 text-center text-xs text-muted-foreground/60 border-t border-white/5 pt-8">
        &copy; {currentYear} Usama Maqsood. All rights reserved.
      </div>
    </footer>
  );
}