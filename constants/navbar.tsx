import { Book, Sunset, Trees, Zap } from "lucide-react";
import type { ReactNode } from "react";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: ReactNode;
  items?: MenuItem[];
}

export interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

export const navbarData: Navbar1Props = {
  logo: {
    url: "/images/logo.png",
    src: "/images/logo.png",
    alt: "HitShot Logo",
    title: "",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "Products",
      url: "/products",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0"></Book>,
          url: "/blog",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/company",
        },
        {
          title: "Careers",
          description: "Browse job listings and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/careers",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/support",
        },
      ],
    },
    {
      title: "Resources",
      url: "/resources",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/help-center",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/contact",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/status",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "/terms-of-service",
        },
      ],
    },
    { title: "Pricing", url: "/pricing" },
    { title: "Blog", url: "/blog" },
  ],
  auth: {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
  },
};
