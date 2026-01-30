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

  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[96px]">

          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="MYTECH Indonesia"
              className="h-16 md:h-18 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.05]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/" className={`text-sm font-medium hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`}>
              Beranda
            </Link>

            <Link to="/about" className={`text-sm font-medium hover:text-primary ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"}`}>
              Tentang
            </Link>

            {/* LAYANAN */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium hover:text-primary ${isServiceActive ? "text-primary" : "text-muted-foreground"}`}>
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

            <Link to="/portfolio" className={`text-sm font-medium hover:text-primary ${location.pathname === "/portfolio" ? "text-primary" : "text-muted-foreground"}`}>
              Portofolio
            </Link>

            <Link to="/team" className={`text-sm font-medium hover:text-primary ${location.pathname === "/team" ? "text-primary" : "text-muted-foreground"}`}>
              Tim
            </Link>

            <Link to="/contact" className={`text-sm font-medium hover:text-primary ${location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"}`}>
              Kontak
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>

          {/* MOBILE MENU */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <div className="space-y-2">
                <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-50">
                  Beranda
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-50">
                  Tentang
                </Link>
                <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-50">
                  Portofolio
                </Link>
                <Link to="/team" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-50">
                  Tim
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-50">
                  Kontak
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
