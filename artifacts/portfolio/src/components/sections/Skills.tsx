import { motion } from "framer-motion";
import { 
  SiFlutter, SiDart, SiAndroid, SiApple, SiFirebase, 
  SiGooglecloud, SiPython, SiSwift, SiOpenjdk, SiGoogleplay, SiMeta,
  SiGithub, SiJira, SiBitbucket, SiGit
} from "react-icons/si";

const skillBars = [
  { name: "Flutter + Dart", percentage: 100 },
  { name: "AI Development", percentage: 90 },
  { name: "Swift", percentage: 80 },
  { name: "Java", percentage: 85 },
  { name: "Front-End Development", percentage: 95 },
  { name: "REST API Integration", percentage: 100 },
  { name: "Cloud & Integrations", percentage: 100 },
  { name: "Back-End Development", percentage: 100 },
  { name: "Architecture & Tools", percentage: 90 },
  { name: "Fintech Expertise", percentage: 85 },
  { name: "ASO (Play Store & App Store)", percentage: 95 },
  { name: "Meta Events & Adjust SDK", percentage: 90 },
  { name: "Firebase Analytics", percentage: 95 },
  { name: "Microsoft Clarity", percentage: 88 },
  { name: "GitHub / Bitbucket (Version Control)", percentage: 100 },
  { name: "Jira (Project & Sprint Management)", percentage: 92 },
  { name: "CI/CD & DevOps", percentage: 88 },
];

const techStack = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Android", icon: SiAndroid, color: "#3DDC84" },
  { name: "iOS", icon: SiApple, color: "#FFFFFF" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Swift", icon: SiSwift, color: "#F05138" },
  { name: "Java", icon: SiOpenjdk, color: "#007396" },
  { name: "REST APIs", icon: null },
  { name: "UI/UX", icon: null },
  { name: "Wireframing", icon: null },
  { name: "Prototyping", icon: null },
  { name: "Play Store (ASO)", icon: SiGoogleplay, color: "#01875F" },
  { name: "App Store (ASO)", icon: SiApple, color: "#FFFFFF" },
  { name: "Meta Events", icon: SiMeta, color: "#0082FB" },
  { name: "Adjust SDK", icon: null },
  { name: "Firebase Analytics", icon: SiFirebase, color: "#FFCA28" },
  { name: "Microsoft Clarity", icon: null },
  { name: "Consultancy", icon: null },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
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
            Technical Arsenal
            <span className="w-12 h-[2px] bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit forged through years of building high-performance 
            applications and solving complex engineering challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              Core Proficiency
            </h3>
            {skillBars.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/90 font-medium">{skill.name}</span>
                  <span className="text-primary font-mono">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Cloud */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] cursor-default"
                >
                  {tech.icon && (
                    <tech.icon 
                      className="text-xl" 
                      style={{ color: tech.color }} 
                    />
                  )}
                  <span className="font-medium text-white/80">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold text-white mb-2">Always Learning</h4>
              <p className="text-muted-foreground">
                Currently exploring advanced techniques in edge AI, on-device ML model optimization, 
                and next-generation cross-platform rendering architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}