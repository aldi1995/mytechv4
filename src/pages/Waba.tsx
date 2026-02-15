import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  X,
  PlayCircle,
  Users,
  BarChart3,
  Zap,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

/* ======================================================
   DATA WABA (FULL LANDING CONTENT)
====================================================== */

const waba = {
  title: "WABA Chat Platform",
  subtitle: "WhatsApp Business API untuk Customer Service Modern",
  image: "/waba.png",
  demoUrl: "https://www.youtube.com/embed/CfgO00aOTrw",
  description:
    "WABA Chat adalah platform WhatsApp Business API terintegrasi yang dirancang untuk meningkatkan kecepatan respon customer service, otomatisasi percakapan, serta analitik performa secara real-time dalam satu dashboard enterprise.",

  problems: [
    "Customer service lambat merespons pesan pelanggan",
    "Chat tersebar di banyak perangkat tanpa kontrol pusat",
    "Sulit memantau performa tim CS secara real-time",
    "Tidak ada automasi untuk pertanyaan berulang pelanggan",
  ],

  features: [
    "Integrasi Resmi WhatsApp Business API",
    "Dashboard Multi-Agent Terpusat",
    "Auto Reply & Smart Chat Routing",
    "Riwayat Pelanggan & Mini CRM",
    "Analitik Chat & Laporan Performa",
    "Webhook & Integrasi Sistem Internal",
  ],

  benefits: [
    "Response time pelanggan jauh lebih cepat",
    "Produktivitas tim customer service meningkat",
    "Kontrol percakapan & kualitas layanan lebih baik",
    "Meningkatkan kepuasan dan retensi pelanggan",
  ],

  metrics: [
    { label: "Response Time", value: "<10 detik" },
    { label: "Produktivitas CS", value: "+65%" },
    { label: "Chat Ditangani", value: "10K+" },
  ],
};

/* ======================================================
   PAGE
====================================================== */

export default function WabaPage() {
  const [openDemo, setOpenDemo] = useState<string | null>(null);

  return (
    <Layout>
      <PageTransition>

        {/* ================= HERO ================= */}
        <section className="py-28 bg-gradient-hero text-center">
          <div className="container mx-auto px-6 max-w-3xl">

            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" /> Produk SaaS MYTECH
            </span>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              {waba.title}
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8">
              {waba.description}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                onClick={() => setOpenDemo(waba.demoUrl)}
                className="bg-accent text-accent-foreground"
              >
                <PlayCircle className="mr-2 h-4 w-4" /> Lihat Demo
              </Button>

              <Button variant="outline" asChild>
                <Link to="/contact">
                  Konsultasi Integrasi <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= IMAGE + INTRO ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={waba.image} alt={waba.title} />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                Customer Service Lebih Cepat & Terukur
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dengan WABA Chat, seluruh percakapan pelanggan terpusat dalam
                satu dashboard. Tim Anda dapat merespons lebih cepat,
                memanfaatkan automasi cerdas, serta memantau performa layanan
                secara real-time berbasis data.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Tantangan Customer Service Modern
            </h2>

            <ul className="space-y-4">
              {waba.problems.map((p) => (
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
              Fitur Unggulan WABA
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {waba.features.map((f) => (
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
              Dampak untuk Bisnis Anda
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {waba.benefits.map((b) => (
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
              {waba.metrics.map((m) => (
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
              Siap Upgrade Customer Service ke Level Berikutnya?
            </h2>

            <p className="text-muted-foreground mb-8">
              Integrasikan WhatsApp Business API dengan sistem bisnis Anda dan
              berikan pengalaman layanan pelanggan yang cepat, konsisten, dan
              profesional.
            </p>

            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">
                Request Demo WABA <ArrowRight className="ml-2 h-4 w-4" />
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
