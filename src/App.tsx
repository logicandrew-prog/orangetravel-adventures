import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import Tips from "./pages/Tips";
import Contacts from "./pages/Contacts";
import Moscow from "./pages/tours/Moscow";
import SPB from "./pages/tours/SPB";
import Kazan from "./pages/tours/Kazan";
import Sochi from "./pages/tours/Sochi";
import Altai from "./pages/tours/Altai";
import Baikal from "./pages/tours/Baikal";
import Kamchatka from "./pages/tours/Kamchatka";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/moscow" element={<Moscow />} />
          <Route path="/tours/spb" element={<SPB />} />
          <Route path="/tours/kazan" element={<Kazan />} />
          <Route path="/tours/sochi" element={<Sochi />} />
          <Route path="/tours/altai" element={<Altai />} />
          <Route path="/tours/baikal" element={<Baikal />} />
          <Route path="/tours/kamchatka" element={<Kamchatka />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
