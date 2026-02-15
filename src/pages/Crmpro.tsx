import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  ArrowRight,
  CheckCircle,
  X,
  PlayCircle,
  BarChart3,
  MessageSquare,
  Target,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

/* ======================================================
   DATA CRM PRO
====================================================== */

const crm = {
  title: "CRM Pro Platform",
  subtitle: "Customer Relationship Management untuk Tim Sales & Marketing Modern",
  image: "/crm.png",
  demoUrl: "https://www.youtube.com/embed/CfgO00aOTrw",
  description:
    "CRM Pro adalah platform manajemen pelanggan terintegrasi yang membantu bisnis mengelola leads, pipeline penjualan, komunikasi pelanggan, serta analitik performa sales dalam satu dashboard real-time.",

  problems: [
    "Data pelanggan tersebar di banyak tempat",
    "Pipeline penjualan tidak terpantau jelas",
    "Follow-up leads sering terlewat",
    "Sulit mengukur performa tim sales secara akurat",
  ],

  features: [
    "Lead & Contact Management Terpusat",
    "Sales Pipeline & Deal Tracking Visual",
    "Task Reminder & Follow-Up Automation",
    "Integrasi WhatsApp, Email, dan Form Leads",
    "Dashboard Analitik Penjualan Real-Time",
    "Role-Based Access & Activity Tracking",
  ],

  benefits: [
    "Meningkatkan konversi leads menjadi pelanggan",
    "Mempercepat siklus penjualan",
    "Kontrol aktivitas tim sales lebih transparan",
    "Keputusan bisnis berbasis data penjualan",
  ],

  metrics: [
    { label: "Lead Conversion", value: "+45%" },
    { label: "Sales Cycle", value: "-30%" },
    { label: "Pipeline Visibility", value: "100%" },
  ],
};

/* ======================================================
   PAGE
====================================================== */

export default function CrmProPage() {
  const [openDemo, setOpenDemo] = useState<string | null>(null);

  return (
    <Layout>
      <PageTransition>

        {/* ================= HERO ================= */}
        <section className="py-28 bg-gradient-hero text-center">
          <div className="container mx-auto px-6 max-w-3xl">

            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> Produk SaaS MYTECH
            </span>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              {crm.title}
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8">
              {crm.description}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                onClick={() => setOpenDemo(crm.demoUrl)}
                className="bg-accent text-accent-foreground"
              >
                <PlayCircle className="mr-2 h-4 w-4" /> Lihat Demo
              </Button>

              <Button variant="outline" asChild>
                <Link to="/contact">
                  Konsultasi CRM <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= IMAGE + INTRO ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={crm.image} alt={crm.title} />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                Kendalikan Pipeline Penjualan Secara Real-Time
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CRM Pro membantu tim sales dan marketing mengelola seluruh
                perjalanan pelanggan — dari lead pertama hingga closing deal —
                dengan visibilitas penuh dan automasi follow-up yang cerdas.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Tantangan Umum Tim Sales
            </h2>

            <ul className="space-y-4">
              {crm.problems.map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Fitur Utama CRM Pro
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crm.features.map((f) => (
                <div key={f} className="p-6 border rounded-2xl">
                  <CheckCircle className="w-5 h-5 text-accent mb-3" />
                  <p className="text-sm text-muted-foreground">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Dampak untuk Pertumbuhan Bisnis
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {crm.benefits.map((b) => (
                <div key={b} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= METRICS ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {crm.metrics.map((m) => (
                <div key={m.label} className="p-8 border rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {m.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Siap Meningkatkan Performa Sales Anda?
            </h2>

            <p className="text-muted-foreground mb-8">
              Gunakan CRM Pro untuk mengelola pelanggan, mempercepat closing,
              dan meningkatkan pertumbuhan bisnis secara terukur.
            </p>

            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">
                Request Demo CRM Pro <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
                  className="absolute top-3 right-3 text-white"
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
