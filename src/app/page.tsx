import HomeBanner from "@/sections/HomeBanner";
import CustomersLogo from "@/sections/CustomersLogo";
import FeaturesStickyLayout from "@/sections/FeaturesStickyLayout";
import FeaturesCardLayout from "@/sections/FeaturesCardLayout";
import Integration from "@/sections/Integration";
import CallToAction from "@/sections/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import {
  homeBannerContent,
  customersLogoContent,
  featuresContent,
  featuresCardLayoutContent,
  integrationContent,
  callToAction1Content
} from "@/data/content";

const Home = () => {
  return (
    <>
      <SeoMeta />
      <HomeBanner data={homeBannerContent} />
      <CustomersLogo data={customersLogoContent} />
      <FeaturesStickyLayout data={featuresContent} />
      <FeaturesCardLayout data={featuresCardLayoutContent} />
      <Integration data={integrationContent} />
      <CallToAction data={callToAction1Content} variant="centered" />
    </>
  );
};

export default Home;
