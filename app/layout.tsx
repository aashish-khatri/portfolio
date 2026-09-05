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
    default: "Aashish Khatri | Frontend & Mobile Engineer",
    template: "%s | Aashish Khatri",
  },
  description: "Founding Engineer at Nada. Wrote ~95% of a production Flutter app and 100% of its Next.js site, and carried both through store review. Writes deep-dives on distributed systems.",
  keywords: ["Frontend Engineer", "Mobile Engineer", "Design Engineer", "Flutter", "React", "Next.js", "TypeScript", "Riverpod"],
  authors: [{ name: "Aashish Khatri" }],
  creator: "Aashish Khatri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aashish Khatri - Portfolio",
    title: "Aashish Khatri | Frontend & Mobile Engineer",
    description: "Founding Engineer at Nada. Shipped a production Flutter app to both stores and built its Next.js site.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aashish Khatri - Frontend & Mobile Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashish Khatri | Frontend & Mobile Engineer",
    description: "Founding Engineer at Nada. Shipped a production Flutter app to both stores and built its Next.js site.",
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


