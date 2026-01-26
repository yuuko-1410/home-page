import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Synrise 森越成行 - 智能义肢 | 身随心驭",
    template: "%s | Synrise 森越成行"
  },
  description:
    "Synrise Pro 智能大腿义肢，搭载 SynchroMind™ 协同智能算法。50+核心专利，清华姚班团队，价格仅为进口1/6。自然、稳定、自信。为肢体残障人士提供更自然、更智能的行动解决方案。",
  keywords: [
    "智能义肢",
    "大腿义肢",
    "假肢",
    "Synrise",
    "森越成行",
    "SynchroMind",
    "智能假肢",
    "仿生义肢",
    "AI义肢",
    "康复医疗"
  ],
  authors: [{ name: "Synrise 森越成行" }],
  creator: "Synrise 森越成行",
  publisher: "Synrise 森越成行",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://synrise.cn',
    title: 'Synrise 森越成行 - 智能义肢 | 身随心驭',
    description: 'Synrise Pro 智能大腿义肢，搭载 SynchroMind™ 协同智能算法。50+核心专利，清华姚班团队，价格仅为进口1/6。自然、稳定、自信。',
    siteName: 'Synrise 森越成行',
    images: [
      {
        url: '/images/logo/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Synrise 森越成行'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synrise 森越成行 - 智能义肢 | 身随心驭',
    description: 'Synrise Pro 智能大腿义肢，搭载 SynchroMind™ 协同智能算法。50+核心专利，清华姚班团队，价格仅为进口1/6。',
    images: ['/images/logo/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://synrise.cn'),
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Synrise 森越成行",
    "url": "https://synrise.cn",
    "logo": "https://synrise.cn/images/logo/logo.webp",
    "description": "森越成行成立于2025年，是国内领先的具身智能义肢研发企业。我们致力于通过AI与生物力学的深度融合，为肢体残障人士提供更自然、更智能的行动解决方案。",
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "synrise_tech@163.com",
      "contactType": "customer service"
    },
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN"
    }
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Synrise 森越成行",
    "url": "https://synrise.cn",
    "description": "Synrise Pro 智能大腿义肢，搭载 SynchroMind™ 协同智能算法。50+核心专利，清华姚班团队，价格仅为进口1/6。",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://synrise.cn/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="zh-CN">
      <head>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
