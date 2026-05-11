import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: MapPin,
    title: "Location",
    value: "Islamabad, Pakistan",
    link: null,
    action: "Based in",
    color: "from-blue-500/20 to-blue-500/0 text-blue-400"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat Instantly",
    link: "https://wa.me/923011031213",
    action: "Message",
    color: "from-green-500/20 to-green-500/0 text-green-400"
  },
  {
    icon: Mail,
    title: "Email",
    value: "usamamaqsood416@gmail.com",
    link: "mailto:usamamaqsood416@gmail.com",
    action: "Send Email",
    color: "from-primary/20 to-primary/0 text-primary"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/usamamaqsoodai",
    action: "Connect",
    color: "from-blue-600/20 to-blue-600/0 text-blue-500"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "View Repositories",
    link: "https://github.com/usamamaqsood690",
    action: "Follow",
    color: "from-gray-500/20 to-gray-500/0 text-gray-400"
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "Social Profile",
    link: "https://www.facebook.com/usama.maqsood.75",
    action: "Message",
    color: "from-blue-700/20 to-blue-700/0 text-blue-600"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.05)_0%,transparent_50%)] z-0" />
      
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
            Let's Collaborate
            <span className="w-12 h-[2px] bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Available for freelance opportunities. Have an exciting project you need help with? 
            Send me an email or contact me via instant message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card/30 backdrop-blur-md border-white/5 hover:border-white/20 transition-all duration-300 group overflow-hidden h-full">
                <a 
                  href={method.link || "#"} 
                  target={method.link ? "_blank" : "_self"} 
                  rel="noopener noreferrer"
                  className={`block h-full ${!method.link ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <CardContent className="p-6 relative flex flex-col items-center text-center h-full">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-background border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <method.icon size={28} className={method.color.split(' ').pop()} />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{method.value}</p>
                      
                      <div className="mt-auto inline-flex items-center text-xs font-mono font-medium text-white/50 group-hover:text-white transition-colors">
                        {method.action} <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
                      </div>
                    </div>
                  </CardContent>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}