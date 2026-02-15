import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  Globe,
  Heart,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import teamImage from "@/assets/image1 (1).png";
import scholarImage from "@/assets/image2.png";
import mentoringImage from "@/assets/image3.png";
import testifyImage from "@/assets/image4.JPG";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

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
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Horrizon Hoppers
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6 leading-tight">
              We Are More Than a
              <span className="gradient-text"> Consultancy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a family of dreamers, mentors, and believers who understand
              the power of education to transform lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-4xl font-display font-bold mt-3 mb-6">
                Born from<span className="gradient-text"> Struggle</span>, Built
                on <span className="gradient-text">Love</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Horrizon Hoppers started as a group of high school classmates
                who refused to let borders limit our dreams. We navigated the
                complexity of international education alone—struggling,
                learning, and eventually succeeding.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Now studying at universities across Asia, Europe, and North
                America, we realized something profound: our struggle was a
                gift. It taught us that with the right guidance and support, any
                student can achieve world-class education.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-semibold italic text-primary">
                That's why we created Horrizon Hoppers— to ensure no student has
                to struggle alone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
                <img
                  src={teamImage}
                  alt="Horrizon Hoppers Team"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 max-w-xs"
              >
                <p className="text-sm font-semibold text-foreground">
                  "We deeply care about every student's journey"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  — The Horrizon Hoppers Team
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Through Mentorship */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/20">
                <img
                  src={mentoringImage}
                  alt="Mentoring Students"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 max-w-xs"
              >
                <p className="text-sm font-semibold text-foreground">
                  Guiding Students to Success
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  One mentee, one dream at a time
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Impact
              </span>
              <h2 className="text-4xl font-display font-bold mt-3 mb-6">
                Mentorship That
                <span className="gradient-text"> Changes Lives</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We don't just process applications. We mentor students from high
                school through university, building relationships that last a
                lifetime.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "One-on-one guidance through critical decisions",
                  "Personal growth beyond academics",
                  "Support through challenges and victories",
                  "Career mentoring and alumni networking",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-secondary font-bold text-xl">→</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Real Stories
            </span>
            <h2 className="text-4xl font-display font-bold mt-3">
              Our Scholars,<span className="gradient-text"> Our Proudest</span>{" "}
              Moments
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-accent/20">
                <img
                  src={scholarImage}
                  alt="Successful Scholar at American University"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-3xl p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Scholar Spotlight
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Thriving at{" "}
                  <span className="gradient-text">American University</span>,
                  Bulgaria
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "When I first connected with Horrizon Hoppers, I was scared.
                  But they didn't treat me like a client—they treated me like
                  family. They celebrated my wins, picked me up during my
                  doubts, and made me believe that studying abroad wasn't just
                  possible, it was inevitable."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    "Now I'm here,
                  </span>{" "}
                  living my dream, and the team still checks in on me. That's
                  not business—that's love."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-3xl p-10">
                <h3 className="text-2xl font-display font-bold mb-4">
                  <span className="gradient-text">Our Commitment</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We measure our success not in placements, but in dreams
                  realized. Not in fees collected, but in lives transformed.
                  Every student who walks through our door becomes part of our
                  family.
                </p>
                <p className="text-foreground font-semibold italic">
                  "More than money. More than consultancy. We are your Horrizon
                  Hoppers."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={testifyImage}
                  alt="Team and Students Together"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Heart size={48} className="text-red-500 fill-red-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-card border border-border rounded-3xl p-10 hover-lift"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower students worldwide with access to world-class
                education by providing expert guidance, personalized support,
                and unwavering commitment to their success—treating every
                student as family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-3xl p-10 hover-lift"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-secondary" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A world where passion and potential matter more than passport.
                Where every dreamer has a mentor, every barrier has a solution,
                and education knows no borders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold">
              Why We're Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "We Care Genuinely",
                desc: "Your dreams are our mission. We celebrate your victories and support you through challenges.",
              },
              {
                icon: Users,
                title: "We're a Family",
                desc: "Every student is more than a case file. You become part of the Horrizon Hoppers family.",
              },
              {
                icon: Globe,
                title: "We Have Global Experience",
                desc: "Our team is scattered across universities worldwide, speaking from lived experience.",
              },
              {
                icon: Award,
                title: "We Deliver Results",
                desc: "Track record of 500+ successful placements with over 98% visa approval rates.",
              },
              {
                icon: Eye,
                title: "We're Transparent",
                desc: "No hidden fees, no false promises. Just honest guidance and clear timelines.",
              },
              {
                icon: Target,
                title: "We Go the Distance",
                desc: "From day one to graduation and beyond—we're with you every step of the way.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted/50 rounded-2xl p-8 border border-border hover-lift"
              >
                <item.icon size={32} className="text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's talk about your dreams and how we can help you achieve them
              together.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-10 py-4 rounded-xl hover-lift"
            >
              Start Your Journey <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
