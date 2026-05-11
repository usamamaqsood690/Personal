import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Lead Full Stack Mobile & AI Developer",
    company: "Inexor Inc",
    location: "Islamabad",
    period: "Mar 2025 – May 2025",
    bullets: [
      "Lead developer on Wealth NX AI — an AI-powered fintech application for the US market, shipped on both iOS and Android, featuring AI-driven financial insights, real-time analytics, and secure payment flows.",
      "Led fintech mobile app development with real-time sockets, AI chatbot, and financial transaction modules.",
      "Managed Google Play Store and Apple App Store accounts — building, signing, and uploading production releases on both platforms.",
      "Integrated Meta Events (Facebook SDK), Adjust attribution, Firebase Analytics, and Microsoft Clarity for full-stack in-app analytics and user behaviour tracking.",
      "Managed sprints, backlog grooming, and release planning in Jira; maintained codebase via GitHub and Bitbucket with branch strategies and PR reviews.",
      "Led cross-functional teams, enforced code standards, drove CI/CD pipelines and unit/widget/integration test coverage.",
    ],
  },
  {
    role: "Technical Lead AI & Mobile App Developer",
    company: "Mediatiz Foundation",
    location: "Islamabad",
    period: "Jul 2024 – Apr 2025",
    bullets: [
      "Built AI chatbot (PyBot) using GPT & Gemini LLM technologies.",
      "Developed LMS mobile app with JazzCash & HBL payment gateway integrations.",
      "Integrated Firebase Analytics events and Meta Events for campaign attribution and user funnel analysis.",
      "Managed Play Store and App Store submissions, release tracks, and store listing optimisation.",
      "Optimised mobile performance by 40%, improving user retention by 25%.",
    ],
  },
  {
    role: "Senior Mobile App Developer",
    company: "GFM | Mubasher",
    location: "Islamabad (Remote)",
    period: "Jan 2024 – Sep 2025",
    bullets: [
      "Developed Flutter applications for Android and iOS serving 100K+ active users across the MENA region.",
      "Built trading and financial apps with secure authentication and real-time price tracking.",
      "Managed Play Store and App Store deployments — version management, release notes, and compliance reviews.",
      "Integrated Adjust SDK for mobile attribution and Firebase Analytics for event tracking and funnel reporting.",
      "Built custom Flutter + Native plugins for performance-critical modules, improving speed by 40%.",
    ],
  },
  {
    role: "Team Lead Flutter Developer",
    company: "Claystone Tech",
    location: "Islamabad",
    period: "Jun 2023 – Feb 2024",
    bullets: [
      "Led development of enterprise-level real estate mobile apps with geolocation and secure authentication.",
      "Architected DHA Resident, DHA CTT, and Askari QA apps for government and real estate systems.",
      "Managed end-to-end Play Store and App Store publishing including internal testing tracks and staged rollouts.",
      "Integrated Microsoft Clarity for session recording and heatmap analysis on key user flows.",
      "Collaborated with cross-functional teams delivering high-performance, API-integrated solutions.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "ISYSTECH IT Solutions",
    location: "Islamabad",
    period: "Dec 2022 – May 2023",
    bullets: [
      "Developed Free Wi-Fi Spot — a secure, location-based connectivity solution for public and commercial users.",
      "Engineered ad monetisation modules (AdMob) with advanced targeting and native ad formats.",
      "Integrated Meta Events to track install attribution and in-app engagement for ad campaigns.",
      "Designed and launched Wallpapers & Frames apps with high-performance image rendering and user personalisation.",
      "Managed Play Store listings, store screenshots, and keyword optimisation.",
    ],
  },
  {
    role: "Android Developer",
    company: "Regal Systems",
    location: "Sahiwal",
    period: "Mar 2020 – Dec 2021",
    bullets: [
      "Developed and deployed high-performance Android and Flutter applications.",
      "Integrated REST APIs and third-party libraries to enhance app functionality.",
      "Handled Play Store account management, app signing, and production releases.",
      "Built high-volume, low-latency systems for mission-critical operations.",
    ],
  },
  {
    role: "Founder & CEO",
    company: "Stack Stars IT Center",
    location: "Islamabad",
    period: "2018 – Present",
    bullets: [
      "Founded and scaled a tech company specialising in AI and cross-platform mobile development.",
      "Managed Google Play Store and Apple App Store developer accounts across multiple client products.",
      "Implemented Meta Events, Adjust, Firebase Analytics, and Microsoft Clarity for client apps as part of full-service delivery.",
      "Led teams of developers, designers, and engineers delivering enterprise-grade solutions for international clients.",
      "Maintained a 100% on-time delivery record with strong client satisfaction through strategic planning and QA.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
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
            Professional Experience
            <span className="w-12 h-[2px] bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A track record of leadership and technical excellence across startups and enterprises.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline central line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start group">
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 -translate-x-1/2 mt-6 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-card/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all hover:bg-card hover:-translate-y-1 shadow-lg group-hover:shadow-[0_5px_20px_rgba(0,255,255,0.1)] relative overflow-hidden"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
                      
                      <div className={`flex items-center gap-2 text-primary text-sm font-mono mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      
                      <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <Briefcase size={16} />
                        <span className="font-medium text-white/70">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30 mx-1"></span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}