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
import { FeatureWrapper } from "@/components/sections/FeatureWrapper";
import { Footer } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPoints } from "@/components/sections/PainPoints";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPoints></PainPoints>
      <FeatureWrapper></FeatureWrapper>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  );
}
