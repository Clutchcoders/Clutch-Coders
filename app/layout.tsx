import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clutch Coders — Where Innovation Never Sleeps",
  description:
    "Elite software engineering, AI solutions, and digital marketing for ambitious businesses worldwide. We build high-performance websites, AI systems, and next-generation digital products.",
  keywords: [
    "software development",
    "AI solutions",
    "machine learning",
    "web development",
    "digital marketing",
    "SaaS development",
    "mobile apps",
    "UI/UX design",
    "cloud services",
    "enterprise software",
  ],
  authors: [{ name: "Clutch Coders" }],
  creator: "Clutch Coders",
  openGraph: {
    title: "Clutch Coders — Where Innovation Never Sleeps",
    description:
      "Elite software engineering, AI solutions, and digital marketing for ambitious businesses worldwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clutch Coders — Where Innovation Never Sleeps",
    description:
      "Elite software engineering, AI solutions, and digital marketing for ambitious businesses worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-space-black text-white antialiased noise">
        {children}
      </body>
    </html>
  );
}
