import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Hospital,
  ArrowRight,
  CheckCircle,
  X,
  PlayCircle,
  Shield,
  BarChart3,
  Users,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

/* ======================================================
   DATA SIMRS (VERSI LEBIH LENGKAP & INFORMATIF)
====================================================== */

const simrs = {
  title: "SIMRS PRO",
  subtitle: "Sistem Informasi Manajemen Rumah Sakit Terintegrasi",
  image: "/simrs.png",
  demoUrl: "https://www.youtube.com/embed/CfgO00aOTrw",
  description:
    "SIMRS PRO adalah platform enterprise untuk digitalisasi operasional rumah sakit secara menyeluruh — mulai dari rekam medis elektronik, manajemen pasien, farmasi, billing, hingga dashboard eksekutif real-time dengan standar keamanan dan compliance nasional.",

  problems: [
    "Pencatatan medis masih manual atau tersebar di banyak sistem",
    "Proses administrasi lambat dan rawan kesalahan",
    "Sulit memantau kinerja unit & keuangan secara real-time",
    "Kepatuhan regulasi kesehatan belum optimal",
  ],

  features: [
    "Electronic Medical Records (EMR) terstandarisasi",
    "Manajemen Rawat Jalan & Rawat Inap",
    "Farmasi & Billing Terintegrasi",
    "Audit Trail & Compliance Kemenkes",
    "Role-Based Access Control & Security",
    "Dashboard Direktur & Manajemen Real-Time",
  ],

  benefits: [
    "Efisiensi operasional meningkat signifikan",
    "Pengurangan human error pada pencatatan medis",
    "Kontrol manajemen & keuangan real-time",
    "Peningkatan kualitas layanan pasien",
  ],

  metrics: [
    { label: "Efisiensi Operasional", value: "+90%" },
    { label: "Compliance", value: "100%" },
    { label: "Modul Aktif", value: "15+" },
  ],
};

/* ======================================================
   COMPONENT
====================================================== */

export default function SimrsPage() {
  const [openDemo, setOpenDemo] = useState<string | null>(null);

  return (
    <Layout>
      <PageTransition>

        {/* ================= HERO ================= */}
        <section className="py-28 bg-gradient-hero text-center">
          <div className="container mx-auto px-6 max-w-3xl">

            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <Hospital className="w-4 h-4" /> Produk SaaS MYTECH
            </span>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              {simrs.title}
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8">
              {simrs.description}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                onClick={() => setOpenDemo(simrs.demoUrl)}
                className="bg-accent text-accent-foreground"
              >
                <PlayCircle className="mr-2 h-4 w-4" /> Lihat Demo
              </Button>

              <Button variant="outline" asChild>
                <Link to="/contact">
                  Konsultasi Implementasi <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= IMAGE + INTRO ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={simrs.image} alt={simrs.title} />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                Transformasi Digital Rumah Sakit
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                SIMRS PRO dirancang untuk menjawab tantangan operasional rumah
                sakit modern dengan pendekatan terintegrasi, aman, dan scalable.
                Sistem ini membantu manajemen mengambil keputusan berbasis data
                secara cepat dan akurat.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Tantangan yang Sering Dihadapi Rumah Sakit
            </h2>

            <ul className="space-y-4">
              {simrs.problems.map((p) => (
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
              Fitur Utama SIMRS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {simrs.features.map((f) => (
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
              Dampak Nyata untuk Operasional
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {simrs.benefits.map((b) => (
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
              {simrs.metrics.map((m) => (
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
              Siap Mengimplementasikan SIMRS di Rumah Sakit Anda?
            </h2>

            <p className="text-muted-foreground mb-8">
              Jadwalkan demo bersama tim MYTECH dan temukan bagaimana SIMRS PRO
              dapat meningkatkan efisiensi operasional serta kualitas layanan
              pasien secara signifikan.
            </p>

            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">
                Jadwalkan Demo Sekarang <ArrowRight className="ml-2 h-4 w-4" />
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
