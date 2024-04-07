"use client";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuLink from "./MenuLink";
import UserSection from "./UserSection";
import { MENUS } from "../utils/constants";
import logo from "../../../../assets/images/logo-lmdi.png";

type NavbarMobile = {
  fullname?: string;
};

export default function NavbarMobile({ fullname }: NavbarMobile) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="flex gap-4 items-center md:hidden">
        <div role="button" onClick={() => setIsActive(true)}>
          <MenuIcon className="w-12 text-lmdi-primary" />
        </div>
      </div>
      <div
        className={`fixed transition-all bg-white z-10 right-0 h-fit w-full py-5 px-5 md:hidden ${
          isActive ? "top-0" : "-top-[100vh]"
        }`}
      >
        <div className="flex justify-between">
          <Link href="/">
            <div className="flex items-center md:w-10 w-8">
              <Image src={logo} alt="Selamat Datang di BMKA Salman ITB" />
            </div>
          </Link>
          <button
            role="button"
            onClick={() => setIsActive(false)}
            className="w-min"
          >
            <ArrowRightIcon className="w-8 text-lmdi-primary" />
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
