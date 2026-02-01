import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

/* ===== MAIN PAGES ===== */
import Index from "@/pages/Index";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

/* ===== SERVICES ===== */
import Services from "@/pages/Services";
import SoftwareCustom from "@/pages/services/SoftwareCustom";
import MobileApp from "@/pages/services/MobileApp";
import AIService from "@/pages/services/AIService";
import CloudService from "@/pages/services/CloudService";
import EnterpriseService from "@/pages/services/EnterpriseService";
import IntegrationService from "@/pages/services/IntegrationService";
import ConsultingService from "@/pages/services/Consulting";

/* ===== SPECIAL PAGES ===== */
import SaaS from "@/pages/SaaS";
import Pricing from "@/pages/Pricing";
import JasaITMalang from "@/pages/JasaITMalang";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* ===== CORE ===== */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            {/* ===== SERVICES ===== */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/software-custom" element={<SoftwareCustom />} />
            <Route path="/services/mobile-app" element={<MobileApp />} />
            <Route path="/services/ai" element={<AIService />} />
            <Route path="/services/cloud" element={<CloudService />} />
            <Route path="/services/enterprise" element={<EnterpriseService />} />
            <Route path="/services/integration" element={<IntegrationService />} />
            <Route path="/services/consulting" element={<ConsultingService />} />

            {/* ===== SAAS ===== */}
            <Route path="/saas" element={<SaaS />} />

            {/* ===== PRICING ===== */}
            <Route path="/pricing" element={<Pricing />} />

            {/* ===== SEO LANDING ===== */}
            <Route path="/jasa-it-malang" element={<JasaITMalang />} />

            {/* ===== 404 ===== */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
}
