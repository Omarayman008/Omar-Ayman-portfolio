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
  metadataBase: new URL('https://omarayman.com'),
  title: {
    default: "Omar Ayman Portfolio | Full-Stack Developer",
    template: "%s | Omar Ayman"
  },
  description: "Official portfolio of Omar Ayman - Core Backend Expert, Professional Web UI/UX Designer, and Systems Architect. Discover my projects, skills, and contact information.",
  keywords: ["Omar Ayman", "Full-Stack Developer", "Backend Developer", "UI/UX Designer", "Software Engineer", "Java", "Next.js", "Portfolio", "Omarayman008", "Systems Architect"],
  authors: [{ name: "Omar Ayman", url: "https://omarayman.com" }],
  creator: "Omar Ayman",
  publisher: "Omar Ayman",
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
    type: "website",
    locale: "en_US",
    url: "https://omarayman.com",
    siteName: "Omar Ayman Portfolio",
    title: "Omar Ayman | Full-Stack Developer & Systems Architect",
    description: "Official portfolio of Omar Ayman - Discover my latest projects, technical skills, and connect with me.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Ayman | Full-Stack Developer",
    description: "Core Backend Expert & Systems Architect. Check out my work and projects.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
