import type { Metadata } from "next";
import { Schibsted_Grotesk, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
  description: "Founding Engineer at Nada. Built the Flutter app and its Next.js site. Writes deep-dives on distributed systems.",
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
        className={`${schibsted.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-body antialiased bg-bg-primary text-text-primary`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}


