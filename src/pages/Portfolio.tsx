import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const categories = ["All", "Web App", "Mobile App", "Enterprise", "E-Commerce"];

const projects = [
  {
    id: 1,
    title: "FinTrack Pro",
    category: "Web App",
    description: "Platform manajemen keuangan berbasis AI untuk enterprise dengan analitik real-time dan prediksi cash flow.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Python", "AI/ML", "PostgreSQL"],
    client: "Bank Central Asia",
  },
  {
    id: 2,
    title: "HealthMate",
    category: "Mobile App",
    description: "Aplikasi kesehatan telemedicine dengan fitur konsultasi dokter online dan monitoring kesehatan.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "WebRTC", "MongoDB"],
    client: "Siloam Hospitals",
  },
  {
    id: 3,
    title: "LogiChain",
    category: "Enterprise",
    description: "Sistem manajemen supply chain dengan tracking real-time dan integrasi IoT untuk optimasi logistik.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Go", "IoT", "Kubernetes"],
    client: "JNE Express",
  },
  {
    id: 4,
    title: "ShopSmart",
    category: "E-Commerce",
    description: "Platform e-commerce B2B dengan sistem pembayaran terintegrasi dan manajemen inventory otomatis.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "Redis", "AWS"],
    client: "Mitra Adiperkasa",
  },
  {
    id: 5,
    title: "EduLearn LMS",
    category: "Web App",
    description: "Learning Management System dengan fitur video streaming, quiz interaktif, dan sertifikasi online.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["React", "Django", "WebSocket", "AWS S3"],
    client: "Universitas Indonesia",
  },
  {
    id: 6,
    title: "SmartPOS",
    category: "Mobile App",
    description: "Aplikasi Point of Sale untuk UMKM dengan fitur inventory, laporan penjualan, dan integrasi pembayaran.",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Payment Gateway"],
    client: "Warung Pintar",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
              >
                Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
              >
                Karya Terbaik Kami
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-foreground/80 leading-relaxed"
              >
                Lihat bagaimana kami membantu berbagai perusahaan bertransformasi 
                melalui solusi teknologi inovatif.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-muted sticky top-[73px] z-40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <button className="flex items-center gap-2 text-primary-foreground font-medium">
                          <span>Lihat Detail</span>
                          <ExternalLink size={16} />
                        </button>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-accent font-medium mb-2">{project.client}</p>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-3xl p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                  Punya Proyek yang Ingin Diwujudkan?
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  Konsultasikan ide Anda dengan tim kami dan wujudkan solusi teknologi terbaik untuk bisnis Anda.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Mulai Konsultasi
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

export default Portfolio;
