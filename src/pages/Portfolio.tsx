import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = [
    "Semua",
    "Web Platform",
    "Web Apps",
    "Mobile & Web App",
    "Education Website",
    "E-Commerce Website",
    "Company Profile Website",
    "Legal & NGO",
    "System & Tools",
    "Real Estate Website",
    "School Website",
    "Church Website",
    "Crowdfunding Website",
    "Inventory Management App",
    "Disaster Management Website",
  ];

  const projects = [
    {
      title: "Remotely.id",
      description:
        "Platform digital terpadu untuk manajemen kerja jarak jauh mencakup HRMS, payroll, project management, absensi, dan komunikasi tim.",
      image: "/remotely.jpg",
      category: "Web Platform",
      technologies: ["Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      metrics: [
        { label: "Produktivitas Tim", value: "+35%" },
        { label: "Efisiensi Data", value: "99.9%" },
      ],
    },

    {
      title: "E-Kantin Bina Persada School",
      description:
        "Sistem digitalisasi kantin sekolah dengan top-up saldo, voucher makan siang, laporan transaksi, dan otomatisasi layanan.",
      image: "/ekantin.png",
      category: "Web Apps",
      technologies: ["Laravel", "Vue 3", "Inertia.js", "MySQL"],
      metrics: [
        { label: "Kecepatan Transaksi", value: "+40%" },
        { label: "Efisiensi Operasional", value: "+30%" },
      ],
    },

    {
      title: "Jalin Sehat",
      description:
        "Aplikasi SaaS rumah sakit untuk pendaftaran online, booking dokter, dan manajemen data pasien.",
      image: "/jalinsehat.jpg",
      category: "Mobile & Web App",
      technologies: ["React Native", "Next.js", "Supabase"],
      metrics: [
        { label: "Pendaftaran Online", value: "+50%" },
        { label: "Kepuasan Pengguna", value: "98%" },
      ],
    },

    {
      title: "Learning Hands",
      description:
        "Website preschool interaktif berbasis game dan pembelajaran anak.",
      image: "/learninghands.png",
      category: "Education Website",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      metrics: [
        { label: "Engagement Anak", value: "+60%" },
        { label: "Uptime Sistem", value: "99%" },
      ],
    },

    {
      title: "Fazar E-Commerce",
      description:
        "Website e-commerce dengan katalog produk, pembayaran online, dan performa tinggi.",
      image: "/fazar.png",
      category: "E-Commerce Website",
      technologies: ["Next.js", "Stripe API", "MongoDB"],
      metrics: [
        { label: "Load Time", value: "<2 detik" },
        { label: "Checkout Success", value: "99%" },
      ],
    },

    {
      title: "Chatting Apps | ChatMe!",
      description:
        "Aplikasi chat real-time dengan WebSocket, JWT Auth, dan multimedia messaging.",
      image: "/chatz.jpg",
      category: "Web Apps",
      technologies: ["Next.js", "Socket.IO", "MongoDB"],
      metrics: [
        { label: "Latency", value: "<1 detik" },
        { label: "Server Uptime", value: "99.8%" },
      ],
    },

    {
      title: "Website Wedding Organizer",
      description:
        "Platform perencanaan pernikahan dengan katalog vendor dan budgeting tools.",
      image: "/wedding.jpg",
      category: "Service Website",
      technologies: ["Next.js", "Supabase", "Prisma"],
      metrics: [
        { label: "Vendor Terdaftar", value: "50+" },
        { label: "Kepuasan Pengguna", value: "97%" },
      ],
    },

    {
      title: "Website Bina Persada International School",
      description:
        "Website resmi sekolah internasional dengan informasi akademik dan pendaftaran.",
      image: "/bp.jpg",
      category: "School Website",
      technologies: ["Next.js", "Sanity CMS"],
      metrics: [
        { label: "Siswa Terdaftar", value: "100+" },
        { label: "Kepuasan Pengguna", value: "97%" },
      ],
    },

    {
      title: "Website LBH Inayah Filia",
      description:
        "Platform konsultasi hukum online dengan artikel hukum dan manajemen klien.",
      image: "/if.png",
      category: "Legal & NGO",
      technologies: ["Next.js", "Supabase"],
      metrics: [
        { label: "Klien Terbantu", value: "50+" },
        { label: "Kepuasan Pengguna", value: "97%" },
      ],
    },

    {
      title: "Website Resmi Gereja GSK Bandung",
      description:
        "Website gereja dengan jadwal ibadah dan pelayanan komunitas.",
      image: "/gsk.png",
      category: "Church Website",
      technologies: ["Next.js", "Firebase"],
      metrics: [
        { label: "Jemaat Terdaftar", value: "50+" },
        { label: "Kepuasan Pengguna", value: "97%" },
      ],
    },

    {
      title: "Website Resmi NGO 7Lung",
      description:
        "Website NGO dengan laporan tahunan, galeri, dan donasi online.",
      image: "/7l.png",
      category: "NGO Foundation Website",
      technologies: ["Next.js", "Stripe API", "Supabase"],
      metrics: [
        { label: "Volunteer", value: "50+" },
        { label: "Kepuasan Pengguna", value: "97%" },
      ],
    },

    {
      title: "Website Pemantauan dan Pelaporan Bencana Alam",
      description:
        "Webapps real-time untuk monitoring bencana dan notifikasi respons cepat.",
      image: "/bp.png",
      category: "Disaster Management Website",
      technologies: ["React.js", "Node.js", "Leaflet"],
      metrics: [
        { label: "Bencana Ditangani", value: "50+" },
        { label: "Response Rate", value: "97%" },
      ],
    },

    {
      title: "Website Casavia Estate",
      description:
        "Website real estate dengan katalog properti dan CRM leads.",
      image: "/ce.png",
      category: "Real Estate Website",
      technologies: ["Next.js", "Strapi CMS"],
      metrics: [
        { label: "Properti Terjual", value: "500+" },
        { label: "Lead Conversion", value: "97%" },
      ],
    },

    {
      title: "Website Crowdfunding Inayah Filia",
      description:
        "Platform crowdfunding untuk donasi proyek sosial dan kemanusiaan.",
      image: "/donasi.png",
      category: "Crowdfunding Website",
      technologies: ["Next.js", "Stripe API"],
      metrics: [
        { label: "Campaign Aktif", value: "50+" },
        { label: "Kepuasan Donatur", value: "97%" },
      ],
    },

    {
      title: "Platform Pelajaran Daring",
      description:
        "Website e-learning dengan kursus interaktif dan tracking progres siswa.",
      image: "/edu.png",
      category: "Education Website",
      technologies: ["React.js", "MongoDB"],
      metrics: [
        { label: "Siswa", value: "100+" },
        { label: "Materi Aktif", value: "97%" },
      ],
    },

    {
      title: "Apps Inventaris Barang GSK",
      description:
        "Aplikasi inventaris aset gereja untuk pencatatan dan laporan barang.",
      image: "/inv_gsk.png",
      category: "Inventory Management App",
      technologies: ["React.js", "MongoDB"],
      metrics: [
        { label: "Barang Terdata", value: "100+" },
        { label: "Kepuasan User", value: "97%" },
      ],
    },

    {
      title: "Website Konsultasi Hukum Online (Gratis)",
      description:
        "Platform konsultasi hukum gratis untuk masyarakat luas.",
      image: "/kh.png",
      category: "Legal Consultation Website",
      technologies: ["Next.js", "Supabase"],
      metrics: [
        { label: "Kasus Terdata", value: "50+" },
        { label: "Kepuasan Pengguna", value: "97%" },
      ],
    },

    {
      title: "LBH Anak Indonesia",
      description:
        "Website bantuan hukum anak dengan edukasi dan advokasi publik.",
      image: "/lbhai.png",
      category: "Legal Aid Website",
      technologies: ["Next.js", "PostgreSQL"],
      metrics: [
        { label: "Kasus Anak", value: "50+" },
        { label: "Impact Rate", value: "97%" },
      ],
    },

    {
      title: "Website Company Profile EO M-Plus",
      description:
        "Website event organizer dengan portofolio acara dan testimoni klien.",
      image: "/mplus.png",
      category: "Company Profile Website",
      technologies: ["Next.js", "Strapi CMS"],
      metrics: [
        { label: "Event Sukses", value: "50+" },
        { label: "Kepuasan Klien", value: "97%" },
      ],
    },

    {
      title: "Website Resmi MY-Law",
      description:
        "Website firma hukum profesional dengan profil pengacara dan artikel hukum.",
      image: "/mylaw.png",
      category: "Law Firm Website",
      technologies: ["Next.js", "Supabase"],
      metrics: [
        { label: "Kasus Selesai", value: "50+" },
        { label: "Client Satisfaction", value: "97%" },
      ],
    },

    {
      title: "Website SMP Lab Malang",
      description:
        "Website sekolah dengan informasi akademik dan pendaftaran siswa.",
      image: "/smplab.png",
      category: "School Website",
      technologies: ["React.js", "Firebase"],
      metrics: [
        { label: "Murid Terdata", value: "500+" },
        { label: "Kepuasan Orang Tua", value: "97%" },
      ],
    },
  ];

  const filtered =
    activeFilter === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      <PageTransition>

        {/* HERO */}
        <section className="py-24 bg-muted text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
            >
              Portofolio MYTECH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
            >
              Kumpulan Proyek Software & Digital yang Telah Kami Bangun
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Showcase project MYTECH di bidang software custom, SaaS, web apps, mobile apps, dan enterprise systems.
            </motion.p>
          </div>
        </section>

        {/* FILTER */}
        <section className="py-10">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </section>

        {/* GRID */}
        <section className="pb-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <span className="text-xs text-accent font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-serif font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-semibold text-sm">{m.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </PageTransition>
    </Layout>
  );
};

export default Portfolio;
