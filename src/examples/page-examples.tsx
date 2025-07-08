// Examples showing how to use the new component structure

import { 
  HomeBanner,
  Features,
  CustomersLogo,
  CallToAction,
  Integration,
  FeaturesCardLayout
} from "@/sections";

import {
  homeBannerContent,
  featuresContent,
  customersLogoContent,
  callToAction1Content,
  integrationContent,
  featuresCardLayoutContent
} from "@/data/content";

// Example: Basic Homepage
export const ExampleHomePage = () => {
  return (
    <>
      <HomeBanner data={homeBannerContent} />
      <CustomersLogo data={customersLogoContent} />
      <Features data={featuresContent} />
      <CallToAction data={callToAction1Content} variant="centered" />
    </>
  );
};

// Example: Features Page
export const ExampleFeaturesPage = () => {
  return (
    <>
      <HomeBanner 
        data={{
          ...homeBannerContent,
          title: "Powerful Features",
          description: "Discover what makes our platform special",
          note: "Feature Overview"
        }} 
      />
      <FeaturesCardLayout data={featuresCardLayoutContent} />
      <Features data={featuresContent} />
      <Integration data={integrationContent} />
    </>
  );
};

// Example: Custom CTA variations
export const ExampleCTAVariations = () => {
  return (
    <>
      {/* Centered CTA */}
      <CallToAction 
        data={callToAction1Content} 
        variant="centered" 
      />
      
      {/* Split layout CTA */}
      <CallToAction 
        data={callToAction1Content} 
        variant="split" 
      />
      
      {/* Default card CTA */}
      <CallToAction 
        data={callToAction1Content} 
        variant="default" 
      />
    </>
  );
};

// Example: Custom content override
export const ExampleCustomContent = () => {
  const customFeatures = [
    {
      title: "Custom Feature 1",
      images: ["/images/custom-1.png"],
      description: "This is a custom feature description",
      list: ["Benefit 1", "Benefit 2", "Benefit 3"],
      button: {
        enable: true,
        label: "Learn More",
        link: "/features"
      }
    }
  ];

  return (
    <>
      <Features 
        data={customFeatures}
        title="Our Custom Solutions"
        description="Tailored specifically for your needs"
      />
    </>
  );
};