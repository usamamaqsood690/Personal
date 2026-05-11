import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const titles = [
  "Lead Mobile Developer",
  "AI Engineer",
  "Flutter Expert",
  "Fintech Architect"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_50%)] z-0" />
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Particles (CSS based for simplicity and performance) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: Math.random() * 3 + 2 + "s",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4"
          >
            Usama Maqsood
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-light text-muted-foreground mb-6 h-12"
          >
            I'm a{" "}
            <span className="text-primary font-medium inline-block min-w-[300px]">
              {titles[titleIndex]}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Lead Full Stack Mobile & AI Developer | 7+ Years | 100K+ User Apps.
            I build precision instruments masquerading as mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="/usama-maqsood-cv.html"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-download-cv"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="h-14 px-8 text-base border-white/10 hover:bg-white/5 hover:text-white"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 text-muted-foreground"
          >
            <a href="https://github.com/usamamaqsood690" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/usamamaqsoodai" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:usamamaqsood416@gmail.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://wa.me/923011031213" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <MessageCircle className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}