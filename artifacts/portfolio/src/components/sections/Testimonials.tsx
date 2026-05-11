import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Khuram Shahzad",
    role: "Investment Analyst | Quantitative Analytics",
    date: "February 2026",
    relation: "Worked with Usama on different teams",
    avatar: "KS",
    content: "Usama is a skilled full-stack developer with strong domain knowledge. He demonstrates remarkable composure under pressure, efficiently troubleshooting issues while guiding his team. I remember working with him on improving the Market Stats UI and integrating CoinGecko endpoints, including setting up the Postman environment — he was confident, focused, and open to ideas from others. His combination of technical skill, calm approach, and humility makes him a pleasure to collaborate with.",
  },
  {
    name: "Ahmad Mujtaba",
    role: "Full-stack QA Engineer | Playwright, Cypress, Selenium",
    date: "January 2025",
    relation: "Worked on the same team",
    avatar: "AM",
    content: "Working with Usama Maqsood on the Khudi app was a standout experience, especially given our tight timelines. His expertise as a Flutter developer ensured we met our deadlines without sacrificing quality. Usama's technical skill, creative problem-solving, and collaborative spirit were crucial to our success. Now, as he leads AI initiatives at the Mediatiz Foundation, he brings the same passion, innovation, and strong leadership that made such a positive impact on our team.",
  },
  {
    name: "Maryam Sana",
    role: "AI & Robotics Researcher | Python Developer | MSAI @FAST NUCES",
    date: "January 2025",
    relation: "Usama was senior",
    avatar: "MS",
    content: "Working with Usama as our Team Lead was an excellent experience. Usama's leadership is characterised by his dedication and ability to guide the team effectively while maintaining high-quality work. I highly recommend him for any leadership position in AI.",
  },
  {
    name: "Muhammad Haroon",
    role: "Business Analyst @Teresol",
    date: "January 2025",
    relation: "Worked on the same team at Mediatiz",
    avatar: "MH",
    content: "I had the privilege of working with Mr. Usama at Mediatiz Foundation, where he demonstrated exceptional leadership and expertise in Artificial Intelligence and mobile app development. His technical skills, innovative approach, and ability to guide the team effectively made him a remarkable team lead. Mr. Usama's commitment to delivering exceptional results and his remarkable problem-solving skills were truly inspiring. It was an absolute pleasure working under his guidance.",
  },
  {
    name: "Aqsa Maqsood",
    role: "QA Engineer | Playwright | Postman API | Firebase | Agile & Scrum Testing | Jira",
    date: "November 2023",
    relation: "Reported to Usama directly",
    avatar: "AQ",
    content: "Usama Maqsood is a wonderful mobile app developer. His commitment to delivering top-quality apps with reusable code is truly impressive. He excels in managing multiple tasks efficiently and always meets deadlines with precision.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

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
            LinkedIn Recommendations
            <span className="w-12 h-[2px] bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Verified endorsements from colleagues and teammates on LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="bg-glass border-white/5 h-full relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute top-5 right-5 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote size={48} />
                </div>

                <CardContent className="p-7 flex flex-col h-full relative z-10">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-white/8 pt-5 mt-auto">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold font-mono text-sm tracking-wider shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-white font-bold text-sm truncate">{testimonial.name}</h4>
                          <Linkedin size={13} className="text-[#0A66C2] shrink-0" />
                        </div>
                        <p className="text-muted-foreground text-xs leading-snug mt-0.5 line-clamp-2">{testimonial.role}</p>
                        <p className="text-primary/60 text-xs font-mono mt-1">{testimonial.date} · {testimonial.relation}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
