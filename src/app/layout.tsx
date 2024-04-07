import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leadership in Action Summit",
  metadataBase: process.env.NEXT_PUBLIC_HOST
    ? new URL(process.env.NEXT_PUBLIC_HOST)
    : null,
  description:
    "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!",
  openGraph: {
    title: "Leadership in Action Summit",
    description:
      "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-white"}>
        <NextTopLoader showSpinner={false} color="#f7622e" height={4} />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
