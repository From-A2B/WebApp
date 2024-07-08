import { FeaturesSection } from './_component/FeaturesSection';
import { GlobeSection } from './_component/GlobeSection';
import { HeroImageBackground } from './_component/Hero/HeroHeader';
import { StepSection } from './_component/StepSection';
import { TestimonialsSection } from './_component/TestimonialsSection';

const RoutePage = () => {
  return (
    <>
      <HeroImageBackground />
      <StepSection />
      <GlobeSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
};

export default RoutePage;
