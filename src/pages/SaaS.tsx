import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Hospital,
  MessageSquare,
  Users,
  Utensils,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const saasProducts = [
  {
    title: "SIMRS PRO",
    subtitle: "Sistem Informasi Manajemen Rumah Sakit",
    icon: Hospital,
    image: "/simrs.png",
    description:
      "Platform enterprise SIMRS untuk operasional rumah sakit modern: EMR, rawat jalan & inap, farmasi, billing, audit trail, dan dashboard manajemen.",
    features: [
      "Electronic Medical Records (EMR)",
      "Rawat Jalan & Rawat Inap",
      "Farmasi & Billing Terintegrasi",
      "Audit Trail & Compliance",
      "Role-Based Access Control",
      "Dashboard Direktur & Manajemen",
    ],
    metrics: [
      { label: "Efisiensi Operasional", value: "+90%" },
      { label: "Compliance", value: "100%" },
      { label: "Modul Aktif", value: "15+" },
    ],
  },

  {
    title: "WABA Chat",
    subtitle: "WhatsApp Business API – Customer Support Online",
    icon: MessageSquare,
    image: "/waba.png",
    description:
      "Platform customer service berbasis WhatsApp Business API untuk mengelola chat pelanggan, automasi CS, CRM ringan, dan reporting real-time.",
    features: [
      "WhatsApp API Integration",
      "Multi-Agent Dashboard",
      "Auto Reply & Chat Routing",
      "Customer History & CRM",
      "Chat Analytics & Reporting",
      "Webhook & API Integration",
    ],
    metrics: [
      { label: "Response Time", value: "<10 detik" },
      { label: "Agent Productivity", value: "+65%" },
      { label: "Handled Conversations", value: "10K+" },
    ],
  },

  {
    title: "Remotely",
    subtitle: "HRMS & Workforce Management Platform",
    icon: Users,
    image: "/remotely.png",
    description:
      "Platform HRMS untuk manajemen karyawan remote dan hybrid: absensi, payroll, performance tracking, project tracking, dan HR analytics.",
    features: [
      "Attendance & Time Tracking",
      "Payroll & Compensation",
      "Employee Performance Dashboard",
      "Remote Work Management",
      "HR Analytics & Reports",
      "Access Control & Role Management",
    ],
    metrics: [
      { label: "HR Efficiency", value: "+70%" },
      { label: "Employees Managed", value: "1K+" },
      { label: "Automation Level", value: "High" },
    ],
  },

  {
    title: "Culinasys",
    subtitle: "Smart Kitchen & Food Management System",
    icon: Utensils,
    image: "/culinasys.png",
    description:
      "Sistem digital untuk manajemen dapur, inventory bahan makanan, costing resep, POS dapur, dan analitik profit restoran.",
    features: [
      "Recipe Costing System",
      "Inventory & Stock Control",
      "Kitchen Workflow Automation",
      "POS & Order Management",
      "Profit Margin Analytics",
      "Supplier & Purchase Tracking",
    ],
    metrics: [
      { label: "Food Cost Efficiency", value: "+55%" },
      { label: "Stock Waste Reduction", value: "-40%" },
      { label: "Profit Tracking", value: "Real-Time" },
    ],
  },
];

export default function SaaS() {
  return (
    <Layout>
      <PageTransition>

        {/* HERO */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            >
              Produk SaaS MYTECH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
            >
              Produk Digital untuk Operasional Bisnis Modern
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80"
            >
              Solusi SaaS MYTECH dirancang untuk meningkatkan efisiensi, automasi,
              dan performa operasional di berbagai industri.
            </motion.p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-20">
          <div className="container mx-auto px-6 space-y-20">

            {saasProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid lg:grid-cols-2 gap-14 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="rounded-2xl overflow-hidden shadow-card bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <product.icon className="w-6 h-6 text-accent" />
                    <span className="text-accent font-medium text-sm">
                      Produk SaaS
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                    {product.title}
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    {product.subtitle}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* FEATURES */}
                  <ul className="grid md:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* METRICS */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {product.metrics.map((metric) => (
                      <div key={metric.label} className="bg-muted p-4 rounded-xl text-center">
                        <div className="text-primary font-bold text-lg">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to="/contact">
                        Demo & Konsultasi
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button variant="outline" asChild>
                      <Link to="/portfolio">Lihat Studi Kasus</Link>
                    </Button>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </section>

      </PageTransition>
    </Layout>
  );
}
