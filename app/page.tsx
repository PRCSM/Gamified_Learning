import Navbar from '@/components/landing/Navbar';
import LandingHero from '@/components/landing/LandingHero';
import FeatureSection from '@/components/landing/FeatureSection';
import LearningFlowSection from '@/components/landing/LearningFlowSection';
import CallToActionSection from '@/components/landing/CallToActionSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      <LandingHero />
      <FeatureSection />
      <LearningFlowSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
