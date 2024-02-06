"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowRightIcon, BMKAFullIcon, MenuIcon } from "@/assets/icons";
import MenuLink from "./components/MenuLink";
import { MENUS } from "./utils/constants";
import { Button } from "@/components/common";

export default function Navbar() {
  const [isNavbarShadowShown, setIsNavbarShadowShown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setIsNavbarShadowShown(true);

        return;
      }

      setIsNavbarShadowShown(false);
    });
  }, []);

  // TEMPORARY FOR DEVELOPMENT ONLY
  const user = false;

  return (
    <nav
      className={`fixed left-0 top-0 w-full py-4 bg-primary z-10 ${
        isNavbarShadowShown ? "drop-shadow" : "drop-shadow"
      }`}
    >
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center md:w-32 w-20">
              <BMKAFullIcon />
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {MENUS.map((menu) => (
              <MenuLink key={menu.label} menuData={menu} />
            ))}
          </div>

          <div className="hidden md:flex justify-center items-center">
            {!user ? (
              <Link href="/masuk">
                <Button variant="secondary" outlined>
                  Masuk
                </Button>
              </Link>
            ) : (
              <Link href="/profil">
                <div
                  className={`w-52 p-2 text-primary-100 truncate border-b-4 border-transparent hover:text-white ${
                    pathname === "/profil" ? "text-white" : ""
                  }`}
                >
                  Hi, Naufal Zhafran Latif
                </div>
              </Link>
            )}
          </div>

          {/**
           * Mobile View
           */}

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
                <div className="flex items-center md:w-32 w-20">
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

              {!user ? (
                <Link href="/masuk">
                  <Button variant="secondary" outlined>
                    Masuk
                  </Button>
                </Link>
              ) : (
                <Link href="/profil">
                  <div
                    className={`w-52 p-2 text-primary-100 truncate border-b-4 border-transparent hover:text-white ${
                      pathname === "/profil" ? "text-white" : ""
                    }`}
                  >
                    Hi, Naufal Zhafran Latif
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
