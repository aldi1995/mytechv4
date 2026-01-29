import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  Workflow,
  Shield,
  ArrowRight,
  Check,
  Cloud,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const solutions = [
  {
    icon: Code2,
    title: "Custom Web Application",
    description:
      "Pengembangan aplikasi web custom sesuai kebutuhan bisnis, scalable, dan high performance.",
    features: [
      "Dashboard & Admin Panel",
      "Enterprise Web App",
      "API Development",
      "Sistem Internal Perusahaan",
    ],
  },
  {
    icon: Smartphone,
    title: "Custom Mobile Application",
    description:
      "Aplikasi mobile Android & iOS yang dirancang khusus untuk kebutuhan operasional dan customer.",
    features: [
      "Android & iOS App",
      "Cross-platform (React Native / Flutter)",
      "Offline Mode",
      "Realtime Sync",
    ],
  },
  {
    icon: Database,
    title: "Backend & Database System",
    description:
      "Backend scalable dengan database yang aman, cepat, dan siap untuk data besar.",
    features: [
      "REST API & GraphQL",
      "Database Design & Optimization",
      "Microservices Architecture",
      "High Availability Setup",
    ],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Otomatisasi workflow dan proses bisnis untuk meningkatkan efisiensi operasional.",
    features: [
      "Workflow Automation",
      "ERP Custom Module",
      "Approval System",
      "Integration with 3rd Party",
    ],
  },
  {
    icon: Brain,
    title: "AI-Powered Features",
    description:
      "Integrasi AI untuk analitik, rekomendasi, chatbot, dan smart automation.",
    features: [
      "AI Chatbot",
      "Predictive Analytics",
      "Recommendation Engine",
      "OCR & NLP",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Keamanan aplikasi enterprise dengan best practices dan standar industri.",
    features: [
      "Authentication & Role System",
      "Secure API & Encryption",
      "Audit Log & Monitoring",
      "Security Hardening",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analisis Kebutuhan",
    description:
      "Kami memahami proses bisnis Anda untuk merancang solusi yang tepat.",
  },
  {
    step: "02",
    title: "Desain Arsitektur & UI/UX",
    description:
      "Menyusun sistem architecture dan desain antarmuka yang optimal.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Pengembangan dengan best practices, scalable, dan quality assurance.",
  },
  {
    step: "04",
    title: "Deployment & Maintenance",
    description:
      "Peluncuran sistem, monitoring, dan support berkelanjutan.",
  },
];

const SoftwareCustom = () => {
  return (
    <Layout>
      <PageTransition>

        {/* HERO */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
              >
                Layanan MYTECH
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
              >
                Software Custom untuk Bisnis Anda
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-foreground/80 leading-relaxed"
              >
                Kami mengembangkan software custom yang dirancang khusus untuk kebutuhan bisnis Anda —
                mulai dari sistem internal, aplikasi web & mobile, hingga platform enterprise.
              </motion.p>

            </div>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all group border border-transparent hover:border-accent/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">

            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent font-medium text-sm uppercase tracking-wider"
              >
                Cara Kerja Kami
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4"
              >
                Proses Pengembangan Software
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-serif font-bold text-accent/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                  Siap Bangun Software Custom?
                </h2>

                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  Konsultasikan kebutuhan sistem Anda dengan tim MYTECH dan dapatkan solusi terbaik untuk bisnis Anda.
                </p>

                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

              </div>
            </motion.div>
          </div>
        </section>

      </PageTransition>
    </Layout>
  );
};

export default SoftwareCustom;
