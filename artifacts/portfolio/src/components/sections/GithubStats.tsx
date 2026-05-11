import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GithubStats() {
  return (
    <section className="py-24 relative bg-card/10 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Github className="text-primary" size={32} />
              Open Source Code
            </h2>
            <p className="text-muted-foreground">
              Consistent contributions and continuous integration.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm p-4 flex justify-center hover:border-primary/30 transition-colors"
          >
            <img 
              src="https://github-readme-stats.vercel.app/api?username=usamamaqsood690&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000" 
              alt="GitHub Stats" 
              className="w-full max-w-[450px] object-contain filter drop-shadow-[0_0_10px_rgba(0,255,255,0.1)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm p-4 flex justify-center hover:border-primary/30 transition-colors"
          >
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=usamamaqsood690&theme=tokyonight&hide_border=true&background=00000000" 
              alt="GitHub Streak" 
              className="w-full max-w-[450px] object-contain filter drop-shadow-[0_0_10px_rgba(0,255,255,0.1)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}