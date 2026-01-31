import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import SaaS from "./pages/SaaS";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import SoftwareCustom from "./pages/services/SoftwareCustom";
import MobileApp from "./pages/services/MobileApp";
import AIService from "./pages/services/AIService";
import CloudService from "./pages/services/CloudService";
import EnterpriseService from "./pages/services/EnterpriseService";
import IntegrationService from "./pages/services/IntegrationService";
import Consulting from "./pages/services/Consulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services/software-custom" element={<SoftwareCustom />} />
          <Route path="/services/mobile-app" element={<MobileApp />} />
          <Route path="/services/ai" element={<AIService />} />
          <Route path="/services/cloud" element={<CloudService />} />
          <Route path="/services/enterprise" element={<EnterpriseService />} />
          <Route path="/services/integration" element={<IntegrationService />} />
          <Route path="/services/consulting" element={<Consulting />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
