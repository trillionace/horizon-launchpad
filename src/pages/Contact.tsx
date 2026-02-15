import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about studying abroad? Reach out to our friendly team for a free consultation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email Us", detail: "info@horizonhoppers.com" },
                { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Visit Us", detail: "123 Education Lane, London, UK" },
                { icon: Clock, title: "Office Hours", detail: "Mon - Fri: 9:00 AM - 6:00 PM" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card border border-border rounded-2xl p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Send size={28} className="text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-center">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Destination Country</label>
                      <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select a country</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>New Zealand</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your study abroad plans..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="gradient-bg text-primary-foreground font-semibold px-8 py-3 rounded-xl hover-lift inline-flex items-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
