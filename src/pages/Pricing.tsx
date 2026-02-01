import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

/* ===============================
   DATA PRICING
================================ */
const plans = [
  {
    name: "Starter",
    price: "Rp 3 – 7 Juta",
    desc: "UMKM & Bisnis Kecil",
    highlight: false,
  },
  {
    name: "Business",
    price: "Rp 15 – 40 Juta",
    desc: "Startup & Bisnis Menengah",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom / Proposal",
    desc: "Perusahaan & Institusi",
    highlight: false,
  },
];

const comparison = [
  {
    label: "Website / Company Profile",
    values: [true, true, true],
  },
  {
    label: "Dashboard Admin",
    values: [false, true, true],
  },
  {
    label: "Software Custom",
    values: [false, true, true],
  },
  {
    label: "Mobile App",
    values: [false, true, true],
  },
  {
    label: "AI & Automation",
    values: [false, false, true],
  },
  {
    label: "Enterprise System (ERP / SIMRS)",
    values: [false, false, true],
  },
  {
    label: "Cloud & DevOps",
    values: [false, true, true],
  },
  {
    label: "SEO & Performance",
    values: [true, true, true],
  },
  {
    label: "Maintenance & Support",
    values: ["Basic", "Priority", "Dedicated"],
  },
];

export default function Pricing() {
  return (
    <Layout>
      <Helmet>
        <title>Harga Jasa IT Malang | MYTECH Indonesia</title>
        <meta
          name="description"
          content="Harga jasa IT di Malang dari MYTECH Indonesia. Paket Starter, Business, dan Enterprise untuk website, software custom, AI, cloud, dan sistem enterprise."
        />
        <meta
          name="keywords"
          content="harga jasa IT malang, software house malang, jasa pembuatan website malang, jasa software custom malang"
        />
        <link rel="canonical" href="https://mytech-indonesia.web.id/pricing" />
      </Helmet>

      <PageTransition>

        {/* ================= HERO ================= */}
        <section className="py-24 bg-gradient-hero text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
            >
              Harga Jasa IT Malang
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80 text-lg"
            >
              Paket layanan IT fleksibel untuk UMKM, startup, hingga enterprise.
              Transparan, scalable, dan sesuai kebutuhan bisnis Anda.
            </motion.p>
          </div>
        </section>

        {/* ================= PLAN CARDS ================= */}
        <section className="py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 text-center ${
                  plan.highlight
                    ? "border-accent shadow-xl scale-[1.03]"
                    : "bg-card"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block mb-4 text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full">
                    Paling Banyak Dipilih
                  </span>
                )}

                <h2 className="text-2xl font-serif font-bold mb-2">
                  {plan.name}
                </h2>

                <p className="text-muted-foreground mb-4">
                  {plan.desc}
                </p>

                <div className="text-3xl font-bold text-primary mb-6">
                  {plan.price}
                </div>

                <Button asChild className="w-full">
                  <Link to="/contact">
                    Konsultasi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPARISON TABLE ================= */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6 overflow-x-auto">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">
              Perbandingan Paket Layanan
            </h2>

            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4">Fitur</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="p-4 text-center">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t">
                    <td className="p-4 font-medium">
                      {row.label}
                    </td>
                    {row.values.map((val, i) => (
                      <td key={i} className="p-4 text-center">
                        {val === true && (
                          <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                        )}
                        {val === false && (
                          <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                        )}
                        {typeof val === "string" && (
                          <span className="text-sm">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SEO TEXT ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              MYTECH Indonesia menyediakan <strong>jasa IT di Malang</strong> dengan
              harga kompetitif untuk pembuatan website, software custom,
              sistem enterprise, cloud infrastructure, dan AI automation.
            </p>

            <p>
              Sebagai <strong>software house Malang</strong>, kami membantu bisnis
              dari berbagai skala untuk tumbuh melalui solusi digital yang aman,
              scalable, dan berorientasi jangka panjang.
            </p>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 text-center bg-muted">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Butuh Estimasi Harga Jasa IT?
          </h2>
          <p className="text-muted-foreground mb-8">
            Konsultasi gratis untuk menentukan solusi dan budget terbaik.
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
