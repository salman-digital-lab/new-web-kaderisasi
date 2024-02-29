"use client";

import { Button } from "@/components/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserSectionProps = {
  fullname?: string;
};

export default function UserSection({ fullname }: UserSectionProps) {
  const pathname = usePathname();

  return !fullname ? (
    <Link href="/masuk">
      <Button variant="secondary">
        Masuk
      </Button>
    </Link>
  ) : (
    <Link
      className={`w-52 p-2 text-primary-100 truncate border-b-4 border-transparent text-right hover:text-white ${
        pathname === "/profil" ? "text-white" : ""
      }`}
      href="/anggota/profil"
    >
      Hi, {fullname}
    </Link>
  );
}
