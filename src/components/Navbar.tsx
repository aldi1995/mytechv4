import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/about" },
  { name: "Portofolio", path: "/portfolio" },
  { name: "Tim", path: "/team" },
  { name: "Kontak", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const location = useLocation();

  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-foreground leading-none">MYTECH</span>
              <span className="text-[10px] text-muted-foreground tracking-widest">INDONESIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {/* Beranda */}
            <Link
              to="/"
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Beranda
            </Link>

            {/* Tentang */}
            <Link
              to="/about"
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Tentang
            </Link>

            {/* Layanan Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
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
                    className="absolute top-full mt-3 w-64 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Portofolio */}
            <Link
              to="/portfolio"
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/portfolio" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Portofolio
            </Link>

            {/* Tim */}
            <Link
              to="/team"
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/team" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Tim
            </Link>

            {/* Kontak */}
            <Link
              to="/contact"
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Kontak
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">

                <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted">
                  Beranda
                </Link>

                <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted">
                  Tentang
                </Link>

                {/* Mobile Layanan Dropdown */}
                <div className="px-4">
                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="flex w-full items-center justify-between py-2 text-muted-foreground hover:text-primary"
                  >
                    Layanan
                    <ChevronDown className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 mt-2 space-y-1"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-primary"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted">
                  Portofolio
                </Link>

                <Link to="/team" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted">
                  Tim
                </Link>

                <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted">
                  Kontak
                </Link>

                {/* CTA */}
                <div className="pt-2 px-4">
                  <Button asChild className="w-full" size="sm">
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
