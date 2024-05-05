import { Footer, Navbar } from "@/components/layout";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
      <Link href="https://wa.me/6282129091809">
        <div className="fixed right-4 bottom-4 bg-lmdi-secondary-darken rounded-full p-3 shadow hover:bg-lmdi-secondary active:bg-lmdi-secondary">
          <MessageSquareText className="text-white w-7 h-7" />
        </div>
      </Link>
    </div>
  );
}
