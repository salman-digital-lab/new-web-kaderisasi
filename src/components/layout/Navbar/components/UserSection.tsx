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
      className={`w-52 md:p-2 text-lmdi-primary font-semibold truncate border-b-4 border-transparent md:text-right hover:text-lmdi-primary-lighten hover:underline underline-offset-8 ${
        pathname === "/account/profile"
          ? "text-lmdi-primary-lighten underline"
          : ""
      }`}
      href="/account/profile"
    >
      Hi, {fullname}
    </Link>
  );
}
