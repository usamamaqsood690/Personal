import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }}
          className="text-2xl font-bold font-mono tracking-tighter text-white"
        >
          <span className="text-primary">&lt;</span>
          UM
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#contact")}
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#contact")}
            className="w-full mt-2 bg-primary text-primary-foreground"
          >
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
}