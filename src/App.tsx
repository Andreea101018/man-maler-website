import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />

<I18nProvider>
  <BrowserRouter>

    <AnalyticsTracker />

    <div className="flex flex-col min-h-screen">

      <Header />

      <main className="flex flex-col flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ydelser" element={<Services />} />
          <Route path="/referencer" element={<Projects />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/vilkar" element={<Terms />} />
          <Route path="/privatliv" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <CookieBanner />

    </div>
  </BrowserRouter>
</I18nProvider>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
