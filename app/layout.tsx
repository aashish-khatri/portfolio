import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://aashish-khatri.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aashish Khatri | Software Engineer",
    template: "%s | Aashish Khatri",
  },
  description: "Specialized in Go, React, and cloud-native microservices. Building scalable solutions with modern technologies and clean architecture.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Go", "React", "Microservices", "Cloud Architecture", "Backend Engineer"],
  authors: [{ name: "Aashish Khatri" }],
  creator: "Aashish Khatri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aashish Khatri - Portfolio",
    title: "Aashish Khatri | Software Engineer",
    description: "Specialized in Go, React, and cloud-native microservices. Building scalable solutions with modern technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aashish Khatri - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashish Khatri | Software Engineer",
    description: "Specialized in Go, React, and cloud-native microservices.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable} font-body antialiased bg-bg-primary text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}


