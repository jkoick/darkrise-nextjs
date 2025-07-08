import { ContactHero, CallToAction } from "@/sections";
import ContactFormSection from "@/partials/ContactFormSection";
import SeoMeta from "@/partials/SeoMeta";
import {
  contactPageMetadata,
  contactHeroContent,
  callToAction1Content
} from "@/data/content";

const Contact = () => {
  return (
    <>
      <SeoMeta {...contactPageMetadata} />
      <ContactHero data={contactHeroContent} />
      <ContactFormSection />
      <CallToAction data={callToAction1Content} variant="default" />
    </>
  );
};

export default Contact;
