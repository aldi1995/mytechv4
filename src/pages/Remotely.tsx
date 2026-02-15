import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  ArrowRight,
  CheckCircle,
  X,
  PlayCircle,
  Clock,
  BarChart3,
  Shield,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

/* ======================================================
   DATA REMOTELY HRMS
====================================================== */

const remotely = {
  title: "Remotely HRMS Platform",
  subtitle: "Workforce Management untuk Perusahaan Modern & Hybrid",
  image: "/remotely.png",
  demoUrl: "https://youtube.com/embed/Ni_KZIDgOio",
  description:
    "Remotely adalah platform HRMS modern yang membantu perusahaan mengelola absensi, payroll, performa karyawan, serta analitik SDM secara terpusat — dirancang khusus untuk organisasi remote, hybrid, maupun multi-cabang.",

  problems: [
    "Data absensi & kinerja karyawan tersebar di banyak sistem",
    "Proses payroll manual memakan waktu & rawan kesalahan",
    "Sulit memantau performa tim secara real-time",
    "Kurangnya visibilitas manajemen terhadap produktivitas SDM",
  ],

  features: [
    "Attendance & Time Tracking Otomatis",
    "Payroll & Compensation Management",
    "Employee Performance Dashboard",
    "Remote & Hybrid Workforce Monitoring",
    "HR Analytics & Insight Laporan",
    "Role-Based Access & Security Control",
  ],

  benefits: [
    "Efisiensi proses HR meningkat signifikan",
    "Pengurangan kesalahan payroll & administrasi",
    "Keputusan manajemen berbasis data real-time",
    "Peningkatan produktivitas & transparansi tim",
  ],

  metrics: [
    { label: "Efisiensi HR", value: "+70%" },
    { label: "Karyawan Dikelola", value: "1K+" },
    { label: "Automation Level", value: "High" },
  ],
};

/* ======================================================
   PAGE
====================================================== */

export default function RemotelyPage() {
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
              {remotely.title}
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8">
              {remotely.description}
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                onClick={() => setOpenDemo(remotely.demoUrl)}
                className="bg-accent text-accent-foreground"
              >
                <PlayCircle className="mr-2 h-4 w-4" /> Lihat Demo
              </Button>

              <Button variant="outline" asChild>
                <Link to="/contact">
                  Konsultasi HR Digital <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= IMAGE + INTRO ================= */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={remotely.image} alt={remotely.title} />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                Manajemen SDM Lebih Efisien & Transparan
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Remotely membantu tim HR dan manajemen perusahaan memantau
                seluruh siklus karyawan secara terpusat — dari absensi hingga
                performa — sehingga keputusan strategis dapat diambil lebih
                cepat dan akurat.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Tantangan Pengelolaan SDM Modern
            </h2>

            <ul className="space-y-4">
              {remotely.problems.map((p) => (
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
              Fitur Utama Remotely
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remotely.features.map((f) => (
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
              Dampak untuk Organisasi Anda
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {remotely.benefits.map((b) => (
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
              {remotely.metrics.map((m) => (
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
              Siap Modernisasi Sistem HR Perusahaan Anda?
            </h2>

            <p className="text-muted-foreground mb-8">
              Gunakan Remotely untuk mengelola SDM secara efisien, transparan,
              dan berbasis data real-time demi pertumbuhan bisnis yang lebih
              cepat.
            </p>

            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">
                Request Demo Remotely <ArrowRight className="ml-2 h-4 w-4" />
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
