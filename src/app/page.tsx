import HomeBanner from "@/sections/HomeBanner";
import CustomersLogo from "@/sections/CustomersLogo";
import BlogCarousel from "@/sections/BlogCarousel";
import FeaturesStickyLayout from "@/sections/FeaturesStickyLayout";
import FeaturesCardLayout from "@/sections/FeaturesCardLayout";
import Integration from "@/sections/Integration";
import SeoMeta from "@/partials/SeoMeta";
import {
  homeBannerContent,
  customersLogoContent,
  featuresContent,
  featuresCardLayoutContent,
  integrationContent,
} from "@/data/content";
import { getFeaturedBlogCarouselContent } from "@/lib/utils/blogToFeaturedProducts";
import CallToAction1 from "@/partials/CallToAction1";

const Home = () => {
  const dynamicBlogCarouselContent = getFeaturedBlogCarouselContent();

  return (
    <>
      <SeoMeta />
      <HomeBanner data={homeBannerContent} />
      <CustomersLogo data={customersLogoContent} />
      <BlogCarousel data={dynamicBlogCarouselContent} />
      <FeaturesStickyLayout data={featuresContent} />
      <FeaturesCardLayout data={featuresCardLayoutContent} />
      <Integration data={integrationContent} />
      <CallToAction1 />
    </>
  );
};

export default Home;
