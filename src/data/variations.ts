// Content variations for different use cases and industries

import {
  HomeBannerData,
  FeatureItem,
  CallToActionData,
  IntegrationData,
  FeatureCardData,
  TeamData,
  ValuesData
} from "./content";

// SaaS-focused content variations
export const saasBannerContent: HomeBannerData = {
  note: "Trusted by 10,000+ businesses",
  title: "Scale Your SaaS Business with Confidence",
  description: "Complete platform management, automated billing, and powerful analytics to grow your software business.",
  image: {
    src: "/images/saas-hero.png",
    alt: "SaaS platform"
  },
  buttons: [
    {
      enable: true,
      label: "Start Free Trial",
      link: "/trial"
    },
    {
      enable: true,
      label: "Watch Demo",
      link: "/demo"
    }
  ],
  list: ["14-day free trial", "No credit card required", "Cancel anytime"]
};

// E-commerce focused content
export const ecommerceBannerContent: HomeBannerData = {
  note: "E-commerce Excellence",
  title: "Build Your Online Store That Converts",
  description: "Everything you need to create, customize, and scale your e-commerce business.",
  image: {
    src: "/images/ecommerce-hero.png",
    alt: "E-commerce platform"
  },
  buttons: [
    {
      enable: true,
      label: "Start Building",
      link: "/get-started"
    },
    {
      enable: true,
      label: "View Templates",
      link: "/templates"
    }
  ],
  list: ["Mobile-first design", "Payment integrations", "SEO optimized"]
};

// Agency-focused content
export const agencyBannerContent: HomeBannerData = {
  note: "Digital Agency Solutions",
  title: "Deliver Outstanding Results for Your Clients",
  description: "White-label platform with client management, project tracking, and reporting tools.",
  image: {
    src: "/images/agency-hero.png",
    alt: "Agency platform"
  },
  buttons: [
    {
      enable: true,
      label: "Partner With Us",
      link: "/partners"
    },
    {
      enable: true,
      label: "Agency Program",
      link: "/agency"
    }
  ],
  list: ["White-label ready", "Client portal", "Revenue sharing"]
};

// Security-focused features
export const securityFeaturesContent: FeatureItem[] = [
  {
    title: "Enterprise-Grade Security",
    images: ["/images/security/encryption.png"],
    description: "Advanced encryption, compliance, and security monitoring to protect your business data.",
    list: [
      "256-bit AES encryption",
      "SOC 2 Type II compliant",
      "GDPR & CCPA ready",
      "24/7 security monitoring"
    ],
    button: {
      enable: true,
      label: "Security Details",
      link: "/security"
    }
  },
  {
    title: "Compliance & Auditing",
    images: ["/images/security/compliance.png"],
    description: "Built-in compliance tools and audit trails for regulated industries.",
    list: [
      "Automated compliance reports",
      "Audit trail logging",
      "Role-based permissions",
      "Data retention policies"
    ],
    button: {
      enable: true,
      label: "Compliance Guide",
      link: "/compliance"
    }
  },
  {
    title: "Data Protection",
    images: ["/images/security/protection.png"],
    description: "Advanced data protection with backup, recovery, and disaster planning.",
    list: [
      "Automated daily backups",
      "Point-in-time recovery",
      "Disaster recovery plan",
      "Data residency options"
    ],
    button: {
      enable: true,
      label: "Learn More",
      link: "/data-protection"
    }
  }
];

// Performance-focused features
export const performanceFeaturesContent: FeatureCardData = {
  title: "Built for Speed and Scale",
  description: "Optimized infrastructure and intelligent caching for lightning-fast performance.",
  features: [
    {
      title: "Global CDN",
      description: "Content delivered from 200+ edge locations worldwide for optimal speed.",
      icon: "/images/icons/svg/network.svg",
      image: "/images/performance/cdn.png"
    },
    {
      title: "Auto-Scaling",
      description: "Automatically scale resources based on traffic and demand.",
      icon: "/images/icons/svg/grow.svg",
      image: "/images/performance/scaling.png"
    },
    {
      title: "Smart Caching",
      description: "Intelligent caching strategies that reduce load times by up to 90%.",
      icon: "/images/icons/svg/time.svg",
      image: "/images/performance/caching.png"
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor performance metrics and get alerts before issues impact users.",
      icon: "/images/icons/svg/chart.svg",
      image: "/images/performance/monitoring.png"
    }
  ]
};

// Developer-focused integrations
export const developerIntegrationsContent: IntegrationData = {
  title: "Developer-First Integrations",
  description: "Comprehensive APIs, SDKs, and tools for developers to build and extend.",
  integrations: [
    { name: "REST API", slug: "rest-api", icon: "/images/integration/api.svg", description: "Full REST API access", category: "API" },
    { name: "GraphQL", slug: "graphql", icon: "/images/integration/graphql.svg", description: "GraphQL endpoint", category: "API" },
    { name: "Webhooks", slug: "webhooks", icon: "/images/integration/webhooks.svg", description: "Real-time event notifications", category: "API" },
    { name: "CLI Tools", slug: "cli-tools", icon: "/images/integration/cli.svg", description: "Command line interface", category: "Tools" },
    { name: "VS Code", slug: "vscode", icon: "/images/integration/vscode.svg", description: "IDE extension", category: "Tools" },
    { name: "Postman", slug: "postman", icon: "/images/integration/postman.svg", description: "API collection", category: "Tools" },
    { name: "GitHub Actions", slug: "github-actions", icon: "/images/integration/github.svg", description: "CI/CD integration", category: "DevOps" },
    { name: "GitLab CI", slug: "gitlab-ci", icon: "/images/integration/gitlab.svg", description: "Pipeline integration", category: "DevOps" }
  ]
};

// Startup-focused team
export const startupTeamContent: TeamData = {
  title: "Meet the Founders",
  description: "The passionate entrepreneurs building the future of business technology.",
  members: [
    {
      name: "Alex Chen",
      position: "Co-Founder & CEO",
      image: "/images/team/founder-1.png",
      social: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/alexchen", icon: "/images/icons/svg/linkedin.svg" },
        { platform: "Twitter", url: "https://twitter.com/alexchen", icon: "/images/icons/svg/twitter.svg" }
      ]
    },
    {
      name: "Sarah Kim",
      position: "Co-Founder & CTO",
      image: "/images/team/founder-2.png",
      social: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/sarahkim", icon: "/images/icons/svg/linkedin.svg" },
        { platform: "GitHub", url: "https://github.com/sarahkim", icon: "/images/icons/svg/copy.svg" }
      ]
    }
  ]
};

// Innovation-focused values
export const innovationValuesContent: ValuesData = {
  title: "What Drives Us",
  description: "The core principles that fuel our innovation and guide our decisions.",
  values: [
    {
      title: "Rapid Innovation",
      description: "We ship fast, learn quickly, and iterate based on real user feedback.",
      icon: "/images/icons/svg/rocket.svg"
    },
    {
      title: "User-Centric Design",
      description: "Every feature is designed with the end user's experience at the forefront.",
      icon: "/images/icons/svg/customer.svg"
    },
    {
      title: "Open Source",
      description: "We believe in contributing back to the community and open source ecosystem.",
      icon: "/images/icons/svg/collaboration.svg"
    },
    {
      title: "Data-Driven",
      description: "All our decisions are backed by data, metrics, and measurable outcomes.",
      icon: "/images/icons/svg/chart.svg"
    }
  ]
};

// Pricing-focused CTA variations
export const pricingCtaContent: CallToActionData = {
  title: "Ready to Get Started?",
  description: "Choose the plan that fits your needs. Upgrade or downgrade at any time.",
  image: {
    src: "/images/pricing-cta.png",
    alt: "Pricing plans"
  },
  buttons: [
    {
      enable: true,
      label: "View Pricing",
      link: "/pricing"
    },
    {
      enable: true,
      label: "Start Free Trial",
      link: "/trial"
    }
  ]
};

export const urgencyCtaContent: CallToActionData = {
  title: "Limited Time Offer - 50% Off First Year",
  description: "Join thousands of companies already using our platform. Offer expires soon!",
  image: {
    src: "/images/urgency-cta.png",
    alt: "Limited offer"
  },
  buttons: [
    {
      enable: true,
      label: "Claim Offer Now",
      link: "/offer"
    },
    {
      enable: true,
      label: "Learn More",
      link: "/pricing"
    }
  ]
};

export const contactSalesCtaContent: CallToActionData = {
  title: "Need a Custom Solution?",
  description: "Talk to our sales team about enterprise plans, custom integrations, and volume discounts.",
  image: {
    src: "/images/enterprise-cta.png",
    alt: "Enterprise solutions"
  },
  buttons: [
    {
      enable: true,
      label: "Contact Sales",
      link: "/sales"
    },
    {
      enable: true,
      label: "Enterprise Demo",
      link: "/enterprise-demo"
    }
  ]
};