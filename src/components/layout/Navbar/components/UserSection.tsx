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
    <Link href="/login">
      <Button variant="secondary">Login</Button>
    </Link>
  ) : (
    <Link
      className={`w-52 p-2 text-lmdi-primary font-semibold truncate border-b-4 border-transparent text-right hover:text-lmdi-primary-lighten hover:underline underline-offset-8 ${
        pathname === "/profil" ? "text-lmdi-primary-lighten underline" : ""
      }`}
      href="/anggota/profil"
    >
      Hi, {fullname}
    </Link>
  );
}
