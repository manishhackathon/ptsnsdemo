import AboutUsSection from '@/components/sections/about-us';
import AcademicsSection from '@/components/sections/academics';
import AdmissionsSection from '@/components/sections/admissions';
import ContactSection from '@/components/sections/contact';
import HeroSlider from '@/components/sections/hero-slider';
import NotificationsSection from '@/components/sections/notifications';

export default function Home() {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col gap-12">
        <HeroSlider />
        <NotificationsSection />
        <AboutUsSection />
        <AcademicsSection />
        <AdmissionsSection />
        <ContactSection />
      </div>
    </div>
  );
}
