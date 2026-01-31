import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const serviceLinks = [
  { name: "Software Custom", path: "/services/software-custom" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "AI & Automation", path: "/services/ai" },
  { name: "Cloud & DevOps", path: "/services/cloud" },
  { name: "Enterprise Systems", path: "/services/enterprise" },
  { name: "System Integration", path: "/services/integration" },
  { name: "Produk SaaS", path: "/saas" },
  { name: "IT Consulting", path: "/services/consulting" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const location = useLocation();

  const isServiceActive =
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/saas");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[96px]">

          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="MYTECH Indonesia"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.05]"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" label="Beranda" current={location.pathname === "/"} />
            <NavLink to="/about" label="Tentang" current={location.pathname === "/about"} />

            {/* LAYANAN */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium hover:text-primary ${
                  isServiceActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Layanan
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-3 w-64 bg-white border rounded-xl shadow-lg overflow-hidden"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/portfolio" label="Portofolio" current={location.pathname === "/portfolio"} />

            {/* ✅ BLOG */}
            <NavLink to="/blog" label="Blog" current={location.pathname.startsWith("/blog")} />

            <NavLink to="/team" label="Tim" current={location.pathname === "/team"} />
            <NavLink to="/contact" label="Kontak" current={location.pathname === "/contact"} />
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <div className="space-y-1">

                <MobileLink to="/" label="Beranda" close={() => setIsOpen(false)} />
                <MobileLink to="/about" label="Tentang" close={() => setIsOpen(false)} />

                {/* MOBILE LAYANAN */}
                <div className="px-4">
                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium"
                  >
                    Layanan
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 mt-1 space-y-1"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm rounded hover:bg-gray-50"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileLink to="/portfolio" label="Portofolio" close={() => setIsOpen(false)} />

                {/* ✅ BLOG MOBILE */}
                <MobileLink to="/blog" label="Blog" close={() => setIsOpen(false)} />

                <MobileLink to="/team" label="Tim" close={() => setIsOpen(false)} />
                <MobileLink to="/contact" label="Kontak" close={() => setIsOpen(false)} />

                {/* CTA MOBILE */}
                <div className="px-4 pt-3">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Hubungi Kami
                    </Link>
                  </Button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

/* ================= COMPONENTS ================= */

const NavLink = ({
  to,
  label,
  current,
}: {
  to: string;
  label: string;
  current: boolean;
}) => (
  <Link
    to={to}
    className={`text-sm font-medium hover:text-primary ${
      current ? "text-primary" : "text-muted-foreground"
    }`}
  >
    {label}
  </Link>
);

const MobileLink = ({
  to,
  label,
  close,
}: {
  to: string;
  label: string;
  close: () => void;
}) => (
  <Link
    to={to}
    onClick={close}
    className="block px-4 py-2 text-sm hover:bg-gray-50"
  >
    {label}
  </Link>
);
