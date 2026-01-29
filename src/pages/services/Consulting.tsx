import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  BarChart3,
  Layers,
  ShieldCheck,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const consultingServices = [
  {
    icon: Briefcase,
    title: "IT Strategy & Roadmap",
    description:
      "Membantu perusahaan menyusun strategi IT jangka pendek dan jangka panjang yang selaras dengan tujuan bisnis.",
    features: [
      "Technology Roadmap Planning",
      "Digital Transformation Strategy",
      "IT Governance Framework",
      "Cost Optimization Strategy",
    ],
  },
  {
    icon: BarChart3,
    title: "Business & System Analysis",
    description:
      "Analisis kebutuhan bisnis dan sistem untuk menghasilkan solusi yang tepat dan scalable.",
    features: [
      "Business Requirement Analysis",
      "System Gap Analysis",
      "Process Mapping",
      "Solution Recommendation",
    ],
  },
  {
    icon: Layers,
    title: "Enterprise Architecture Advisory",
    description:
      "Perancangan arsitektur sistem enterprise yang scalable, secure, dan future-proof.",
    features: [
      "System Architecture Design",
      "Microservices Strategy",
      "Integration Architecture",
      "Scalability Planning",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Risk Consulting",
    description:
      "Evaluasi keamanan sistem dan manajemen risiko IT untuk memastikan compliance dan data protection.",
    features: [
      "Security Assessment",
      "Risk & Compliance Review",
      "Data Protection Strategy",
      "Security Policy Development",
    ],
  },
  {
    icon: Users,
    title: "IT Project Management",
    description:
      "Pendampingan project IT agar delivery tepat waktu, efisien, dan sesuai scope.",
    features: [
      "Agile & Scrum Advisory",
      "Project Governance",
      "Vendor Management",
      "Delivery Monitoring",
    ],
  },
  {
    icon: Lightbulb,
    title: "Digital Innovation Consulting",
    description:
      "Membantu perusahaan menciptakan produk digital baru berbasis inovasi dan market insight.",
    features: [
      "Product Ideation & Validation",
      "MVP Strategy",
      "Market & User Research",
      "Innovation Roadmap",
    ],
  },
];

const consultingProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "Memahami kondisi bisnis, sistem existing, serta target transformasi digital perusahaan.",
  },
  {
    step: "02",
    title: "Analysis & Strategy",
    description:
      "Menganalisis gap dan menyusun strategi IT yang realistis dan scalable.",
  },
  {
    step: "03",
    title: "Recommendation & Planning",
    description:
      "Menyusun rekomendasi solusi beserta roadmap implementasi yang jelas.",
  },
  {
    step: "04",
    title: "Execution Support",
    description:
      "Mendampingi implementasi agar solusi berjalan sesuai strategi dan target.",
  },
];

export default function Consulting() {
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
                MYTECH Consulting
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
              >
                IT Consulting & Digital Strategy untuk Bisnis Modern
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-foreground/80 leading-relaxed"
              >
                MYTECH membantu perusahaan merancang strategi IT, transformasi digital, 
                serta solusi teknologi yang berdampak nyata bagi pertumbuhan bisnis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link to="/portfolio">Lihat Studi Kasus</Link>
                </Button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="container mx-auto px-6">

            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Layanan IT Consulting MYTECH
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Pendampingan strategis untuk membantu perusahaan mengambil keputusan IT yang tepat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((item, index) => (
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
                Metodologi Consulting MYTECH
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {consultingProcess.map((step, index) => (
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
                  Butuh Pendampingan IT & Digital Strategy?
                </h2>

                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  Konsultasikan strategi IT dan transformasi digital bisnis Anda bersama MYTECH Consulting.
                </p>

                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Jadwalkan Konsultasi
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
