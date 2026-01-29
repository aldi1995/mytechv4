import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  BarChart3,
  Eye,
  Workflow,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const solutions = [
  {
    icon: Bot,
    title: "AI Chatbot & Customer Automation",
    description:
      "Chatbot berbasis AI untuk customer support, sales automation, dan WhatsApp Business API.",
    features: [
      "AI Chatbot (Web & WhatsApp)",
      "Customer Support Automation",
      "Lead Qualification Bot",
      "24/7 Customer Response",
    ],
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & Business Intelligence",
    description:
      "Analisis data berbasis AI untuk forecasting, trend prediction, dan decision making.",
    features: [
      "Sales Forecasting",
      "Customer Behavior Analysis",
      "Business Intelligence Dashboard",
      "Data-Driven Decision Support",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning Model Development",
    description:
      "Pengembangan model Machine Learning custom untuk kebutuhan spesifik bisnis.",
    features: [
      "Custom ML Model Training",
      "Recommendation Engine",
      "Fraud Detection",
      "Risk Scoring Model",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision & OCR",
    description:
      "AI berbasis visual untuk image recognition, OCR, dan automated inspection.",
    features: [
      "OCR & Document Recognition",
      "Face Recognition",
      "Object Detection",
      "Image Classification",
    ],
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Automasi proses bisnis menggunakan AI untuk efisiensi operasional.",
    features: [
      "Process Automation",
      "AI Decision Engine",
      "Workflow Optimization",
      "Intelligent Task Routing",
    ],
  },
  {
    icon: Shield,
    title: "AI Governance & Security",
    description:
      "Keamanan AI, data privacy, dan compliance untuk enterprise-grade AI solutions.",
    features: [
      "Secure AI Deployment",
      "Data Privacy Protection",
      "Model Monitoring",
      "Audit Trail & Logging",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Problem Discovery & Data Assessment",
    description:
      "Memahami kebutuhan bisnis serta kesiapan data untuk solusi AI yang tepat.",
  },
  {
    step: "02",
    title: "Model Design & Experimentation",
    description:
      "Mendesain model AI, melakukan training, eksperimen, dan optimasi performa.",
  },
  {
    step: "03",
    title: "Deployment & System Integration",
    description:
      "Deploy model AI ke sistem produksi dan integrasi ke aplikasi bisnis.",
  },
  {
    step: "04",
    title: "Monitoring & Continuous Improvement",
    description:
      "Monitoring performa model dan peningkatan berkelanjutan berbasis data.",
  },
];

export default function AIService() {
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
                AI & Automation untuk Efisiensi Bisnis Enterprise
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-foreground/80 leading-relaxed"
              >
                MYTECH Indonesia menghadirkan solusi Artificial Intelligence untuk automasi proses bisnis, 
                analitik data, fraud detection, chatbot pintar, dan pengambilan keputusan berbasis data.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Konsultasi AI Gratis
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
                Solusi AI & Automation dari MYTECH
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Solusi AI enterprise untuk meningkatkan efisiensi operasional, akurasi keputusan, dan daya saing bisnis Anda.
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
                Proses Implementasi AI
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
                  Siap Menerapkan AI di Bisnis Anda?
                </h2>

                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  Konsultasikan kebutuhan AI dan automasi Anda bersama tim MYTECH dan temukan solusi paling efektif.
                </p>

                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Konsultasi AI Gratis
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
