import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import StatsSection from "@/components/StatsSection";
import WithoutKarteSection from "@/components/WithoutKarteSection";
import MendanStructureSection from "@/components/MendanStructureSection";
import WithKarteSection from "@/components/WithKarteSection";
import NoCodeSection from "@/components/NoCodeSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import RoleValueSection from "@/components/RoleValueSection";
import SuccessLadderSection from "@/components/SuccessLadderSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTABanner from "@/components/CTABanner";
import VideoSection from "@/components/VideoSection";
import FlowSection from "@/components/FlowSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <WithoutKarteSection />
      <MendanStructureSection />
      <WithKarteSection />
      <NoCodeSection />
      <AnalyticsSection />
      <RoleValueSection />
      <SuccessLadderSection />
      <FeaturesSection />
      <CTABanner />
      <VideoSection />
      <FlowSection />
      <SupportSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
