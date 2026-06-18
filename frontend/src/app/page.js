import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedVenuesSection from "@/components/home/FeaturedVenuesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TrustSection from "@/components/home/TrustSection";
import BecomeHostSection from "@/components/home/BecomeHostSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedVenuesSection />
        <HowItWorksSection />
        <TrustSection />
        <BecomeHostSection />
      </main>

      <Footer />
    </>
  );
}