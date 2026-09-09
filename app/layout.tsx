import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Strony Internetowe dla Firm | Miłosz Walasik",
  description: "Nowoczesne, szybkie i dopasowane strony internetowe dla firm.",
  openGraph: {
    title: "Strony Internetowe dla Firm | Miłosz Walasik",
    description: "Nowoczesne, szybkie i dopasowane strony internetowe dla firm.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}