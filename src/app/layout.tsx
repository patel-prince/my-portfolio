import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "Prince Patel",
    "Prince Patel Portfolio",
    "Prince Patel Globant",
    "Senior Full Stack Developer",
    "Senior Web UI Developer",
    "Senior React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Frontend Architect",
    "Full Stack Engineer Ahmedabad",
    "Remote React Developer",
    "React Node.js Developer",
    "Hire Senior React Developer",
    "Web Application Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.url,
      image: `${siteConfig.url}/og-image.png`,
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.github,
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Web UI Development",
        "Frontend Architecture",
        "REST APIs",
        "Full Stack Development",
        "Tailwind CSS",
        "Ant Design",
        "Material UI",
        "PostgreSQL",
        "MySQL",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Globant India Pvt. Ltd.",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressCountry: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={montserrat.variable}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
