import AboutUsSection from '@/components/sections/about-us';
import AcademicsSection from '@/components/sections/academics';
import AdmissionsSection from '@/components/sections/admissions';
import ContactSection from '@/components/sections/contact';
import HeroSlider from '@/components/sections/hero-slider';

export default function Home() {
  return (
    <div className="px-4 py-2">
      <div className="flex flex-col gap-16 md:gap-24">
        <HeroSlider />
        <AboutUsSection />
        <AcademicsSection />
        <AdmissionsSection />
        <ContactSection />
      </div>
    </div>
  );
}
