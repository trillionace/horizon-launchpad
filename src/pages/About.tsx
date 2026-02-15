import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Globe, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">Who We Are</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Horizon Hoppers is a dedicated education consultancy helping students achieve their dreams of studying abroad in English-speaking countries. With years of experience and a passionate team, we make the journey seamless.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower students worldwide with access to world-class education by providing expert guidance, personalised support, and unwavering commitment to their success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-secondary" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted bridge between ambitious students and top-tier international universities, creating a world where education knows no borders.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold">Why Choose Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Expert Advisors", desc: "Our counsellors have first-hand experience studying and working abroad." },
              { icon: Award, title: "Proven Track Record", desc: "Over 500 students successfully placed in top universities worldwide." },
              { icon: Globe, title: "Global Network", desc: "Partnerships with 50+ universities across 5 English-speaking countries." },
              { icon: Heart, title: "Personalised Approach", desc: "Every student receives a tailored plan based on their unique goals." },
              { icon: Target, title: "End-to-End Support", desc: "From course selection to airport pickup, we cover the entire journey." },
              { icon: Eye, title: "Transparent Process", desc: "No hidden fees, clear timelines, and honest guidance at every stage." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted/50 rounded-2xl p-8"
              >
                <item.icon size={28} className="text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
