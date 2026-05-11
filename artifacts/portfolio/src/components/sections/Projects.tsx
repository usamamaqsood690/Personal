import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 0,
    title: "Wealth NX AI",
    category: "Fintech",
    tags: ["AI", "Mobile", "Fintech"],
    featured: true,
    platform: "iOS & Android · USA Market",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.inexor.wealthnx.ai",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    description: "Recently built AI-powered fintech app for the US market. Full-stack Flutter application on both iOS and Android featuring AI-driven financial insights, real-time analytics, secure payment flows, and intelligent investment recommendations.",
  },
  {
    id: 1,
    title: "Mubasher Info (MENA Trading)",
    category: "Fintech",
    tags: ["Mobile", "Fintech"],
    platform: "iOS & Android · MENA Region · 100K+ Users",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.gfm.tadawuly",
    image: "https://images.unsplash.com/photo-1716279083223-006db39251e1?auto=format&fit=crop&w=900&q=80",
    description: "Trading and financial app for the MENA region serving 100K+ active users. Real-time price tracking, secure authentication, and custom Flutter + Native plugins.",
  },
  {
    id: 2,
    title: "Beltone IR",
    category: "Fintech",
    tags: ["Mobile", "Fintech"],
    platform: "iOS & Android · MENA Finance",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.beltonefinancial.beltone",
    image: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?auto=format&fit=crop&w=900&q=80",
    description: "Investor relations mobile app for Beltone Financial. Built with Flutter for the MENA financial market with real-time market data and secure investment features.",
  },
  {
    id: 3,
    title: "Khudi LMS",
    category: "Mobile",
    tags: ["Mobile", "Fintech"],
    platform: "iOS & Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mediatiz.khudi",
    image: "https://images.unsplash.com/photo-1771408427146-09be9a1d4535?auto=format&fit=crop&w=900&q=80",
    description: "Educational LMS platform featuring AI chatbot (PyBot), JazzCash & HBL payment integrations, and real-time progress tracking.",
  },
  {
    id: 4,
    title: "Khudi Chat",
    category: "Mobile",
    tags: ["Mobile", "AI"],
    platform: "iOS & Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=chat.khudi.axitechnologies",
    image: "https://images.unsplash.com/photo-1762330467475-a565d04e1808?auto=format&fit=crop&w=900&q=80",
    description: "AI-powered chat application with real-time messaging, intelligent responses, and seamless user experience built with Flutter.",
  },
  {
    id: 5,
    title: "DHA Resident App",
    category: "Mobile",
    tags: ["Mobile"],
    platform: "iOS & Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.claystonetech.dhair.resident",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    description: "Enterprise real estate management app for Defence Housing Authority residents — geolocation services, service requests, and real-time communication with authorities.",
  },
  {
    id: 6,
    title: "Speedy Wi-Fi Hotspot",
    category: "Mobile",
    tags: ["Mobile"],
    platform: "Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=apps.isystech.org.speedywifihotspots.wifimaps.wifianalyzer.wifispots",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description: "Location-based Wi-Fi spot finder with Wi-Fi map, analyser, and hotspot detection. Secure, location-aware connectivity for public and commercial users.",
  },
  {
    id: 7,
    title: "Food Recipes — Food Lovers",
    category: "Mobile",
    tags: ["Mobile"],
    platform: "Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodrecipe.foodlovers",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80",
    description: "Feature-rich food recipe app for food enthusiasts with categorised recipes, step-by-step cooking instructions, and a clean, engaging UI.",
  },
  {
    id: 8,
    title: "PTS Jobs",
    category: "Mobile",
    tags: ["Mobile"],
    platform: "Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=ptsjobs.org.pk.jobsearch",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
    description: "Job search and career platform for Pakistan Testing Service (PTS) jobs — real-time listings, application tracking, and mobile-optimised job browsing.",
  },
  {
    id: 9,
    title: "Islamic Gift — Zikr & Qibla",
    category: "Mobile",
    tags: ["Mobile"],
    platform: "Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.islamicgifts.zikr.qibla.dua.dhikr",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80",
    description: "Comprehensive Islamic app featuring Zikr, Qibla direction, Dua collections, and Dhikr counters — designed with a beautiful, spiritually-focused UI.",
  },
  {
    id: 10,
    title: "AI Research — Satellite Detection",
    category: "AI",
    tags: ["AI"],
    image: "https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?auto=format&fit=crop&w=900&q=80",
    description: "Academic research on Tiny Object Detection through Satellite Images using Spiking Neural Networks.",
  },
];

const filters = ["All", "Mobile", "AI", "Fintech"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Live apps I've built and shipped to production — available on Google Play and the App Store.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                data-testid={`filter-${filter.toLowerCase()}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {project.playStoreUrl && (
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-playstore-${project.id}`}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/90 backdrop-blur-md text-background font-semibold text-sm hover:bg-primary transition-colors shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                      >
                        <ExternalLink size={16} />
                        View on Play Store
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-6 relative z-30 bg-card">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(project as typeof projects[0]).featured && (
                      <Badge className="bg-primary text-background text-xs font-bold tracking-wide">
                        Featured
                      </Badge>
                    )}
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/30 text-primary bg-primary/5 text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  {(project as typeof projects[0]).platform && (
                    <p className="text-xs text-primary/70 font-mono mb-2">{(project as typeof projects[0]).platform}</p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs text-primary/70 hover:text-primary transition-colors font-mono"
                    >
                      <ExternalLink size={12} />
                      Play Store
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
