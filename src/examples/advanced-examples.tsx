// Advanced component examples showcasing specialized use cases

import {
  HomeBanner,
  Features,
  CustomersLogo,
  CallToAction,
  Integration,
  FeaturesCardLayout
} from "@/sections";

import PricingTable from "@/sections/advanced/PricingTable";
import StatsSection from "@/sections/advanced/StatsSection";
import TestimonialGrid from "@/sections/advanced/TestimonialGrid";
import ComparisonTable from "@/sections/advanced/ComparisonTable";

import {
  saasBannerContent,
  ecommerceBannerContent,
  agencyBannerContent,
  securityFeaturesContent,
  performanceFeaturesContent,
  pricingCtaContent,
  urgencyCtaContent
} from "@/data/variations";

// Example: SaaS Landing Page with Pricing
export const SaaSLandingPage = () => {
  const statsData = {
    title: "Trusted by Growing Companies",
    description: "Join thousands of businesses already scaling with our platform",
    stats: [
      { number: 50000, suffix: "+", label: "Active Users", description: "And growing daily" },
      { number: 99, suffix: "%", label: "Uptime", description: "Guaranteed reliability" },
      { number: 24, suffix: "/7", label: "Support", description: "Always here to help" },
      { number: 150, suffix: "+", label: "Countries", description: "Global reach" }
    ]
  };

  const pricingData = {
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that fits your needs. No hidden fees, cancel anytime.",
    plans: [
      {
        name: "Starter",
        description: "Perfect for small teams",
        price: { monthly: 29, yearly: 290 },
        features: [
          "Up to 10 team members",
          "Basic analytics",
          "Email support",
          "5GB storage"
        ],
        button: { label: "Start Free Trial", link: "/trial" }
      },
      {
        name: "Professional",
        description: "Best for growing businesses",
        price: { monthly: 99, yearly: 990 },
        features: [
          "Up to 50 team members",
          "Advanced analytics",
          "Priority support",
          "50GB storage",
          "Custom integrations"
        ],
        highlighted: true,
        button: { label: "Start Free Trial", link: "/trial" }
      },
      {
        name: "Enterprise",
        description: "For large organizations",
        price: { monthly: 299, yearly: 2990 },
        features: [
          "Unlimited team members",
          "Custom analytics",
          "Dedicated support",
          "Unlimited storage",
          "White-label solution"
        ],
        button: { label: "Contact Sales", link: "/sales" }
      }
    ]
  };

  return (
    <>
      <HomeBanner data={saasBannerContent} />
      <StatsSection {...statsData} layout="cards" />
      <PricingTable {...pricingData} />
      <CallToAction data={pricingCtaContent} variant="centered" />
    </>
  );
};

// Example: E-commerce Platform with Comparisons
export const EcommercePage = () => {
  const comparisonData = {
    title: "Why Choose Our Platform?",
    description: "See how we compare to other e-commerce solutions",
    ourProduct: { name: "Our Platform", highlight: true },
    competitors: [
      { name: "Shopify" },
      { name: "WooCommerce" }
    ],
    features: [
      {
        name: "Transaction Fees",
        description: "Per transaction cost",
        us: "0%",
        competitor1: "2.9%",
        competitor2: "2.9% + $0.30"
      },
      {
        name: "Built-in SEO",
        us: true,
        competitor1: true,
        competitor2: false
      },
      {
        name: "Mobile App",
        us: true,
        competitor1: true,
        competitor2: false
      },
      {
        name: "24/7 Support",
        us: true,
        competitor1: false,
        competitor2: false
      },
      {
        name: "Custom Domain",
        us: true,
        competitor1: "Paid plans only",
        competitor2: true
      }
    ]
  };

  const testimonialsData = {
    title: "What Our Customers Say",
    description: "Join thousands of successful store owners",
    testimonials: [
      {
        quote: "Increased our sales by 300% in the first quarter. The platform is incredibly easy to use.",
        author: {
          name: "Sarah Johnson",
          position: "Founder",
          company: "Style Co.",
          avatar: "/images/testimonials/1.png"
        },
        rating: 5,
        featured: true
      },
      {
        quote: "Best decision we made for our business. Customer support is outstanding.",
        author: {
          name: "Mike Chen",
          position: "CEO",
          company: "Tech Gadgets",
          avatar: "/images/testimonials/2.png"
        },
        rating: 5
      },
      {
        quote: "The analytics and insights help us make better business decisions every day.",
        author: {
          name: "Emily Rodriguez",
          position: "Marketing Director",
          company: "Fashion Hub",
          avatar: "/images/testimonials/3.png"
        },
        rating: 5
      }
    ]
  };

  return (
    <>
      <HomeBanner data={ecommerceBannerContent} />
      <FeaturesCardLayout data={performanceFeaturesContent} />
      <ComparisonTable {...comparisonData} />
      <TestimonialGrid {...testimonialsData} />
      <CallToAction data={urgencyCtaContent} variant="centered" />
    </>
  );
};

// Example: Agency/B2B with Advanced Features
export const AgencyPage = () => {
  const agencyStatsData = {
    title: "Delivering Results for Agencies",
    stats: [
      { number: 500, suffix: "+", label: "Partner Agencies" },
      { number: 95, suffix: "%", label: "Client Satisfaction" },
      { number: 2, suffix: "M+", label: "Projects Delivered" },
      { number: 40, suffix: "%", label: "Average ROI Increase" }
    ]
  };

  return (
    <>
      <HomeBanner data={agencyBannerContent} />
      <StatsSection {...agencyStatsData} animated={true} />
      <Features data={securityFeaturesContent} />
      <CallToAction data={pricingCtaContent} variant="split" />
    </>
  );
};

// Example: Product Comparison Page
export const ComparisonPage = () => {
  const detailedComparisonData = {
    title: "Feature-by-Feature Comparison",
    description: "See exactly how we stack up against the competition",
    ourProduct: { name: "Uniteq Lab", highlight: true },
    competitors: [
      { name: "Competitor A", logo: "/images/competitors/a.svg" },
      { name: "Competitor B", logo: "/images/competitors/b.svg" }
    ],
    features: [
      {
        name: "Setup Time",
        description: "Time to get started",
        us: "5 minutes",
        competitor1: "2-3 hours",
        competitor2: "1-2 days"
      },
      {
        name: "API Access",
        us: true,
        competitor1: "Limited",
        competitor2: false
      },
      {
        name: "Custom Branding",
        us: true,
        competitor1: "Pro plan only",
        competitor2: true
      },
      {
        name: "Data Export",
        us: true,
        competitor1: true,
        competitor2: "CSV only"
      },
      {
        name: "Integrations",
        us: "500+",
        competitor1: "50+",
        competitor2: "20+"
      },
      {
        name: "Mobile App",
        us: true,
        competitor1: false,
        competitor2: true
      }
    ]
  };

  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-8 text-center">
              <h1 className="mb-4">How We Compare</h1>
              <p className="text-light text-lg mb-8">
                Don't just take our word for it. See how we measure up against the alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ComparisonTable {...detailedComparisonData} />
      <CallToAction 
        data={{
          title: "Ready to Make the Switch?",
          description: "Join the companies that chose the better solution.",
          image: { src: "/images/switch-cta.png", alt: "Make the switch" },
          buttons: [
            { enable: true, label: "Start Free Trial", link: "/trial" },
            { enable: true, label: "Schedule Demo", link: "/demo" }
          ]
        }} 
        variant="centered" 
      />
    </>
  );
};

// Example: Testimonials Showcase Page
export const TestimonialsPage = () => {
  const allTestimonialsData = {
    title: "What Our Customers Are Saying",
    description: "Real stories from real customers who've transformed their businesses",
    testimonials: [
      {
        quote: "This platform revolutionized how we handle customer data. The insights we get are incredible.",
        author: {
          name: "Alex Thompson",
          position: "Data Director",
          company: "TechCorp Inc.",
          avatar: "/images/testimonials/alex.png"
        },
        rating: 5,
        featured: true
      },
      {
        quote: "Implementation was seamless. Our team was up and running in less than a week.",
        author: {
          name: "Maria Garcia",
          position: "Operations Manager",
          company: "Global Solutions",
          avatar: "/images/testimonials/maria.png"
        },
        rating: 5
      },
      {
        quote: "The customer support is exceptional. They truly care about our success.",
        author: {
          name: "James Wilson",
          position: "Founder",
          company: "StartupXYZ",
          avatar: "/images/testimonials/james.png"
        },
        rating: 5
      },
      {
        quote: "ROI was positive within the first month. Couldn't be happier with our choice.",
        author: {
          name: "Lisa Chen",
          position: "CFO",
          company: "Finance Plus",
          avatar: "/images/testimonials/lisa.png"
        },
        rating: 5
      },
      {
        quote: "The analytics dashboard gives us insights we never had before. Game changer.",
        author: {
          name: "David Brown",
          position: "Marketing Head",
          company: "Brand Studio",
          avatar: "/images/testimonials/david.png"
        },
        rating: 5
      },
      {
        quote: "Security and compliance features are top-notch. Perfect for our industry.",
        author: {
          name: "Rachel Kim",
          position: "Security Officer",
          company: "SecureBank",
          avatar: "/images/testimonials/rachel.png"
        },
        rating: 5
      }
    ]
  };

  return (
    <>
      <TestimonialGrid {...allTestimonialsData} layout="grid" />
      <StatsSection 
        title="The Numbers Don't Lie"
        stats={[
          { number: 98, suffix: "%", label: "Customer Satisfaction" },
          { number: 24, suffix: "hrs", label: "Average Response Time" },
          { number: 4, suffix: ".9/5", label: "Average Rating" },
          { number: 92, suffix: "%", label: "Would Recommend" }
        ]}
        layout="minimal"
      />
    </>
  );
};