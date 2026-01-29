import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, Smartphone, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import heroImage from "@/assets/hero-office.jpg";

const features = [
  {
    icon: Code2,
    title: "Software Custom",
    description:
      "Kami membangun sistem dan aplikasi yang dibuat khusus sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: Brain,
    title: "AI & Otomatisasi",
    description:
      "Gunakan AI untuk otomatisasi proses kerja dan pengambilan keputusan yang lebih cepat.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    description:
      "Pengembangan aplikasi mobile Android & iOS dengan performa tinggi dan desain modern.",
  },
  {
    icon: Server,
    title: "Cloud & Infrastruktur",
    description:
      "Infrastruktur server dan cloud yang aman, stabil, dan siap untuk skala besar.",
  },
];

const stats = [
  { value: "20+", label: "Proyek Selesai" },
  { value: "10+", label: "Klien Puas" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "5+", label: "Tim Profesional" },
];

const clients = [
  "Klinik PG Kebon Agung",
  "Oke-Jek",
  "Fazar.id",
  "Kuryn's Travel",
  "Sekolah Bina Persada",
  "Learning Hands Preschool",
  "RS Lawang Medika",
  "Po Zena",
];

const Index = () => {
  return (
    <Layout>
      <PageTransition>

        {/* HERO SECTION */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Kantor modern"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
          </div>

          {/* Glow Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-16 right-16 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-16 left-16 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium backdrop-blur-sm">
                  Partner IT Terpercaya
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6"
              >
                Bangun <span className="text-accent">Sistem Digital</span>
                <br />
                untuk Bisnis yang Siap Berkembang
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-lg text-primary-foreground/85 mb-8 leading-relaxed"
              >
                MYTECH Indonesia membantu perusahaan membangun software, aplikasi,
                dan sistem digital untuk meningkatkan efisiensi, produktivitas,
                dan pertumbuhan bisnis.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                >
                  <Link to="/contact">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="inline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/portfolio">Lihat Portfolio</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="py-6 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <span className="text-muted-foreground text-sm font-medium">
                Dipercaya oleh :
              </span>
              {clients.map((client) => (
                <span key={client} className="text-muted-foreground/60 font-medium text-sm">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-5xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="container mx-auto px-6">

            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent font-medium text-sm uppercase tracking-wider"
              >
                Layanan Kami
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4"
              >
                Solusi Digital untuk Bisnis Anda
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground mt-4 max-w-2xl mx-auto"
              >
                Kami menyediakan layanan teknologi lengkap untuk membantu bisnis
                berjalan lebih efisien dan siap berkembang.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-xl shadow-card hover:shadow-elevated transition-all group border border-transparent hover:border-accent/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Lihat Semua Layanan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <TechStack />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-3xl p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
                  Siap Mengembangkan Bisnis dengan Teknologi?
                </h2>

                <p className="text-primary-foreground/85 text-lg mb-8 max-w-2xl mx-auto">
                  Konsultasikan kebutuhan sistem dan aplikasi Anda dengan tim kami.
                  Gratis dan tanpa komitmen.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                >
                  <Link to="/contact">
                    Jadwalkan Konsultasi Gratis
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
};

export default Index;
