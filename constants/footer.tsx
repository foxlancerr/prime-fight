export interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

export interface FooterContent {
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  description?: string;
  tagline: string;
  menuItems: MenuItem[];
  copyright: string;
  bottomLinks: {
    text: string;
    url: string;
  }[];
}

export const footerContent: FooterContent = {
  logo: {
    src: "/images/logo.png",
    alt: "HitShot Logo",
    title: "HitShot",
    url: "/",
  },
  tagline: "Unleash your gaming potential with Prime Gaming",
  description:
    "Step into the future of gaming with Prime Gaming. Explore top-tier reviews, news, and in-depth analysis on the latest and greatest games. Join the gaming community now to get exclusive content and features.",
  menuItems: [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "/overview" },
        { text: "Pricing", url: "/pricing" },
        { text: "Marketplace", url: "/marketplace" },
        { text: "Features", url: "/features" },
        { text: "Integrations", url: "/integration" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Team", url: "/team" },
        { text: "Blog", url: "/blog" },
        { text: "Careers", url: "/career" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "/help" },
        { text: "Sales", url: "/sales" },
        { text: "Advertise", url: "/advertise" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright: "Hit Shot. All rights reserved.",
  bottomLinks: [
    { text: "Terms and Conditions", url: "/term-of-service" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
};
