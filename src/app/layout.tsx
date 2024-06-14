import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ILiAS 2024",
  metadataBase: process.env.NEXT_PUBLIC_HOST
    ? new URL(process.env.NEXT_PUBLIC_HOST)
    : null,
  description:
    "Embark on a journey unlike any other with the International Leadership in Action Summit 2024, an immersive experience meticulously designed to shape the future leaders of Indonesia",
  openGraph: {
    title: "International Leadership in Action Summit 2024",
    description:
      "Embark on a journey unlike any other with the International Leadership in Action Summit 2024, an immersive experience meticulously designed to shape the future leaders of Indonesia",
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
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
