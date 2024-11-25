import "@/styles/globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/navbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
    <html lang="en">
      <body
        className={clsx(
          "mx-auto min-h-screen max-w-[1280px] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
