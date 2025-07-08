import { HomeBanner, Values, Team, CallToAction } from "@/sections";
import SeoMeta from "@/partials/SeoMeta";
import {
  aboutPageMetadata,
  aboutBannerContent,
  valuesContent,
  teamContent,
  careerCtaContent,
  callToAction1Content
} from "@/data/content";

const About = () => {
  return (
    <>
      <SeoMeta {...aboutPageMetadata} />
      <HomeBanner data={aboutBannerContent} />
      <Values data={valuesContent} />
      <Team data={teamContent} />
      <CallToAction data={careerCtaContent} variant="centered" />
      <CallToAction data={callToAction1Content} variant="default" />
    </>
  );
};

export default About;
