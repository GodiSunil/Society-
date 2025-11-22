import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Event1 from "./pages/events/Event1";
import Event2 from "./pages/events/Event2";
import Event3 from "./pages/events/Event3";
import Event4 from "./pages/events/Event4";
import Event5 from "./pages/events/Event5";
import Event6 from "./pages/events/Event6";
import ServiceDetail from "./pages/ServiceDetail";
import VisionMission from "./pages/VisionMission";
import ExecutiveBody from "./pages/ExecutiveBody";
import PresidentMessage from './pages/PresidentMessage';
import Policies from './pages/Policies';
import AnnualReports from './pages/AnnualReports';
import AuditReports from './pages/AuditReports';
import CurrentProjects from './pages/CurrentProjects';
import CompletedProjects from './pages/CompletedProjects';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import Donate from './pages/Donate';
import DetailedAnnualReport from './pages/DetailedAnnualReport';
import AnnualReport2018_2022 from './pages/AnnualReport2018_2022';
import AnnualReport2024_2025 from './pages/AnnualReport2024_2025';
import FinancePolicy from './pages/policies/FinancePolicy';
import NonCompliancePolicy from './pages/policies/NonCompliancePolicy';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/1" element={<Event1 />} />
          <Route path="/event/2" element={<Event2 />} />
          <Route path="/event/3" element={<Event3 />} />
          <Route path="/event/4" element={<Event4 />} />
          <Route path="/event/5" element={<Event5 />} />
          <Route path="/event/6" element={<Event6 />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/executive-body" element={<ExecutiveBody />} />
          <Route path="/president-message" element={<PresidentMessage />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/policies/finance" element={<FinancePolicy />} />
          <Route path="/policies/non-compliance" element={<NonCompliancePolicy />} />
          <Route path="/annual-reports" element={<AnnualReports />} />
          <Route path="/annual-report/detail" element={<DetailedAnnualReport />} />
          <Route path="/annual-report/2018-2022" element={<AnnualReport2018_2022 />} />
          <Route path="/annual-report/2024-2025" element={<AnnualReport2024_2025 />} />
          <Route path="/audit-reports" element={<AuditReports />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;