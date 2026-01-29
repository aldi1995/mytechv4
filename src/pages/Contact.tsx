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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast({
      title: "Pesan berhasil dikirim ✅",
      description: "Tim MYTECH akan menghubungi Anda dalam waktu maksimal 1x24 jam kerja.",
    });

    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
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

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

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
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6"
              >
                Diskusikan Kebutuhan Digital Bisnis Anda
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-foreground/80 leading-relaxed"
              >
                Tim MYTECH siap membantu Anda merancang solusi software custom, 
                enterprise systems, cloud platform, dan AI automation untuk mendukung 
                pertumbuhan bisnis Anda.
              </motion.p>

            </div>
          </div>
        </section>

        {/* MAIN SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* LEFT — FORM */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  <h2 className="text-3xl font-serif font-bold text-foreground">
                    Kirim Permintaan Konsultasi
                  </h2>
                </div>

                <p className="text-muted-foreground mb-8">
                  Ceritakan kebutuhan Anda — tim kami akan menyiapkan rekomendasi solusi terbaik.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nama Lengkap *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Renaldi B. Widakdo"
                        required
                        className="bg-muted border-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@perusahaan.com"
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nama Perusahaan</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="PT Contoh Teknologi"
                        className="bg-muted border-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 812 3456 7890"
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Topik / Kebutuhan *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Custom / Cloud / AI / Integration"
                      required
                      className="bg-muted border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Detail Kebutuhan *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan sistem, fitur utama, target pengguna, timeline, dan estimasi budget (opsional)..."
                      required
                      rows={6}
                      className="bg-muted border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Mengirim..." : (
                      <>
                        Kirim Permintaan
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Data Anda aman & tidak dibagikan ke pihak ketiga
                  </div>

                </form>
              </motion.div>

              {/* RIGHT — CONTACT SECTIONS */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >

                {/* PHONE */}
                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-6 h-6 text-accent" />
                    <h3 className="font-serif font-bold text-lg">Telepon</h3>
                  </div>
                  <p className="text-primary-foreground/90 text-lg font-medium">
                    +62 851 5692 8164
                  </p>
                  <p className="text-primary-foreground/60 text-sm mt-1">
                    Senin–Jumat, 09.00–18.00 WIB
                  </p>
                </div>

                {/* EMAIL */}
                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-6 h-6 text-accent" />
                    <h3 className="font-serif font-bold text-lg">Email </h3>
                  </div>
                  <p className="text-primary-foreground/90 text-lg font-medium">
                    hello@mytech-indonesia.web.id
                  </p>
                  <p className="text-primary-foreground/60 text-sm mt-1">
                    Respon maksimal 1x24 jam kerja
                  </p>
                </div>

                {/* ADDRESS */}
                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-accent" />
                    <h3 className="font-serif font-bold text-lg">Alamat Kantor</h3>
                  </div>
                  <div className="text-primary-foreground/85 text-sm leading-relaxed">
                    <p className="font-medium">PT. Mytech Teknologi Indonesia</p>
                    Jl. Jakarta No.48, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65113
                  </div>
                </div>

                {/* MAP INFO (TEXT ONLY) */}
                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-accent" />
                    <h3 className="font-serif font-bold text-lg">Meeting & Kunjungan</h3>
                  </div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Kunjungan kantor tersedia berdasarkan jadwal.  
                    Meeting online tersedia melalui Google Meet atau Zoom.
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
