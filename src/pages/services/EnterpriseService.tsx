import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Workflow,
  Database,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const solutions = [
  {
    icon: Building2,
    title: "ERP & Enterprise Business System",
    description:
      "Pengembangan sistem ERP dan aplikasi enterprise untuk mengelola operasional bisnis secara terintegrasi.",
    features: [
      "ERP Custom (Finance, Ops, Inventory)",
      "Multi-Department System",
      "Enterprise Dashboard",
      "Scalable Architecture",
    ],
  },
  {
    icon: Users,
    title: "HRIS & Talent Management",
    description:
      "Sistem Human Resource untuk payroll, attendance, recruitment, dan performance management.",
    features: [
      "Payroll & Attendance",
      "Employee Self Service",
      "Recruitment System",
      "Performance Tracking",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation & Approval System",
    description:
      "Otomatisasi proses approval dan workflow bisnis untuk meningkatkan efisiensi internal.",
    features: [
      "Approval Flow System",
      "Process Automation",
      "Audit Trail",
      "Role-Based Access Control",
    ],
  },
  {
    icon: Database,
    title: "Enterprise Data Management",
    description:
      "Manajemen data terpusat untuk reporting, analytics, dan business intelligence.",
    features: [
      "Data Warehouse",
      "BI Dashboard",
      "Data Integration",
      "High Availability Database",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Keamanan sistem enterprise dengan standar compliance dan best practices.",
    features: [
      "Access Control & IAM",
      "Secure Authentication",
      "Audit Logs",
      "ISO-Oriented Practices",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Business Process Assessment",
    description:
      "Memahami proses bisnis perusahaan dan kebutuhan sistem enterprise.",
  },
  {
    step: "02",
    title: "System Architecture & Planning",
    description:
      "Merancang arsitektur enterprise system yang scalable dan secure.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "Pengembangan sistem enterprise dan integrasi dengan sistem existing.",
  },
  {
    step: "04",
    title: "Deployment & Continuous Improvement",
    description:
      "Implementasi, training user, serta peningkatan berkelanjutan.",
  },
];

export default function EnterpriseService() {
  return (
    <Layout>
      <PageTransition>

        {/* HERO */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
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
                Enterprise Systems untuk Operasional Perusahaan Modern
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-foreground/80 leading-relaxed"
              >
                MYTECH Indonesia membangun sistem enterprise seperti ERP, HRIS, dan aplikasi internal 
                untuk meningkatkan efisiensi operasional, kontrol bisnis, dan scalability perusahaan Anda.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Konsultasi Enterprise Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link to="/portfolio">Lihat Portfolio</Link>
                </Button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="py-20">
          <div className="container mx-auto px-6">

            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Solusi Enterprise dari MYTECH
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Solusi sistem enterprise untuk meningkatkan efisiensi operasional, kontrol manajemen, dan pertumbuhan bisnis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all border border-transparent hover:border-accent/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-5">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {f}
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

            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Proses Implementasi Enterprise System
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="text-center"
                >
                  <div className="text-5xl font-serif font-bold text-accent/20 mb-3">
                    {step.step}
                  </div>

                  <h3 className="text-lg font-serif font-semibold mb-2">
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
                  Siap Membangun Sistem Enterprise?
                </h2>

                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  Konsultasikan kebutuhan ERP dan enterprise system Anda bersama tim MYTECH dan dapatkan solusi terbaik.
                </p>

                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Konsultasi Enterprise Gratis
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
}
