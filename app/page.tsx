import MemberSection from "@/components/MemberSection";
import PortfolioSection from "@/components/PortfolioSection";
import PartnerSection from "@/components/PartnerSection";
import MainSection from "@/components/MainSection";
import ContactSection from "@/components/ContactSection";
import CareerSection from "@/components/CareerSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <CareerSection />
      <PortfolioSection />
      <PartnerSection />
      <MemberSection />
      <ContactSection />
    </>
  );
}
