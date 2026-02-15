import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Utensils,
  ArrowRight,
  CheckCircle,
  X,
  PlayCircle,
  BarChart3,
  Package,
  ChefHat,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

/* ======================================================
   DATA CULINASYS
====================================================== */

const culinasys = {
  title: "Culinasys Smart Kitchen",
  subtitle: "Food Costing, Inventory, dan Operasional Restoran Terintegrasi",
  image: "/culinasys.png",
  demoUrl: "https://youtube.com/embed/qpqCMGhmJmQ",
  description:
    "Culinasys adalah platform manajemen dapur dan operasional restoran yang membantu bisnis F&B mengontrol food cost, stok bahan, alur produksi, hingga analitik profit secara real-time dalam satu sistem terpusat.",

  problems: [
    "Food cost tidak terkontrol dan margin sulit dipantau",
    "Stok bahan sering tidak akurat atau terbuang",
    "Proses dapur tidak terstandarisasi",
    "Sulit mengetahui profit per menu secara real-time",
  ],

  features: [
    "Recipe & Food Costing Calculator",
    "Inventory & Stock Management Real-Time",
    "Kitchen Workflow & Production Tracking",
    "POS & Order Integration",
    "Profit Margin & Sales Analytics",
    "Supplier & Purchasing Management",
  ],

  benefits: [
    "Kontrol food cost lebih presisi",
    "Pengurangan waste bahan baku",
    "Operasional dapur lebih efisien",
    "Keputusan bisnis berbasis data profit real-time",
  ],

  metrics: [
    { label: "Efisiensi Food Cost", value: "+55%" },
    { label: "Waste Reduction", value: "-40%" },
    { label: "Profit Monitoring", value: "Real-Time" },
  ],
};

/* ======================================================
   PAGE
====================================================== */

export default function CulinasysPage() {
  const [openDemo, setOpenDemo] = useState<string | null>(null);

  return (
    <Layout>
      <PageTransition>

        {/* ================= HERO ================= */}
        <section className="py-28 bg-gradient-hero text-center">
          <div className="container mx-auto px-6 max-w-3xl">

            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <Utensils className="w-4 h-4" /> Produk SaaS MYTECH
            </span>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              {culinasys.title}
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8">
              {culinasys.description}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                onClick={() => setOpenDemo(culinasys.demoUrl)}
                className="bg-accent text-accent-foreground"
              >
                <PlayCircle className="mr-2 h-4 w-4" /> Lihat Demo
              </Button>

              <Button variant="outline" asChild>
                <Link to="/contact">
                  Konsultasi Culinasys <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= IMAGE + INTRO ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={culinasys.image} alt={culinasys.title} />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                Kontrol Operasional Restoran Secara Menyeluruh
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Culinasys membantu pemilik restoran, cloud kitchen, maupun
                bisnis F&B multi-cabang mengelola seluruh proses dapur dan
                keuangan secara terintegrasi — dari resep, stok bahan, hingga
                profit per menu secara real-time.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Tantangan Bisnis F&B Modern
            </h2>

            <ul className="space-y-4">
              {culinasys.problems.map((p) => (
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
              Fitur Utama Culinasys
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culinasys.features.map((f) => (
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
              Dampak untuk Bisnis Restoran Anda
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {culinasys.benefits.map((b) => (
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
              {culinasys.metrics.map((m) => (
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
              Siap Meningkatkan Profit Bisnis F&B Anda?
            </h2>

            <p className="text-muted-foreground mb-8">
              Gunakan Culinasys untuk mengontrol food cost, stok bahan, dan
              profit restoran secara real-time dalam satu dashboard terintegrasi.
            </p>

            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">
                Request Demo Culinasys <ArrowRight className="ml-2 h-4 w-4" />
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
