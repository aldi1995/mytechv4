import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Hospital,
  MessageSquare,
  Users,
  Utensils,
  ArrowRight,
  CheckCircle,
  X,
  PlayCircle,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

/* ===============================
   DATA PRODUK SAAS
================================ */
const saasProducts = [
  {
    title: "SIMRS PRO",
    subtitle: "Sistem Informasi Manajemen Rumah Sakit",
    icon: Hospital,
    image: "/simrs.png",
    demoUrl: "",
    description:
      "Platform enterprise SIMRS untuk mendukung operasional rumah sakit modern dengan standar keamanan, compliance, dan audit trail yang kuat.",
    features: [
      "Electronic Medical Records (EMR)",
      "Rawat Jalan & Rawat Inap",
      "Farmasi & Billing Terintegrasi",
      "Audit Trail & Compliance",
      "Role-Based Access Control",
      "Dashboard Direktur & Manajemen",
    ],
    metrics: [
      { label: "Efisiensi Operasional", value: "+90%" },
      { label: "Compliance", value: "100%" },
      { label: "Modul Aktif", value: "15+" },
    ],
  },
  {
    title: "WABA Chat",
    subtitle: "WhatsApp Business API – Customer Support Platform",
    icon: MessageSquare,
    image: "/waba.png",
    demoUrl: "https://www.youtube.com/embed/CfgO00aOTrw",
    description:
      "Platform WhatsApp Business API untuk customer service modern dengan multi-agent, automasi CS, dan reporting real-time.",
    features: [
      "WhatsApp API Integration",
      "Multi-Agent Dashboard",
      "Auto Reply & Chat Routing",
      "Customer History & CRM",
      "Chat Analytics & Reporting",
      "Webhook & API Integration",
    ],
    metrics: [
      { label: "Response Time", value: "<10 detik" },
      { label: "Produktivitas CS", value: "+65%" },
      { label: "Chat Ditangani", value: "10K+" },
    ],
  },
  {
    title: "Remotely",
    subtitle: "HRMS & Workforce Management Platform",
    icon: Users,
    image: "/remotely.png",
    demoUrl: "https://youtube.com/embed/Ni_KZIDgOio",
    description:
      "Platform HRMS untuk perusahaan remote & hybrid: absensi, payroll, performance tracking, dan HR analytics.",
    features: [
      "Attendance & Time Tracking",
      "Payroll & Compensation",
      "Employee Performance Dashboard",
      "Remote Work Management",
      "HR Analytics & Reports",
      "Access Control & Role Management",
    ],
    metrics: [
      { label: "Efisiensi HR", value: "+70%" },
      { label: "Karyawan", value: "1K+" },
      { label: "Automation Level", value: "High" },
    ],
  },
  {
    title: "Culinasys",
    subtitle: "Smart Kitchen & Food Management System",
    icon: Utensils,
    image: "/culinasys.png",
    demoUrl: "",
    description:
      "Sistem digital untuk manajemen dapur, inventory bahan makanan, costing resep, dan analitik profit restoran.",
    features: [
      "Recipe Costing System",
      "Inventory & Stock Control",
      "Kitchen Workflow Automation",
      "POS & Order Management",
      "Profit Margin Analytics",
      "Supplier & Purchase Tracking",
    ],
    metrics: [
      { label: "Food Cost", value: "+55%" },
      { label: "Waste Reduction", value: "-40%" },
      { label: "Profit", value: "Real-Time" },
    ],
  },
];

export default function SaaS() {
  const [openDemo, setOpenDemo] = useState<string | null>(null);

  return (
    <Layout>
      <PageTransition>

        {/* ================= HERO ================= */}
        <section className="py-28 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            >
              Produk SaaS MYTECH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
            >
              Solusi Digital untuk Operasional Bisnis Modern
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80"
            >
              Platform SaaS MYTECH membantu bisnis meningkatkan efisiensi,
              automasi, dan kontrol operasional secara terpusat.
            </motion.p>
          </div>
        </section>

        {/* ================= PRODUK ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6 space-y-24">

            {saasProducts.map((product) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* IMAGE */}
                <div className="rounded-2xl overflow-hidden shadow-xl bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <product.icon className="w-6 h-6 text-accent" />
                    <span className="text-accent font-medium text-sm">
                      Produk SaaS
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                    {product.title}
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    {product.subtitle}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* FEATURES */}
                  <ul className="grid md:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* METRICS */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {product.metrics.map((metric) => (
                      <div key={metric.label} className="bg-muted p-4 rounded-xl text-center">
                        <div className="text-primary font-bold text-lg">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4">
                    {product.demoUrl && (
                      <Button
                        onClick={() => setOpenDemo(product.demoUrl)}
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Lihat Demo
                      </Button>
                    )}

                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Konsultasi
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= MODAL DEMO ================= */}
        <AnimatePresence>
          {openDemo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-black rounded-xl overflow-hidden max-w-4xl w-full relative"
              >
                <button
                  onClick={() => setOpenDemo(null)}
                  className="absolute top-3 right-3 text-white hover:text-accent"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="aspect-video">
                  <iframe
                    src={openDemo}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </PageTransition>
    </Layout>
  );
}
