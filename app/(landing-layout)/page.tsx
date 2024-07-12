import { FeaturesSection } from './_component/featuresSection';
import { GlobeSection } from './_component/globeSection';
import { HeroImageBackground } from './_component/hero/heroHeader';
import { StepSection } from './_component/stepSection';
import { TestimonialsSection } from './_component/testimonialsSection';

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
