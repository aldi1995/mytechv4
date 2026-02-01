import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Code2,
  Cloud,
  Cpu,
  ShieldCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

export default function JasaITMalang() {
  return (
    <Layout>
      <PageTransition>

        {/* ================= SEO META ================= */}
        <Helmet>
          <title>Jasa IT Malang | Software House & Partner IT Profesional – MYTECH Indonesia</title>

          <meta
            name="description"
            content="MYTECH Indonesia adalah penyedia jasa IT di Malang untuk software custom, cloud, AI automation, sistem enterprise, dan transformasi digital bisnis."
          />

          <meta
            name="keywords"
            content="jasa IT Malang, software house Malang, jasa pembuatan software Malang, IT consulting Malang, developer Malang, MYTECH Indonesia"
          />

          <link
            rel="canonical"
            href="https://mytech-indonesia.web.id/jasa-it-malang"
          />

          {/* Open Graph */}
          <meta property="og:title" content="Jasa IT Malang – Partner Transformasi Digital | MYTECH Indonesia" />
          <meta
            property="og:description"
            content="Layanan jasa IT di Malang untuk software custom, AI, cloud, dan sistem enterprise oleh MYTECH Indonesia."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mytech-indonesia.web.id/jasa-it-malang" />
          <meta property="og:image" content="https://mytech-indonesia.web.id/og-image.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jasa IT Malang – MYTECH Indonesia" />
          <meta
            name="twitter:description"
            content="Software house & jasa IT profesional di Malang untuk bisnis modern."
          />
        </Helmet>

        {/* ================= HERO ================= */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
            >
              Jasa IT Malang – Partner Transformasi Digital Bisnis Anda
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80 mb-8"
            >
              MYTECH Indonesia adalah penyedia <strong>jasa IT di Malang</strong>{" "}
              yang membantu bisnis membangun software custom, sistem enterprise,
              cloud platform, dan AI automation secara profesional.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-accent text-accent-foreground">
                <Link to="/contact">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link to="/portfolio">Lihat Portofolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= LOKASI ================= */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-6 flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-accent" />
            <p>
              Melayani klien di <strong>Malang, Jawa Timur</strong> dan seluruh Indonesia
            </p>
          </div>
        </section>

        {/* ================= LAYANAN ================= */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-serif font-bold mb-12">
              Layanan Jasa IT MYTECH di Malang
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border bg-card">
                <Code2 className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Software Custom</h3>
                <p className="text-sm text-muted-foreground">
                  Pengembangan sistem sesuai kebutuhan bisnis dan workflow perusahaan.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-card">
                <Cloud className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-muted-foreground">
                  Infrastruktur cloud, deployment, monitoring, dan scaling aplikasi.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-card">
                <Cpu className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">AI & Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Automasi bisnis, chatbot, analitik data, dan solusi AI.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-card">
                <ShieldCheck className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Enterprise System</h3>
                <p className="text-sm text-muted-foreground">
                  ERP, HRMS, SIMRS, integrasi API, dan keamanan data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SEO TEXT ================= */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-6 max-w-4xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              Sebagai <strong>software house di Malang</strong>, MYTECH Indonesia
              membantu UMKM, startup, dan enterprise membangun solusi digital
              yang scalable dan aman.
            </p>

            <p>
              Kami dipercaya sebagai <strong>jasa IT Malang</strong> untuk
              pengembangan website, aplikasi, sistem internal perusahaan,
              dan transformasi digital modern.
            </p>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Butuh Jasa IT Profesional di Malang?
          </h2>
          <p className="text-muted-foreground mb-8">
            Diskusikan kebutuhan bisnis Anda bersama tim MYTECH Indonesia.
          </p>

          <Button asChild size="lg">
            <Link to="/contact">
              Hubungi MYTECH Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>

      </PageTransition>
    </Layout>
  );
}
