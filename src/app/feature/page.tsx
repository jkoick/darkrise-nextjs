import { Hero, FeaturesCardLayout, Features as FeaturesSection, CallToAction } from "@/sections";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import SeoMeta from "@/partials/SeoMeta";
import {
  featuresPageMetadata,
  featuresHeroContent,
  featuresCardLayoutContent,
  featuresContent,
  callToAction1Content
} from "@/data/content";

const FeaturesPage = () => {
  return (
    <>
      <SeoMeta {...featuresPageMetadata} />
      <Hero data={featuresHeroContent} />
      <FeaturesCardLayout data={featuresCardLayoutContent} />
      <FeaturesSection data={featuresContent} />
      <section className="section pt-0">
        <div className="container">
          <FeaturedTestimonial
            alternateLayout
            featuredCustomer={"David Miller"}
          />
        </div>
      </section>
      <CallToAction data={callToAction1Content} variant="centered" />
    </>
  );
};

export default FeaturesPage;
