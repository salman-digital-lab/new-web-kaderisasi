"use client";
import { BMKAFullIcon } from "@/assets/icons";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MenuLink from "./MenuLink";
import UserSection from "./UserSection";
import { MENUS } from "../utils/constants";

type NavbarMobile = {
  fullname?: string;
};

export default function NavbarMobile({ fullname }: NavbarMobile) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="flex gap-4 items-center md:hidden">
        <div role="button" onClick={() => setIsActive(true)}>
          <MenuIcon className="w-12 text-white" />
        </div>
      </div>
      <div
        className={`fixed transition-all bg-primary z-10 right-0 h-fit w-full py-5 px-5 md:hidden ${
          isActive ? "top-0" : "-top-[100vh]"
        }`}
      >
        <div className="flex justify-between">
          <Link href="/">
            <div className="flex items-center w-8">
              <BMKAFullIcon />
            </div>
          </Link>
          <button
            role="button"
            onClick={() => setIsActive(false)}
            className="w-min"
          >
            <ArrowRightIcon className="w-8 text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-8 pt-8">
          {MENUS.map((menu) => (
            <MenuLink key={menu.label} menuData={menu} />
          ))}

          <UserSection fullname={fullname} />
        </div>
      </div>
    </>
  );
}
