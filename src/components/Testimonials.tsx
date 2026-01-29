import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Andreas Lim",
    role: "Operations Manager, Distribusi & Logistik",
    content:
      "Sistem custom dari MYTECH membantu operasional kami lebih rapi dan terstruktur. Workflow jadi lebih cepat dan minim kesalahan manual.",
    rating: 5,
  },
  {
    id: 2,
    name: "Clara Wijaya",
    role: "Founder, Digital Business",
    content:
      "MYTECH sangat membantu dalam membangun platform digital kami. Komunikasi lancar dan hasilnya sesuai dengan kebutuhan bisnis.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jonathan Hartono",
    role: "IT Supervisor, Retail Business",
    content:
      "Aplikasi internal yang dikembangkan MYTECH membuat reporting dan monitoring operasional jauh lebih efisien.",
    rating: 5,
  },

  // WABA API Business
  {
    id: 4,
    name: "Kevin Tan",
    role: "Customer Support Lead, Online Business",
    content:
      "Integrasi WABA API dari MYTECH membantu tim CS kami merespons pelanggan lebih cepat dan terorganisir melalui WhatsApp Business.",
    rating: 5,
  },

  // Online Customer Service
  {
    id: 5,
    name: "Michelle Adrian",
    role: "Head of Customer Experience, E-Commerce",
    content:
      "Platform Online Customer Service dari MYTECH meningkatkan kecepatan respon dan kualitas layanan pelanggan kami secara signifikan.",
    rating: 5,
  },

  // RKE System
  {
    id: 6,
    name: "Daniel Prasetyo",
    role: "Finance & Compliance Officer",
    content:
      "Sistem RKE dari MYTECH membantu kami dalam pencatatan, pelaporan, dan audit data secara lebih aman dan terstruktur.",
    rating: 5,
  },

  // SIMRS
  {
    id: 7,
    name: "Maria Santoso",
    role: "Administrator Klinik & Layanan Kesehatan",
    content:
      "SIMRS dari MYTECH membantu operasional klinik kami menjadi lebih efisien, mulai dari pendaftaran pasien hingga laporan medis.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm uppercase tracking-wider"
          >
            Testimoni Klien
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mt-4"
          >
            Apa Kata Klien Tentang MYTECH
          </motion.h2>

          <p className="text-primary-foreground/70 mt-3 max-w-2xl mx-auto text-sm">
            Feedback dari klien UMKM, startup, healthcare, finance, dan bisnis yang berkembang bersama MYTECH.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">

            {/* Quote Icon */}
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 font-light">
                  "{testimonials[current].content}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center ring-2 ring-accent">
                    <User className="w-7 h-7 text-accent" />
                  </div>

                  <div>
                    <h4 className="font-serif font-semibold text-primary-foreground">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-primary-foreground/60 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">

              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoPlay(false);
                      setCurrent(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current
                        ? "bg-accent w-8"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
