import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none">MYTECH</span>
                <span className="text-[10px] text-primary-foreground/60 tracking-widest">
                  INDONESIA
                </span>
              </div>
            </div>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              MYTECH Indonesia adalah perusahaan teknologi yang membangun solusi 
              software custom, cloud systems, dan digital platforms untuk mendukung 
              transformasi bisnis modern.
            </p>

            <p className="text-primary-foreground/50 text-xs">
              Membangun sistem yang scalable, secure, dan future-ready.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              Navigasi
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { name: "Beranda", path: "/" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Layanan", path: "/services" },
                { name: "Portofolio", path: "/portfolio" },
                { name: "Tim", path: "/team" },
                { name: "Kontak", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              Kontak Kami
            </h4>

            <ul className="space-y-4 text-sm">

              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail size={16} className="text-accent shrink-0" />
                <span>hello@mytech-indonesia.web.id</span>
              </li>

              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={16} className="text-accent shrink-0" />
                <span>+62 851 5692 8164</span>
              </li>

              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>
                  Jl. Jakarta No.48, Sumbersari, <br></br>
                  Kec. Lowokwaru, <br></br>
                   Kota Malang, Jawa Timur 65113
                </span>
              </li>

            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              Ikuti Kami
            </h4>

            <p className="text-primary-foreground/60 text-sm mb-4">
              Dapatkan update terbaru seputar produk, teknologi, dan insight digital dari MYTECH.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label="Social Media"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center 
                             hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center space-y-2">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} MYTECH Indonesia. Seluruh hak cipta dilindungi.
          </p>

          <p className="text-primary-foreground/40 text-xs">
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
