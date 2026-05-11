import { motion } from "framer-motion";
import { Smartphone, MonitorSmartphone, Globe, Layout, Server, Wrench, BarChart2, Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    description: "Custom, high-performance iOS applications built with Flutter and Swift, delivering native-like experiences.",
  },
  {
    icon: MonitorSmartphone,
    title: "Android App Development",
    description: "Scalable Android apps utilizing Flutter and Java/Kotlin that run flawlessly across diverse device ecosystems.",
  },
  {
    icon: Store,
    title: "ASO & Store Management",
    description: "Full Google Play Store and Apple App Store account management — app signing, build uploads, release tracks, store listing optimisation, and staged rollouts.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Event Integration",
    description: "End-to-end integration of Meta Events, Adjust SDK, Firebase Analytics, and Microsoft Clarity for user tracking, attribution, funnels, and session recordings.",
  },
  {
    icon: Globe,
    title: "Website to Mobile App",
    description: "Transform your existing web platform into a fully functional, synchronized mobile application seamlessly.",
  },
  {
    icon: Layout,
    title: "Front-End Development",
    description: "Modern, responsive, and pixel-perfect UI/UX architecture for web and mobile interfaces.",
  },
  {
    icon: Server,
    title: "Back-End Development",
    description: "Robust, secure back-end solutions using Firebase, Node, Python, and scalable REST API integrations.",
  },
  {
    icon: Wrench,
    title: "App Updates & Maintenance",
    description: "Continuous lifecycle support keeping applications up-to-date with new OS features, security patches, and bug fixes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-4 justify-center">
            <span className="w-12 h-[2px] bg-primary"></span>
            Services Offered
            <span className="w-12 h-[2px] bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive end-to-end development services tailored for startups and enterprise clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/40 backdrop-blur-sm border-white/5 h-full group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_0_rgba(0,255,255,0)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-xl text-white font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}