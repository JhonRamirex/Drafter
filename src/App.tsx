
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Moda from "./pages/Moda";
import Espacial from "./pages/Espacial";
import Gastro from "./pages/Gastro";
import Social from "./pages/Social";
import QuienesSomos from "./pages/QuienesSomos";
import Paquetes from "./pages/Paquetes";
import NotFound from "./pages/NotFound";
import Noticias from "./pages/Noticias";
import BlogDetail from "./pages/BlogDetail";
import Cita from "./pages/Cita";
import WhatsappFloatingButton from './components/WhatsappFloatingButton';
import ScrollToTop from './components/ScrollToTop';

import Galeria from './pages/Galeria';
import DynamicGallery from './components/DynamicGallery';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import AvisoLegal from './pages/AvisoLegal';
import CookieBanner from './components/CookieBanner';
import GoogleAnalytics from './components/GoogleAnalytics';
// import ConsentDebugger from './components/ConsentDebugger';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/moda" element={<Moda />} />
          <Route path="/espacial" element={<Espacial />} />
          <Route path="/gastro" element={<Gastro />} />
          <Route path="/social" element={<Social />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<BlogDetail />} />
          <Route path="/cita/:packageName/:price" element={<Cita />} />
          
          {/* Páginas legales */}
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          
          {/* Galería dinámica */}
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/galeria/:categoria/:album" element={<DynamicGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          <WhatsappFloatingButton />
          <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
