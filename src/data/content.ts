// Centralized content data with TypeScript types for better organization

export interface Button {
  enable: boolean;
  label: string;
  link: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface HomeBannerData {
  note: string;
  title: string;
  description: string;
  image: ImageData;
  buttons: Button[];
  list: string[];
}

export interface FeatureItem {
  title: string;
  images: string[];
  description: string;
  list: string[];
  button: Button;
}

export interface CustomerLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CustomersLogoData {
  title: string;
  description: string;
  logos: CustomerLogo[];
}

export interface CallToActionData {
  title: string;
  description: string;
  image: ImageData;
  buttons: Button[];
}

export interface IntegrationData {
  title: string;
  description: string;
  integrations: Array<{
    name: string;
    slug: string;
    icon: string;
    description: string;
    category: string;
  }>;
}

export interface FeatureCardData {
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
    icon: string;
    image?: string;
  }>;
}

export interface BlogArticleItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
  date: string;
}

export interface BlogCarouselData {
  title: string;
  subtitle: string;
  articles: BlogArticleItem[];
}

// Content Data
export const homeBannerContent: HomeBannerData = {
  note: "Awarded as the best startup in 2025",
  title: "Transform your business digitally.",
  description:
    "Uniteq Lab develops software, SaaS, and AI solutions for modern companies.",
  image: {
    src: "/images/call-to-action1.png",
    alt: "Uniteq Lab business transformation",
  },
  buttons: [
    {
      enable: true,
      label: "Get a free consultation",
      link: "/contact/",
    },
    {
      enable: true,
      label: "View references",
      link: "/blog/",
    },
  ],
  list: [],
};

export const featuresContent: FeatureItem[] = [
  {
    title: "Our Services",
    images: ["/images/uniteq-banner1-lit.png"],
    description:
      "We focus on software development, SaaS solutions, and AI tools for effective decision-making.",
    list: [
      "Comprehensive development",
      "Scalable systems",
      "Intelligent tools",
    ],
    button: {
      enable: true,
      label: "Get Started Now",
      link: "/",
    },
  },
  {
    title: "Build Trust and Long-Term Partnerships",
    images: [
      "/images/uniteq-activity1_edit.svg",
      "/images/uniteq-activity2.png",
    ],
    description: "Reliable solutions that grow with your business.",
    list: [
      "Stable collaboration",
      "Flexible solutions",
      "Understanding goals",
      "Fast communication",
    ],
    button: {
      enable: true,
      label: "Start Collaboration",
      link: "/",
    },
  },
  {
    title: "Why Companies Choose Uniteq Lab",
    images: ["/images/uniteq-banner6.png", "/images/uniteq-banner.png"],
    description:
      "We combine technology with an approach you can trust – fast, high-quality, and results-driven.",
    list: [
      "Fast time-to-market",
      "Transparent approach",
      "Experienced development team",
      "Scalable solutions",
    ],
    button: {
      enable: true,
      label: "See for Yourself",
      link: "/",
    },
  },
];

export const customersLogoContent: CustomersLogoData = {
  title: "Trusted by Leading Companies",
  description:
    "Join the companies that trust Uniteq Lab for their digital transformation.",
  logos: [
    { src: "/images/customers-logo/6.svg", alt: "Customer 6" },
    { src: "/images/customers-logo/7.svg", alt: "Customer 7" },
    { src: "/images/customers-logo/8.svg", alt: "Customer 8" },
    { src: "/images/customers-logo/9.svg", alt: "Customer 9" },
    { src: "/images/customers-logo/10.svg", alt: "Customer 10" },
    { src: "/images/customers-logo/11.svg", alt: "Customer 11" },
    { src: "/images/customers-logo/12.svg", alt: "Customer 12" },
    { src: "/images/customers-logo/13.svg", alt: "Customer 13" },
  ],
};

export const callToAction1Content: CallToActionData = {
  title: "Ready to Transform Your Business?",
  description:
    "Get started with Uniteq Lab today and see the difference our expertise can make.",
  image: {
    src: "/images/banner1.png",
    alt: "Transform your business",
  },
  buttons: [
    {
      enable: true,
      label: "Start Your Project",
      link: "/contact/",
    },
    {
      enable: true,
      label: "Learn More",
      link: "/about/",
    },
  ],
};

export const integrationContent: IntegrationData = {
  title: "Seamless Integrations",
  description: "Connect with the tools and platforms you already use.",
  integrations: [
    {
      name: "React",
      slug: "react",
      icon: "/images/integration/react.svg",
      description: "Frontend framework",
      category: "Frontend",
    },
    {
      name: "Next.js",
      slug: "nextjs",
      icon: "/images/integration/nextjs.svg",
      description: "React framework",
      category: "Frontend",
    },
    {
      name: "Vue.js",
      slug: "vue",
      icon: "/images/integration/vue.svg",
      description: "Progressive framework",
      category: "Frontend",
    },
    {
      name: "Nuxt",
      slug: "nuxt",
      icon: "/images/integration/nuxt.svg",
      description: "Vue framework",
      category: "Frontend",
    },
    {
      name: "Node.js",
      slug: "nodejs",
      icon: "/images/integration/nodejs.svg",
      description: "Backend runtime",
      category: "Backend",
    },
    {
      name: "Python",
      slug: "python",
      icon: "/images/integration/python.svg",
      description: "Programming language",
      category: "Backend",
    },
    {
      name: "Django",
      slug: "django",
      icon: "/images/integration/django.svg",
      description: "Python framework",
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      slug: "postgresql",
      icon: "/images/integration/postgresql.svg",
      description: "Database",
      category: "Database",
    },
    {
      name: "MongoDB",
      slug: "mongodb",
      icon: "/images/integration/mongodb.svg",
      description: "NoSQL database",
      category: "Database",
    },
    {
      name: "Redis",
      slug: "redis",
      icon: "/images/integration/redis.svg",
      description: "In-memory database",
      category: "Database",
    },
    {
      name: "Docker",
      slug: "docker",
      icon: "/images/integration/docker.svg",
      description: "Containerization",
      category: "DevOps",
    },
    {
      name: "Vite",
      slug: "vite",
      icon: "/images/integration/vite.svg",
      description: "Build tool",
      category: "Tools",
    },
    {
      name: "TypeScript",
      slug: "typescript",
      icon: "/images/integration/ts.svg",
      description: "Type-safe JavaScript",
      category: "Language",
    },
    {
      name: "JavaScript",
      slug: "js",
      icon: "/images/integration/js.svg",
      description: "Programming language",
      category: "Language",
    },
    {
      name: "HTML",
      slug: "html",
      icon: "/images/integration/html.svg",
      description: "Markup language",
      category: "Frontend",
    },
    {
      name: "CSS",
      slug: "css",
      icon: "/images/integration/css.svg",
      description: "Styling language",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      slug: "tailwind",
      icon: "/images/integration/tailwind.svg",
      description: "CSS framework",
      category: "Frontend",
    },
  ],
};

export const featuresCardLayoutContent: FeatureCardData = {
  title: "What We Can Deliver Beyond",
  description:
    "Our solutions aren't just about technology. They're about meaningful features that support the growth of your business.",
  features: [
    {
      title: "Modular Architecture",
      description:
        "Easy to expand and adapt based on your organization’s needs.",
      icon: "/images/icons/svg/layout-template.svg",
      image: "/images/icons/svg/layout-template.svg",
    },
    {
      title: "Rapid Deployment",
      description:
        "From prototype to production environment without unnecessary delays.",
      icon: "/images/icons/svg/rocket.svg",
      image: "/images/icons/svg/rocket.svg",
    },
    {
      title: "Clear Statistics",
      description:
        "Monitor performance, usage, and solution effectiveness in real-time.",
      icon: "/images/icons/svg/chart-no-axes-column.svg",
      image: "/images/icons/svg/chart-no-axes-column.svg",
    },
    {
      title: "AI Tool Integration",
      description: "Connect your data with predictive models and automation.",
      icon: "/images/icons/svg/brain-circuit.svg",
      image: "/images/icons/svg/brain-circuit.svg",
    },
    {
      title: "System Connectivity",
      description: "Reliable integration with ERP, WMS, or custom platforms.",
      icon: "/images/icons/svg/network.svg",
      image: "/images/icons/svg/network.svg",
    },
    {
      title: "Security First",
      description:
        "We uphold the highest standards of encryption and access management.",
      icon: "/images/icons/svg/shield-check.svg",
      image: "/images/icons/svg/shield-check.svg",
    },
  ],
};

// Page Metadata
export interface PageMetadata {
  title: string;
  meta_title?: string;
  description: string;
  image?: string;
  draft?: boolean;
}

export interface ContactHeroData {
  title: string;
  description: string;
  list: Array<{
    icon: string;
    title: string;
    description: string;
    button: Button;
  }>;
}

export interface ContactFormData {
  title: string;
  list: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface HeroData {
  subtitle?: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  social?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

export interface TeamData {
  title: string;
  description: string;
  members: TeamMember[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface ValuesData {
  title: string;
  description: string;
  values: ValueItem[];
}

// Page Metadata Content
export const aboutPageMetadata: PageMetadata = {
  title: "About",
  description:
    "Learn about Uniteq Lab and our mission to transform businesses through innovative technology solutions.",
  image: "/images/og-about.png",
};

export const contactPageMetadata: PageMetadata = {
  title: "Contact",
  description:
    "Get in touch with Uniteq Lab for all your digital transformation needs.",
  image: "/images/og-contact.png",
};

export const featuresPageMetadata: PageMetadata = {
  title: "Features",
  description:
    "Explore our comprehensive features designed to keep your data safe and your business growing.",
  image: "/images/og-features.png",
};

// Contact Page Content
export const contactHeroContent: ContactHeroData = {
  title: "Contact Us",
  description:
    "Gain invaluable predictive analytics and actionable insights, empowering your team to make data-driven decisions and close more deals.",
  list: [
    {
      icon: "/images/icons/svg/corporate.svg",
      title: "Sales & Inquiries",
      description:
        "Gain invaluable predictive analytics and actionable insights, empowering your team to make data-driven decisions.",
      button: {
        enable: true,
        label: "Contact Sales",
        link: "/contact",
      },
    },
    {
      icon: "/images/icons/svg/message.svg",
      title: "Help & Support",
      description:
        "Get technical support and help with our comprehensive support system.",
      button: {
        enable: true,
        label: "Create A Ticket",
        link: "/support",
      },
    },
    {
      icon: "/images/icons/svg/copy.svg",
      title: "Media & Press",
      description:
        "Media inquiries and press releases. Get in touch with our PR team.",
      button: {
        enable: true,
        label: "Contact PR Team",
        link: "/press",
      },
    },
  ],
};

export const contactFormContent: ContactFormData = {
  title: "Get in touch with any general query.",
  list: [
    {
      icon: "/images/icons/svg/phone.svg",
      title: "Give us a call",
      description: "+603 555-0123",
    },
    {
      icon: "/images/icons/svg/email.svg",
      title: "Email",
      description: "contact@uniteqlab.com",
    },
  ],
};

// Features Page Content
export const featuresHeroContent: HeroData = {
  subtitle: "Key Features",
  title: "Explore Our Features to Keep Your Data Safe",
  description:
    "Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security.",
};

// About Page Content
export const valuesContent: ValuesData = {
  title: "Our Core Values",
  description: "The principles that guide everything we do at Uniteq Lab.",
  values: [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
      icon: "/images/icons/svg/rocket.svg",
    },
    {
      title: "Reliability",
      description:
        "Our clients trust us to deliver consistent, high-quality results on time, every time.",
      icon: "/images/icons/svg/shield-check.svg",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring their success is our success.",
      icon: "/images/icons/svg/collaboration.svg",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to customer service.",
      icon: "/images/icons/svg/award.svg",
    },
  ],
};

export const testimonialContent = {
  title: "What Our Clients Say",
  description:
    "Don't just take our word for it. Here's what our satisfied clients have to say about working with Uniteq Lab.",
  testimonials: [
    {
      customer: {
        name: "David Miller",
        designation: "CEO, TechStart Inc.",
        avatar: "/images/testimonials/1.png",
      },
      content:
        "Uniteq Lab transformed our business with their innovative solutions. The team's expertise and dedication exceeded our expectations.",
      rating: 5,
      featured: false,
    },
    {
      customer: {
        name: "Sarah Johnson",
        designation: "CTO, InnovateCorp",
        avatar: "/images/testimonials/2.png",
      },
      content:
        "Working with Uniteq Lab was a game-changer. Their technical expertise and professional approach delivered results beyond what we imagined.",
      rating: 5,
      featured: true,
    },
    {
      customer: {
        name: "Michael Chen",
        designation: "Founder, StartupPro",
        avatar: "/images/testimonials/3.png",
      },
      content:
        "The quality of work and attention to detail from Uniteq Lab is outstanding. They truly understand what it takes to build successful products.",
      rating: 5,
      featured: false,
    },
  ],
};

export const teamContent: TeamData = {
  title: "Meet Our Team",
  description: "The talented professionals behind Uniteq Lab's success.",
  members: [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "/images/team/1.png",
      social: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          icon: "/images/icons/svg/linkedin.svg",
        },
        {
          platform: "Twitter",
          url: "https://twitter.com",
          icon: "/images/icons/svg/twitter.svg",
        },
      ],
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image: "/images/team/2.png",
      social: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          icon: "/images/icons/svg/linkedin.svg",
        },
        {
          platform: "GitHub",
          url: "https://github.com",
          icon: "/images/icons/svg/copy.svg",
        },
      ],
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Design",
      image: "/images/team/3.png",
      social: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          icon: "/images/icons/svg/linkedin.svg",
        },
        {
          platform: "Dribbble",
          url: "https://dribbble.com",
          icon: "/images/icons/svg/message.svg",
        },
      ],
    },
    {
      name: "David Wilson",
      position: "Lead Developer",
      image: "/images/team/4.png",
      social: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          icon: "/images/icons/svg/linkedin.svg",
        },
        {
          platform: "GitHub",
          url: "https://github.com",
          icon: "/images/icons/svg/copy.svg",
        },
      ],
    },
  ],
};

export const aboutBannerContent: HomeBannerData = {
  note: "About Uniteq Lab",
  title: "Transforming Businesses Through Innovation",
  description:
    "We are a dedicated team of experts committed to delivering cutting-edge software solutions that drive business growth and digital transformation.",
  image: {
    src: "/images/about-banner.png",
    alt: "About Uniteq Lab",
  },
  buttons: [
    {
      enable: true,
      label: "Our Services",
      link: "/services",
    },
    {
      enable: true,
      label: "Contact Us",
      link: "/contact",
    },
  ],
  list: [],
};

export const careerCtaContent: CallToActionData = {
  title: "Join Our Team",
  description:
    "We're always looking for talented individuals to join our growing team. Explore career opportunities at Uniteq Lab.",
  image: {
    src: "/images/cta-bg.jpg",
    alt: "Career opportunities",
  },
  buttons: [
    {
      enable: true,
      label: "View Open Positions",
      link: "/careers",
    },
    {
      enable: true,
      label: "Learn About Culture",
      link: "/culture",
    },
  ],
};

export interface PricingData {
  title: string;
  description: string;
  plans_labels: string[];
  discount?: string;
  plans: Array<{
    title: string;
    description: string;
    price_monthly: string;
    price_yearly: string;
    price_prefix?: string;
    price_description_monthly: string;
    price_description_yearly: string;
    active?: boolean;
    button: Button;
    features: string[];
  }>;
}

export const pricingContent: PricingData = {
  title: "Simple, Transparent Pricing",
  description:
    "Choose the perfect plan for your business needs. No hidden fees, no surprises.",
  plans_labels: ["Monthly", "Yearly"],
  discount: "Save 20%",
  plans: [
    {
      title: "Starter",
      description: "Perfect for small businesses and startups getting started.",
      price_monthly: "99",
      price_yearly: "79",
      price_prefix: "$",
      price_description_monthly: "per month",
      price_description_yearly: "per month, billed yearly",
      active: false,
      button: {
        enable: true,
        label: "Get Started",
        link: "/contact",
      },
      features: [
        "Up to 5 projects",
        "Basic support",
        "10GB storage",
        "Email integration",
        "Basic analytics",
      ],
    },
    {
      title: "Professional",
      description: "Ideal for growing businesses with advanced needs.",
      price_monthly: "199",
      price_yearly: "159",
      price_prefix: "$",
      price_description_monthly: "per month",
      price_description_yearly: "per month, billed yearly",
      active: true,
      button: {
        enable: true,
        label: "Get Started",
        link: "/contact",
      },
      features: [
        "Unlimited projects",
        "Priority support",
        "100GB storage",
        "Advanced integrations",
        "Advanced analytics",
        "Custom domains",
        "Team collaboration",
      ],
    },
    {
      title: "Enterprise",
      description: "For large organizations with custom requirements.",
      price_monthly: "499",
      price_yearly: "399",
      price_prefix: "$",
      price_description_monthly: "per month",
      price_description_yearly: "per month, billed yearly",
      active: false,
      button: {
        enable: true,
        label: "Contact Sales",
        link: "/contact",
      },
      features: [
        "Unlimited everything",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Custom domains",
        "Team collaboration",
        "SLA guarantee",
        "Security compliance",
      ],
    },
  ],
};

// Additional content types for missing sections
export interface FeaturesGridData {
  title: string;
  description: string;
  list: Array<{
    title: string;
    description: string;
    images?: string[];
    tools?: string[];
    tools_bg?: string;
  }>;
}

export interface PricingCompareData {
  title: string;
  plans: Array<{
    title: string;
    price: string;
    button: Button;
  }>;
  plans_features: Array<{
    group: string;
    list: Array<{
      value: string;
      basic: boolean | string;
      standard: boolean | string;
      pro: boolean | string;
    }>;
  }>;
}

export interface ChangelogData {
  title: string;
  description: string;
  list: Array<{
    date: string;
    version: string;
    title: string;
    content: string;
  }>;
}

export interface CallToAction2Data {
  enable: boolean;
  title: string;
  description: string;
  bg_image: string;
  button: Button;
  list: Array<{
    icon?: string;
    image?: string;
  }>;
}

// Missing content data
export const featuresGridContent: FeaturesGridData = {
  title: "Advanced Features Grid",
  description:
    "Explore our comprehensive feature set designed to enhance your business operations.",
  list: [
    {
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time collaboration tools and shared workspaces.",
      images: [
        "/images/features/team-1.png",
        "/images/features/team-2.png",
        "/images/features/team-3.png",
      ],
    },
    {
      title: "Analytics Dashboard",
      description:
        "Get deep insights into your business performance with advanced analytics and reporting.",
      images: [
        "/images/features/analytics-1.png",
        "/images/features/analytics-2.png",
        "/images/features/analytics-3.png",
      ],
    },
    {
      title: "Integration Tools",
      description:
        "Connect with your favorite tools and platforms through our extensive integration library.",
      tools: [
        "/images/integration/slack.svg",
        "/images/integration/google.svg",
        "/images/integration/microsoft.svg",
        "/images/integration/dropbox.svg",
        "/images/integration/github.svg",
        "/images/integration/zapier.svg",
        "/images/integration/trello.svg",
        "/images/integration/notion.svg",
      ],
      tools_bg: "/images/features/tools-bg.png",
    },
  ],
};

export const pricingCompareContent: PricingCompareData = {
  title: "Compare Plans",
  plans: [
    {
      title: "Starter",
      price: "$99",
      button: {
        enable: true,
        label: "Get Started",
        link: "/contact",
      },
    },
    {
      title: "Professional",
      price: "$199",
      button: {
        enable: true,
        label: "Get Started",
        link: "/contact",
      },
    },
    {
      title: "Enterprise",
      price: "$499",
      button: {
        enable: true,
        label: "Contact Sales",
        link: "/contact",
      },
    },
  ],
  plans_features: [
    {
      group: "Core Features",
      list: [
        {
          value: "Projects",
          basic: "5",
          standard: "Unlimited",
          pro: "Unlimited",
        },
        {
          value: "Storage",
          basic: "10GB",
          standard: "100GB",
          pro: "Unlimited",
        },
        {
          value: "Team Members",
          basic: "3",
          standard: "10",
          pro: "Unlimited",
        },
      ],
    },
    {
      group: "Advanced Features",
      list: [
        {
          value: "Advanced Analytics",
          basic: false,
          standard: true,
          pro: true,
        },
        {
          value: "Custom Integrations",
          basic: false,
          standard: true,
          pro: true,
        },
        {
          value: "Priority Support",
          basic: false,
          standard: true,
          pro: true,
        },
        {
          value: "SLA Guarantee",
          basic: false,
          standard: false,
          pro: true,
        },
      ],
    },
  ],
};

export const changelogContent: ChangelogData = {
  title: "Changelog",
  description:
    "Stay updated with the latest improvements and new features we've added to our platform.",
  list: [
    {
      date: "2024-01-15",
      version: "v2.1.0",
      title: "Major UI Updates",
      content:
        "We've completely redesigned the user interface with a modern, intuitive design that makes navigation easier and more enjoyable. This update includes improved accessibility features and better mobile responsiveness.",
    },
    {
      date: "2024-01-10",
      version: "v2.0.5",
      title: "Performance Improvements",
      content:
        "Significant performance optimizations have been implemented across the platform. Pages now load 40% faster, and we've reduced server response times by implementing advanced caching strategies.",
    },
    {
      date: "2024-01-05",
      version: "v2.0.4",
      title: "New Integration Features",
      content:
        "Added support for 15 new third-party integrations including Slack, Microsoft Teams, and Notion. The integration setup process has been simplified with our new one-click installation wizard.",
    },
  ],
};

export const callToAction2Content: CallToAction2Data = {
  enable: true,
  title: "Ready to Transform Your Business?",
  description:
    "Join thousands of satisfied customers who have already transformed their business with our solutions.",
  bg_image: "/images/uniteq-banner4.png",
  button: {
    enable: true,
    label: "Get Started Today",
    link: "/contact",
  },
  list: [
    { icon: "/images/icons/svg/customer.svg" },
    { icon: "/images/icons/svg/chart.svg" },
    { icon: "/images/icons/svg/detection.svg" },
    { icon: "/images/icons/svg/shield-check.svg" },
    { icon: "/images/icons/svg/collaboration.svg" },
    { icon: "/images/icons/svg/rocket.svg" },
  ],
};

export const blogCarouselContent: BlogCarouselData = {
  title: "**Featured Product** Insights",
  subtitle:
    "Explore in-depth articles about our revolutionary solutions and discover how they're transforming businesses across industries.",
  articles: [
    {
      title: "iForms: Revolutionary Digital Form Management Platform",
      description:
        "Discover how iForms eliminates paper-based processes and streamlines organizational workflows with drag-and-drop form creation, advanced reporting, and seamless integration capabilities.",
      image: "/images/blog/8.jpg",
      tags: ["Digital Forms", "Workflow", "Enterprise"],
      link: "/blog/post-8",
      featured: true,
      date: "Aug 5, 2024",
    },
    {
      title: "SmartCut: AI-Powered Waste Management System",
      description:
        "Learn how SmartCut uses AI and computer vision to automatically measure, classify, and manage production waste, reducing material waste by 15-30 percent in manufacturing.",
      image: "/images/blog/9.jpg",
      tags: ["AI", "Manufacturing", "Sustainability"],
      link: "/blog/post-9",
      date: "Aug 4, 2025",
    },
    {
      title: "Next-Generation Warehouse Management System",
      description:
        "Explore how innovative WMS technology revolutionizes warehouse operations with autonomous mobile robots, AI-powered optimization, and real-time inventory management.",
      image: "/images/blog/10.jpg",
      tags: ["WMS", "Robotics", "Automation"],
      link: "/blog/post-10",
      date: "Aug 5, 2024",
    },
  ],
};
