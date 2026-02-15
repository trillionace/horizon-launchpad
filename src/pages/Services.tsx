import { motion } from "framer-motion";
import { useState } from "react";
import {
  FileText,
  BookOpen,
  Globe,
  Award,
  Plane,
  Home,
  GraduationCap,
  Languages,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: FileText,
    title: "University Application Support",
    desc: "We guide you through every step of the application process — from choosing the right universities to crafting compelling personal statements and preparing supporting documents.",
    color: "bg-primary/10 text-primary",
    details: [
      "Personalized university selection",
      "Personal statement writing assistance",
      "Document preparation and review",
      "Application strategy planning",
      "Interview preparation coaching",
      "Application tracking and follow-up",
    ],
  },
  {
    icon: BookOpen,
    title: "Course & University Selection",
    desc: "Our advisors help you find the ideal course and institution based on your academic background, career aspirations, and personal preferences.",
    color: "bg-secondary/10 text-secondary",
    details: [
      "Career path analysis",
      "Program compatibility assessment",
      "University ranking and comparison",
      "Specialization guidance",
      "Admission requirement review",
      "Timeline planning",
    ],
  },
  {
    icon: Globe,
    title: "Visa & Immigration Guidance",
    desc: "Navigate complex visa requirements with confidence. We provide step-by-step support for student visa applications with a 98% success rate.",
    color: "bg-accent/10 text-accent-foreground",
    details: [
      "Visa documentation preparation",
      "Application form guidance",
      "Financial proof compilation",
      "Interview preparation",
      "Rejection appeal support",
      "Post-visa coordination",
    ],
  },
  {
    icon: Award,
    title: "Scholarship & Funding Support",
    desc: "Access exclusive scholarship opportunities and receive expert guidance on funding applications, bursaries, and financial aid options.",
    color: "bg-primary/10 text-primary",
    details: [
      "Scholarship search and matching",
      "Essay and application writing",
      "Financial aid options exploration",
      "Bursary identification",
      "Funding timeline management",
      "Award negotiation support",
    ],
  },
  {
    icon: Languages,
    title: "Exam Prep & International Test Registration",
    desc: "SAT, ACT, GRE, GMAT, IELTS, TOEFL - we guide registration and provide preparation resources including Khan Academy, and Kaplan.",
    color: "bg-secondary/10 text-secondary",
    details: [
      "Khan Academy integration",
      "Kaplan resource guidance",
      "Princeton Review partnerships",
      "Mock test analysis",
      "Score improvement strategies",
      "Test date optimization",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    desc: "Get ready for life abroad with our comprehensive pre-departure sessions covering accommodation, banking, culture, and more.",
    color: "bg-accent/10 text-accent-foreground",
    details: [
      "Cultural orientation sessions",
      "Banking and finance setup",
      "Healthcare and insurance guidance",
      "Emergency preparedness",
      "Travel document review",
      "Packing and preparation tips",
    ],
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    desc: "We help you find safe, affordable housing near your university, whether it's on-campus halls or private accommodation.",
    color: "bg-primary/10 text-primary",
    details: [
      "On-campus housing applications",
      "Private rental guidance",
      "Lease review and negotiation",
      "Location and safety assessment",
      "Cost analysis and budgeting",
      "Move-in coordination",
    ],
  },
  {
    icon: GraduationCap,
    title: "Mentorship Program",
    desc: "One-on-one mentorship from high school through university covering subject selection, study strategies, career planning, and personal development.",
    color: "bg-secondary/10 text-secondary",
    details: [
      "High school subject guidance",
      "University success strategies",
      "Career development planning",
      "Personal growth coaching",
      "Peer networking facilitation",
      "Alumni mentor connections",
    ],
  },
];

interface FlipCardProps {
  service: (typeof services)[0];
  index: number;
}

// Flip Card Component
const FlipCard = ({ service, index }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-[420px] cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front of card */}
        <div
          style={{
            backfaceVisibility: "hidden",
          }}
          className="absolute w-full h-full bg-card border border-border rounded-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <div
              className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6`}
            >
              <service.icon size={28} />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            Learn More <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Back of card */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-primary">
              What's Included
            </h3>
            <ul className="space-y-2">
              {service.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Click to go back
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 leading-tight">
              Comprehensive Support for Your
              <span className="gradient-text"> Study Abroad</span> Journey
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From your first enquiry to settling into your new university,
              Horrizon Hoppers offers comprehensive services to make your study
              abroad journey smooth and successful.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              💡 Click on any card to explore what's included
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <FlipCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss which services are right for you and create a
              personalized plan for your study abroad journey.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-10 py-4 rounded-xl hover-lift"
            >
              Book a Free Consultation <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
