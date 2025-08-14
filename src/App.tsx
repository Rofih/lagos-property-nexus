import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "@/components/layout/Navbar";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import PropertyDetail from "@/pages/PropertyDetail";
import UtilityPayment from "@/pages/UtilityPayment";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Regulations from "@/pages/Regulations";
import BuyerDashboard from "@/pages/dashboards/BuyerDashboard";
import OwnerDashboard from "@/pages/dashboards/OwnerDashboard";
import FirmDashboard from "@/pages/dashboards/FirmDashboard";
import GovernmentDashboard from "@/pages/dashboards/GovernmentDashboard";
import AdminDashboard from "@/pages/dashboards/AdminDashboard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/utility-payments" element={<UtilityPayment />} />

        <Route element={<ProtectedRoute allowedRoles={["buyer"]} redirectTo="/login" />}>
          <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["owner"]} redirectTo="/login" />}>
          <Route path="/dashboard/owner" element={<OwnerDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["firm"]} redirectTo="/login" />}>
          <Route path="/dashboard/firm" element={<FirmDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["government"]} redirectTo="/login" />}>
          <Route path="/dashboard/government" element={<GovernmentDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} redirectTo="/login" />}>
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Route>

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
