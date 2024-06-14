"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuLinkProps = {
  menuData: {
    label: string;
    link: string;
  };
};

export default function MenuLink({ menuData }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={menuData.link}>
      <div
        className={`text-lmdi-primary font-semibold transition-colors hover:text-lmdi-lighten hover:underline underline-offset-8 ${
          pathname === menuData.link ? "text-lmdi-lighten underline" : ""
        }`}
      >
        {menuData.label}
      </div>
    </Link>
  );
}
