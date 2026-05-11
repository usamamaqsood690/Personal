import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-card/20">
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
            Academic Background
            <span className="w-12 h-[2px] bg-primary"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-glass border-white/5 h-full relative overflow-hidden group card-hover">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-2"></div>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <GraduationCap size={24} />
                </div>
                <div className="text-sm font-mono text-primary mb-1">2022 – 2024</div>
                <h3 className="text-2xl font-bold text-white">MS Artificial Intelligence</h3>
                <p className="text-lg text-white/70 font-medium">FAST-NU, Islamabad</p>
              </CardHeader>
              <CardContent>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <BookOpen size={18} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-white/90">Research Focus</h4>
                      <p className="text-muted-foreground text-sm">Tiny Object Detection through Satellite Images & Spiking Neural Networks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-white/90">Achievements</h4>
                      <p className="text-muted-foreground text-sm">Specialized in cutting-edge AI methodologies applied to computer vision.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-glass border-white/5 h-full relative overflow-hidden group card-hover">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/20 transition-all duration-300 group-hover:bg-primary group-hover:w-2"></div>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div className="text-sm font-mono text-muted-foreground mb-1">2017 – 2021</div>
                <h3 className="text-2xl font-bold text-white">BS Computer Science</h3>
                <p className="text-lg text-white/70 font-medium">University of Sahiwal, Pakistan</p>
              </CardHeader>
              <CardContent>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <BookOpen size={18} className="text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                    <div>
                      <h4 className="font-medium text-white/90">Core Curriculum</h4>
                      <p className="text-muted-foreground text-sm">Algorithms, Data Structures, Software Engineering, Database Systems.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                    <div>
                      <h4 className="font-medium text-white/90">Foundations</h4>
                      <p className="text-muted-foreground text-sm">Established strong fundamental computer science skills that power complex modern application architectures.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}