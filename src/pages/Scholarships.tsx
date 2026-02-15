import { motion } from "framer-motion";
import { Award, GraduationCap, Globe, DollarSign } from "lucide-react";
import Layout from "@/components/Layout";

const scholarships = [
  { title: "Chevening Scholarships", country: "United Kingdom", value: "Full tuition + living costs", desc: "Funded by the UK government, Chevening offers awards to outstanding individuals with leadership potential.", deadline: "November (annually)" },
  { title: "Commonwealth Scholarships", country: "United Kingdom", value: "Full funding", desc: "For students from Commonwealth countries to pursue Master's and PhD programmes in the UK.", deadline: "Varies by country" },
  { title: "Fulbright Program", country: "United States", value: "Full tuition + stipend", desc: "One of the most prestigious scholarship programmes for international students studying in the US.", deadline: "October (annually)" },
  { title: "Australia Awards", country: "Australia", value: "Full tuition + living costs", desc: "Australian Government scholarships for students from developing countries to study at Australian universities.", deadline: "April (annually)" },
  { title: "Vanier Canada Graduate Scholarships", country: "Canada", value: "CAD $50,000/year", desc: "For doctoral students who demonstrate leadership skills and a high standard of scholarly achievement.", deadline: "November (annually)" },
  { title: "New Zealand Excellence Awards", country: "New Zealand", value: "Up to NZD $10,000", desc: "Partial scholarships for international students pursuing undergraduate or postgraduate study in New Zealand.", deadline: "March (annually)" },
];

const Scholarships = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Scholarships</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">Fund Your Education Abroad</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help you discover and apply for scholarships that can significantly reduce or fully cover the cost of your international education.
            </p>
          </motion.div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Award, label: "Scholarships Listed", value: "200+" },
              { icon: DollarSign, label: "Total Value Available", value: "$5M+" },
              { icon: GraduationCap, label: "Students Funded", value: "150+" },
              { icon: Globe, label: "Countries Covered", value: "5" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <stat.icon size={28} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-display font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Scholarship list */}
          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium shrink-0 ml-2">{s.country}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold text-secondary">{s.value}</span>
                  <span className="text-muted-foreground">Deadline: {s.deadline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarships;
