import type { Metadata, Viewport } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { addressLine1, email } from "@/lib/site";
import "./globals.css";

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lemsince1937.org"),
  title: {
    default: "LEM Since 1937",
    template: "%s · LEM Since 1937",
  },
  description:
    "Pointing people to Jesus since 1937. The Lutheran Evangelistic Movement.",
  applicationName: "LEM Since 1937",
  openGraph: {
    title: "LEM Since 1937",
    description: "Pointing people to Jesus since 1937.",
    url: "https://www.lemsince1937.org",
    siteName: "Lutheran Evangelistic Movement",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b2a4a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lutheran Evangelistic Movement",
  alternateName: ["LEM", "LEM Since 1937"],
  url: "https://www.lemsince1937.org",
  slogan: "Pointing people to Jesus since 1937",
  email,
  telephone: "+1-805-807-8336",
  foundingDate: "1937",
  address: {
    "@type": "PostalAddress",
    streetAddress: addressLine1,
    addressLocality: "Mora",
    addressRegion: "MN",
    postalCode: "55051",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
