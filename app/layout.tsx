import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://instantcontracts.ai"),
  title:
    "Instant Contracts AI | AI-Powered Contract Generator for Startups & Agencies",
  description:
    "Instant Contracts AI drafts legally-sound contracts in seconds with vetted templates, risk flags, and firm-ready formatting. Built for founders, agencies, and legal teams who need speed without sacrificing compliance.",
  keywords: [
    "AI contract generator",
    "instant contracts",
    "legal automation",
    "startup contracts",
    "SaaS contracts",
    "freelancer agreements",
    "NDA template",
    "enterprise procurement",
  ],
  alternates: {
    canonical: "https://instantcontracts.ai",
  },
  openGraph: {
    title: "Instant Contracts AI | AI-Powered Contract Generator",
    description:
      "Generate bulletproof NDAs, MSAs, and SOWs in seconds. Trusted by founders, agencies, and legal teams for compliant contracts with human-in-the-loop controls.",
    url: "https://instantcontracts.ai",
    siteName: "Instant Contracts AI",
    images: [
      {
        url: "https://instantcontracts.ai/social/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Instant Contracts AI platform preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Contracts AI | Draft compliant contracts in seconds",
    description:
      "AI contract generator with vetted templates, clause controls, and analytics. Ship NDAs, MSAs, SOWs, and privacy policies fast.",
    creator: "@instantcontracts",
    images: ["https://instantcontracts.ai/social/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
