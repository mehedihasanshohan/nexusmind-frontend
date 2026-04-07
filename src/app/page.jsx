// import { HeroSection } from "@/components/sections/HeroSection";
// import { VideoSection } from "@/components/sections/VideoSection";

// export default function Home() {
//   return (
//     <>
//       <HeroSection />
//       <VideoSection />
//     </>
//   );
// }




import { CTASection } from "@/components/sections/CTAsection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { FeatureWrapper } from "@/components/sections/FeatureWrapper";
import FooterSection from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPoints } from "@/components/sections/PainPoints";
import { Testimonials } from "@/components/sections/TestimonialSection";
import TimelineSection from "@/components/sections/TimelineSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPoints></PainPoints>
      <FeatureWrapper></FeatureWrapper>
      <TimelineSection></TimelineSection>
      <CurriculumSection></CurriculumSection>
      <Testimonials></Testimonials>
      <CTASection></CTASection>
      <FooterSection></FooterSection>
    </>
  );
}
