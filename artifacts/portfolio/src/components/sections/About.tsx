import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Code, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePic from "@assets/IMG_9524.JPG-removebg-preview-removebg-preview_1778526106303.png";

const stats = [
  { label: "Client Projects", value: "100+" },
  { label: "App Releases", value: "200+" },
  { label: "Support Hours", value: "1000+" },
  { label: "Years Experience", value: "8" },
];

const infoList = [
  { icon: Code, label: "Focus", value: "Flutter, AI, Fintech" },
  { icon: GraduationCap, label: "Degree", value: "MS Artificial Intelligence" },
  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
  { icon: Mail, label: "Email", value: "usamamaqsood416@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 301 103 1213" },
  { icon: Briefcase, label: "Freelance", value: "Available" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
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
            About Me
            <span className="w-12 h-[2px] bg-primary"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Avatar Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-square rounded-2xl bg-card border border-white/10 overflow-hidden flex items-center justify-center">
                <img
                  src={profilePic}
                  alt="Usama Maqsood"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Engineering <span className="text-primary">Intelligence</span> & <span className="text-primary">Scalability</span>
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Lead Full Stack Mobile & AI Developer with 7+ years of experience building scalable fintech, AI-driven, and cross-platform applications using Flutter, Dart, Swift, Java, and Python. Specialized in high-performance cross-platform products with real-time features, payment integrations, and cloud automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {infoList.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/60">{item.label}</p>
                    <p className="font-medium text-white/90">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-glass border-white/5">
                  <CardContent className="p-4 text-center">
                    <h4 className="text-3xl font-bold text-primary mb-1">{stat.value}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}