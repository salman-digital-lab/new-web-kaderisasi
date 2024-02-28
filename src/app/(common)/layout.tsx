import { Footer, Navbar } from "@/components/layout";

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
    </div>
  );
}
