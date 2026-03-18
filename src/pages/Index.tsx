import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import QuoteBanner from "@/components/landing/QuoteBanner";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import SwotSection from "@/components/landing/SwotSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <QuoteBanner />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <ComparisonSection />
    <SwotSection />
    <CTASection />
    <Footer />
  </>
);

export default Index;
