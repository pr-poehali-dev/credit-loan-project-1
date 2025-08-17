
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ConsumerLoan from "./pages/ConsumerLoan";
import Mortgage from "./pages/Mortgage";
import AutoLoan from "./pages/AutoLoan";
import MicroloansPage from "./pages/MicroloansPage";
import DebitCardsPage from "./pages/DebitCardsPage";
import CreditCards from "./pages/CreditCards";
import BlogPage from "./pages/BlogPage";
import FastLoanRepaymentPage from "./pages/FastLoanRepaymentPage";
import CreditRefinancingPage from "./pages/CreditRefinancingPage";
import HowBanksApproveLoans from "./pages/blog/HowBanksApproveLoans";
import ImproveCreditHistory from "./pages/blog/ImproveCreditHistory";
import WhyBankRefusedLoan from "./pages/blog/WhyBankRefusedLoan";
import MortgageStepByStep from "./pages/blog/MortgageStepByStep";
import AutoLoanGuide from "./pages/blog/AutoLoanGuide";
import MortgageVsRent2025 from "./pages/blog/MortgageVsRent2025";
import LoanInsuranceGuide from "./pages/blog/LoanInsuranceGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/consumer-loan" element={<ConsumerLoan />} />
            <Route path="/mortgage" element={<Mortgage />} />
            <Route path="/auto-loan" element={<AutoLoan />} />
            <Route path="/microloans" element={<MicroloansPage />} />
            <Route path="/debit-cards" element={<DebitCardsPage />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/credit-refinancing" element={<CreditRefinancingPage />} />
            <Route path="/blog/fast-loan-repayment" element={<FastLoanRepaymentPage />} />
            <Route path="/blog/how-banks-approve-loans" element={<HowBanksApproveLoans />} />
            <Route path="/blog/improve-credit-history" element={<ImproveCreditHistory />} />
            <Route path="/blog/why-bank-refused-loan" element={<WhyBankRefusedLoan />} />
            <Route path="/blog/mortgage-step-by-step" element={<MortgageStepByStep />} />
            <Route path="/blog/auto-loan-guide" element={<AutoLoanGuide />} />
            <Route path="/blog/mortgage-vs-rent-2025" element={<MortgageVsRent2025 />} />
            <Route path="/blog/loan-insurance-guide" element={<LoanInsuranceGuide />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;