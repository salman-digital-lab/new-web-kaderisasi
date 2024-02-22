import Link from "next/link";
import { cookies } from "next/headers";

import { BMKAFullIcon } from "@/assets/icons";

import MenuLink from "./components/MenuLink";
import { MENUS } from "./utils/constants";
import UserSection from "./components/UserSection";
import NavbarMobile from "./components/NavbarMobile";

export default function Navbar() {
  const fullnameCookie = cookies().get("kaderisasi-web-name");

  return (
    <nav className="fixed left-0 top-0 w-full py-4 bg-primary z-10 drop-shadow">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center md:w-10 w-8">
              <BMKAFullIcon />
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {MENUS.map((menu) => (
              <MenuLink key={menu.label} menuData={menu} />
            ))}
          </div>

          <div className="hidden md:flex justify-center items-center">
            <UserSection fullname={fullnameCookie?.value} />
          </div>

          <NavbarMobile fullname={fullnameCookie?.value} />
        </div>
      </div>
    </nav>
  );
}
