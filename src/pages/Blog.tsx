import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  ArrowRight,
  Tag,
} from "lucide-react";

import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

/* ===============================
   DATA BLOG (sementara hardcode)
   nanti bisa diganti DB / CMS
================================ */
const blogPosts = [
  {
    title: "Mengapa Digitalisasi Penting untuk Bisnis di 2026",
    slug: "digitalisasi-bisnis-2026",
    excerpt:
      "Transformasi digital bukan lagi pilihan. Pelajari bagaimana software, cloud, dan AI membantu bisnis bertumbuh lebih cepat.",
    date: "30 Januari 2026",
    category: "Digital Transformation",
  },
  {
    title: "SIMRS Modern: Standar Baru Rumah Sakit Indonesia",
    slug: "simrs-modern-rumah-sakit",
    excerpt:
      "SIMRS modern membantu rumah sakit meningkatkan efisiensi operasional, compliance, dan kualitas layanan pasien.",
    date: "28 Januari 2026",
    category: "Healthcare IT",
  },
  {
    title: "WhatsApp Business API untuk Customer Service Efektif",
    slug: "waba-customer-service",
    excerpt:
      "Bagaimana WhatsApp Business API membantu perusahaan meningkatkan response time dan kepuasan pelanggan.",
    date: "25 Januari 2026",
    category: "Customer Experience",
  },
  {
    title: "HRMS untuk Perusahaan Remote & Hybrid",
    slug: "hrms-remote-hybrid",
    excerpt:
      "Manajemen karyawan remote membutuhkan sistem HRMS yang tepat. Ini fitur yang wajib dimiliki.",
    date: "22 Januari 2026",
    category: "HR Technology",
  },
];

export default function Blog() {
  return (
    <Layout>
      <PageTransition>

        {/* ================= HERO ================= */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            >
              Blog MYTECH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
            >
              Insight & Artikel Teknologi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80"
            >
              Insight seputar software development, SaaS, cloud, AI,
              dan transformasi digital untuk bisnis Indonesia.
            </motion.p>
          </div>
        </section>

        {/* ================= BLOG LIST ================= */}
        <section className="py-20">
          <div className="container mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-2xl shadow-card border border-border p-6 flex flex-col"
                >
                  {/* META */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-xl font-serif font-bold mb-3 leading-snug">
                    {post.title}
                  </h2>

                  {/* EXCERPT */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent font-medium text-sm hover:underline"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.article>
              ))}
            </div>

          </div>
        </section>

      </PageTransition>
    </Layout>
  );
}
