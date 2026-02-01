import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1200));

    toast({
      title: "Pesan berhasil dikirim ✅",
      description:
        "Tim MYTECH akan menghubungi Anda maksimal 1x24 jam kerja.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageTransition>

        {/* HERO */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            >
              Hubungi MYTECH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
            >
              Diskusikan Kebutuhan Digital Bisnis Anda
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80"
            >
              Konsultasi software custom, SaaS, cloud, dan AI automation
              bersama MYTECH Indonesia.
            </motion.p>
          </div>
        </section>

        {/* MAIN */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* LEFT — FORM + MAP */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                {/* FORM */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-accent" />
                    <h2 className="text-3xl font-serif font-bold">
                      Kirim Permintaan Konsultasi
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Lengkap *"
                        required
                        className="bg-muted"
                      />
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        required
                        className="bg-muted"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nama Perusahaan"
                        className="bg-muted"
                      />
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Nomor Telepon"
                        className="bg-muted"
                      />
                    </div>

                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Topik / Kebutuhan *"
                      required
                      className="bg-muted"
                    />

                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan Anda..."
                      required
                      rows={6}
                      className="bg-muted resize-none"
                    />

                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      Data Anda aman & tidak dibagikan ke pihak ketiga
                    </div>
                  </form>
                </div>

                {/* MAP — DI BAWAH FORM */}
                <div className="rounded-2xl overflow-hidden border shadow-sm">
                  <iframe
                    title="Lokasi MYTECH Indonesia"
                    src="https://www.google.com/maps?q=Jl.%20Jakarta%20No.48%2C%20Sumbersari%2C%20Lowokwaru%2C%20Malang&output=embed"
                    className="w-full h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* RIGHT — INFO CARDS */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <Phone className="w-6 h-6 text-accent mb-2" />
                  <p className="font-semibold text-lg">
                    +62 851 5692 8164
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    Senin–Jumat, 09.00–18.00 WIB
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <Mail className="w-6 h-6 text-accent mb-2" />
                  <p className="font-semibold text-lg">
                    hello@mytech-indonesia.web.id
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    Respon maksimal 1x24 jam kerja
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <MapPin className="w-6 h-6 text-accent mb-2" />
                  <p className="font-semibold">
                    Jl. Jakarta No.48, Lowokwaru
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    Kota Malang, Jawa Timur
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <Clock className="w-6 h-6 text-accent mb-2" />
                  <p className="text-sm text-primary-foreground/80">
                    Kunjungan kantor berdasarkan janji.  
                    Meeting online via Google Meet / Zoom tersedia.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </PageTransition>
    </Layout>
  );
};

export default Contact;
