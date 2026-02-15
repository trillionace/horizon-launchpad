import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  ArrowRight,
  Plane,
  Award,
  FileText,
  Star,
  Brain,
  Handshake,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary hero-blob animate-blob animate-pulse-soft" />
          <div
            className="absolute top-20 right-0 w-[400px] h-[400px] bg-secondary hero-blob animate-blob animate-pulse-soft"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-accent hero-blob animate-blob animate-pulse-soft"
            style={{ animationDelay: "6s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex flex-col items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
              >
                <Plane size={16} />
                <span className="font-bold">Horrizon</span>
                <span className="font-bold">Hoppers</span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
              >
                Hop Beyond <span className="gradient-text">Horizons</span>
                <br />
                Study Abroad
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
              >
                We help ambitious students gain admission to leading
                universities around the world. From applications to visas, we
                handle every step.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-4 rounded-xl hover-lift"
                >
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-card text-foreground font-semibold px-8 py-4 rounded-xl border border-border hover-lift"
                >
                  Free Consultation
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroBg}
                  alt="Students at university"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 top-1/4 glass-card rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <GraduationCap
                    size={20}
                    className="text-secondary-foreground"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Accepted!
                  </div>
                  <div className="text-xs text-muted-foreground">
                    University of Oxford
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-4 bottom-1/4 glass-card rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Award size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Scholarship Won
                  </div>
                  <div className="text-xs text-muted-foreground">
                    $25,000 Award
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-4xl font-display font-bold mt-2">
              Our Core Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Application Support",
                desc: "Expert guidance on university applications, personal statements, and documentation.",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: BookOpen,
                title: "Course Selection",
                desc: "Find the perfect programme aligned with your career goals and academic interests.",
                color: "bg-secondary/10 text-secondary",
              },
              {
                icon: Globe,
                title: "Visa Assistance",
                desc: "Complete visa guidance with a 98% success rate across all destinations.",
                color: "bg-accent/10 text-accent-foreground",
              },
              {
                icon: Award,
                title: "Scholarship Search",
                desc: "Access exclusive scholarships and funding opportunities for international students.",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Brain,
                title: "Exam Prep & Registration",
                desc: "SAT, ACT, GRE, GMAT, IELTS, TOEFL preparation and registration guidance. Resources: Khan Academy, Kaplan, Princeton Review, Magoosh, Cambridge English.",
                color: "bg-secondary/10 text-secondary",
              },
              {
                icon: Handshake,
                title: "Mentorship Program",
                desc: "One-on-one mentorship from high school through university. Get guidance on subject selection, study strategies, career planning, and personal development.",
                color: "bg-accent/10 text-accent-foreground",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 hover-lift border border-border"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5`}
                >
                  <service.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Destinations
            </span>
            <h2 className="text-4xl font-display font-bold mt-2">
              Study in Top Universities found in Countries like
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "United Kingdom", emoji: "🇬🇧" },
              { name: "United States", emoji: "🇺🇸" },
              { name: "Canada", emoji: "🇨🇦" },
              { name: "Australia", emoji: "🇦🇺" },
              { name: "New Zealand", emoji: "🇳🇿" },
              { name: "France", emoji: "🇫🇷" },
              { name: "Italy", emoji: "🇮🇹" },
              { name: "Russia", emoji: "🇷🇺" },
            ].map((country, i) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover-lift cursor-pointer"
              >
                <div className="text-5xl mb-3">{country.emoji}</div>
                <h3 className="font-display font-semibold">{country.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="text-4xl font-display font-bold mt-2">
              What Our Students Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ekwede Ashley",
                uni: "University of Federico II, Italy",
                quote:
                  "Horrizon Hoppers made my dream of studying in Canada a reality. Their team was with me every step of the way!",
              },
              {
                name: "Ewane trevino",
                uni: "Bulent Ecevit University, Turkey",
                quote:
                  "The scholarship guidance alone saved me thousands. I couldn't have navigated the UK application process without them.",
              },
              {
                name: "Awudu Meleng",
                uni: "American University of Bulgaria",
                quote:
                  "From IELTS prep to visa approval, the team handled everything professionally. Highly recommended!",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.uni}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Really Are */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-4xl font-display font-bold mt-2 mb-4">
              Who We Really Are
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card border border-border rounded-3xl p-10 md:p-14 shadow-lg">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                <span className="font-semibold text-foreground block">
                  Horrizon
                  <br />
                  Hoppers
                </span>{" "}
                is an education initiative founded by a group of high school
                classmates who refused to let the walls of their birth country
                define the size of their dreams. We discovered global
                scholarships and opportunities the hard way — with barely any
                guidance, no mentors, and a whole lot of trial and error.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                <span className="italic">(Spoiler: it was stressful!)</span>
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                But the struggle opened our eyes. If we could navigate all that
                alone, imagine how many more young people could "hop" into
                bigger horizons with the right support. So the idea of Horizon
                Hoppers was born — to help students uncover global
                opportunities, break barriers, and dream beyond borders.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Today, many of our co-founders are studying and thriving in
                amazing universities across Asia, Europe, and North America. And
                now we're on a mission to make sure we're not the last. We want
                to create a world full of "Hoppers" — bold learners curious
                enough to explore new places, new cultures, and new
                possibilities.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10 pt-8 border-t border-border"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-4 rounded-xl hover-lift transition-all"
                >
                  Learn More About Us <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-bg rounded-3xl p-12 md:p-16 text-center text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">
              Book a free consultation with our advisors and take the first step
              towards your international education.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-card text-foreground font-semibold px-8 py-4 rounded-xl hover-lift"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
