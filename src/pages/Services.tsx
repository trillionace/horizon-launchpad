import { motion } from "framer-motion";
import { FileText, BookOpen, Globe, Award, Plane, Home, GraduationCap, Languages } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: FileText, title: "University Application Support", desc: "We guide you through every step of the application process — from choosing the right universities to crafting compelling personal statements and preparing supporting documents.", color: "bg-primary/10 text-primary" },
  { icon: BookOpen, title: "Course & University Selection", desc: "Our advisors help you find the ideal course and institution based on your academic background, career aspirations, and personal preferences.", color: "bg-secondary/10 text-secondary" },
  { icon: Globe, title: "Visa & Immigration Guidance", desc: "Navigate complex visa requirements with confidence. We provide step-by-step support for student visa applications with a 98% success rate.", color: "bg-accent/10 text-accent-foreground" },
  { icon: Award, title: "Scholarship & Funding Support", desc: "Access exclusive scholarship opportunities and receive expert guidance on funding applications, bursaries, and financial aid options.", color: "bg-primary/10 text-primary" },
  { icon: Languages, title: "IELTS & English Test Preparation", desc: "Boost your English proficiency scores with tailored preparation resources and tips for IELTS, TOEFL, and other language tests.", color: "bg-secondary/10 text-secondary" },
  { icon: Plane, title: "Pre-Departure Briefing", desc: "Get ready for life abroad with our comprehensive pre-departure sessions covering accommodation, banking, culture, and more.", color: "bg-accent/10 text-accent-foreground" },
  { icon: Home, title: "Accommodation Assistance", desc: "We help you find safe, affordable housing near your university, whether it's on-campus halls or private accommodation.", color: "bg-primary/10 text-primary" },
  { icon: GraduationCap, title: "Career Counselling", desc: "Plan your career path with expert advice on post-graduation opportunities, work permits, and professional development abroad.", color: "bg-secondary/10 text-secondary" },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">How We Help You Succeed</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From your first enquiry to settling into your new university, Horizon Hoppers offers comprehensive services to make your study abroad journey smooth and successful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-8 hover-lift flex gap-6"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center shrink-0`}>
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
