import { motion } from "framer-motion";
import { TrendingUp, Heart, Rocket, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import aboutPattern from "@/assets/about-pattern.jpg";

const values = [
  {
    icon: Rocket,
    title: "Inovatif",
    description: "Kami terus mengikuti perkembangan teknologi untuk memberikan solusi terbaik bagi klien.",
  },
  {
    icon: Shield,
    title: "Terpercaya",
    description: "Kami menjunjung tinggi kejujuran, transparansi, dan tanggung jawab dalam setiap proyek.",
  },
  {
    icon: TrendingUp,
    title: "Fokus pada Hasil",
    description: "Kami mengutamakan solusi yang memberikan dampak nyata bagi bisnis klien.",
  },
  {
    icon: Heart,
    title: "Kolaboratif",
    description: "Kami bekerja sebagai partner strategis, bukan hanya sebagai vendor teknologi.",
  },
];

const milestones = [
  {
    year: "2023",
    event: "MYTECH Indonesia Didirikan",
    description:
      "MYTECH Indonesia resmi berdiri sebagai perusahaan teknologi yang fokus pada pengembangan software custom dan solusi digital.",
  },
  {
    year: "2023",
    event: "Menyelesaikan Proyek Komersial Pertama",
    description:
      "Berhasil menyelesaikan proyek pertama untuk klien bisnis lokal di bidang website dan sistem internal.",
  },
  {
    year: "2024",
    event: "Ekspansi Layanan Digital",
    description:
      "Mulai mengerjakan proyek web app, mobile app, sistem enterprise, dan integrasi API untuk berbagai industri.",
  },
  {
    year: "2024",
    event: "20+ Proyek Berhasil Diselesaikan",
    description:
      "Telah menyelesaikan lebih dari 20 proyek untuk klien di bidang IT, edukasi, F&B, dan perusahaan swasta.",
  },
  {
    year: "2025",
    event: "Fokus Enterprise & AI",
    description:
      "Mengembangkan solusi enterprise, automasi, dan AI untuk klien bisnis skala menengah dan berkembang.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageTransition>

        {/* HERO */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src={aboutPattern} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
              >
                Tentang MYTECH
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
              >
                Partner Teknologi untuk Bisnis Modern
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                MYTECH Indonesia membantu bisnis membangun software, aplikasi,
                dan sistem digital untuk meningkatkan efisiensi, produktivitas,
                dan pertumbuhan usaha sejak 2023.
              </motion.p>
            </div>
          </div>
        </section>

        {/* VISI & MISI */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">

              {/* VISI */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-10 rounded-2xl shadow-card"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Visi Kami
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi partner teknologi terpercaya yang membantu bisnis Indonesia
                  berkembang melalui solusi digital yang modern dan efektif.
                </p>
              </motion.div>

              {/* MISI */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-10 rounded-2xl shadow-card"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Misi Kami
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mengembangkan solusi teknologi yang praktis, aman, dan scalable,
                  serta memberikan dampak nyata bagi operasional klien.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* NILAI */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent font-medium text-sm uppercase tracking-wider"
              >
                Nilai Kami
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4"
              >
                Prinsip yang Kami Pegang
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONE */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">

            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent font-medium text-sm uppercase tracking-wider"
              >
                Perjalanan Kami
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4"
              >
                Perkembangan MYTECH
              </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year + milestone.event}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>

                  <div className="flex-1 bg-card p-6 rounded-xl shadow-soft">
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </PageTransition>
    </Layout>
  );
};

export default About;
