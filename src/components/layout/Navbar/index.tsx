import { ArrowRightIcon, BMKAFullIcon, MenuIcon } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar({
  isNavbarScrolling,
}: {
  isNavbarScrolling: boolean;
}) {
  const [isActive, setIsActive] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const pathname = usePathname();

  const user = undefined;
  const [productChild] = useState([
    {
      name: "Leaderboard",
      url: "https://leaderboard.salmanitb.com/",
    },
    {
      name: "Inventra",
      url: "https://inventra.salmanitb.com/",
    },
    {
      name: "Unit Salman",
      url: "https://ohu.salmanitb.com/",
    },
  ]);

  const formatName = (name: string) => {
    const maxNameLength = 15;

    if (!name) {
      return "";
    }

    const nameLength = name.length;

    if (nameLength >= maxNameLength) {
      return `${name.substr(0, maxNameLength)}...`;
    }

    return name;
  };

  return (
    <nav
      className={`fixed left-0 top-0 w-full py-4 bg-bmka-primary-blue z-50 transition-all duration-500 ${
        isNavbarScrolling ? "shadow-level-1" : ""
      }`}
    >
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" passHref legacyBehavior>
            <a>
              <div className="flex items-center md:w-32 w-20">
                <BMKAFullIcon />
              </div>
            </a>
          </Link>
          <div className="hidden md:flex justify-center">
            <Link href="/" legacyBehavior>
              <a>
                <div
                  className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                    pathname === "/" ? "font-bold" : ""
                  }`}
                >
                  <p className="text-white">Home</p>
                </div>
              </a>
            </Link>
            <Link href="/activities" passHref legacyBehavior>
              <a>
                <div
                  className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                    pathname === "/activities" ? "font-bold" : ""
                  }`}
                >
                  <p className="text-white">Kegiatan</p>
                </div>
              </a>
            </Link>
            <Link href="/student-care" passHref legacyBehavior>
              <a>
                <div
                  className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                    pathname === "/student-care" ? "font-bold" : ""
                  }`}
                >
                  <p className="text-white">Ruang Curhat</p>
                </div>
              </a>
            </Link>
            <Link href="/about-us" passHref legacyBehavior>
              <a>
                <div
                  className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                    pathname === "/about-us" ? "font-bold" : ""
                  }`}
                >
                  <p className="text-white">Tentang Kami</p>
                </div>
              </a>
            </Link>
            <div
              onClick={() => setShowChild(!showChild)}
              className={` border-b-4 relative border-transparent transition-all duration-500  cursor-pointer`}
            >
              <div className="p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold">
                <p className="text-white">Products</p>
              </div>
              {productChild && (
                <>
                  {showChild && (
                    <div
                      style={{
                        marginLeft: "-40%",
                      }}
                      className="w-44 absolute bg-white p-4 flex flex-col gap-4 rounded shadow-level-1 top-20 left-0 right-0 md:flex"
                    >
                      {productChild.map((item) => {
                        return (
                          <a
                            href={item.url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            item.name
                          </a>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
              {productChild && (
                <>
                  {showChild &&
                    productChild.map((item) => (
                      <Link href={item.url} passHref legacyBehavior>
                        <a>
                          <div
                            className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold md:hidden bg-white ${
                              pathname === "" ? "font-bold" : ""
                            }`}
                          >
                            <p>{item.name}</p>
                          </div>
                        </a>
                      </Link>
                    ))}
                </>
              )}
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            {!user ? (
              <>
                <Link href="/login" passHref legacyBehavior>
                  <a>
                    <div
                      className={`px-9 py-2 border-b-4 border-solid border-[3px] border-white rounded-lg bg-bmka-accent-orange transition-all duration-500 hover:bg-bmka-accent-orange-darken`}
                    >
                      <p className="text-white">Masuk</p>
                    </div>
                  </a>
                </Link>
              </>
            ) : (
              <Link href="/profile" passHref legacyBehavior>
                <a>
                  <div
                    className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                      pathname === "/profile" ? "font-bold" : ""
                    }`}
                  >
                    <p className="text-white">Hi, {formatName(user?.name)}</p>
                  </div>
                </a>
              </Link>
            )}
          </div>
          <div className="flex gap-4 items-center md:hidden">
            <Link href="/login" passHref legacyBehavior>
              <a>
                <div
                  className={`px-6 py-2 border-b-4 border-solid border-[3px] border-white rounded-lg bg-bmka-accent-orange transition-all duration-500 hover:bg-bmka-accent-orange`}
                >
                  <p className="text-white text-xs">Masuk</p>
                </div>
              </a>
            </Link>
            <div
              role="button"
              onClick={() => setIsActive(true)}
              className="p-2"
            >
              <MenuIcon className="w-8 text-white" />
            </div>
          </div>
          <div
            className={`fixed bg-bmka-primary-blue z-10 top-0 h-full w-full p-10 md:hidden transition-all duration-500 ${
              isActive ? "right-0" : "-right-full"
            }`}
          >
            <div className="flex justify-end">
              <div
                role="button"
                onClick={() => setIsActive(false)}
                className="w-min p-2"
              >
                <ArrowRightIcon className="w-6 text-white" />
              </div>
            </div>
            <div className="">
              <Link href="/" passHref legacyBehavior>
                <a>
                  <div
                    className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                      pathname === "/" ? "font-bold" : ""
                    }`}
                  >
                    <p className="text-white">Home</p>
                  </div>
                </a>
              </Link>
              <Link href="/activities" passHref legacyBehavior>
                <a>
                  <div
                    className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                      pathname === "/activities" ? "font-bold" : ""
                    }`}
                  >
                    <p className="text-white">Kegiatan</p>
                  </div>
                </a>
              </Link>
              <Link href="/student-care" passHref legacyBehavior>
                <a>
                  <div
                    className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                      pathname === "/student-care" ? "font-bold" : ""
                    }`}
                  >
                    <p className="text-white">Ruang Curhat</p>
                  </div>
                </a>
              </Link>
              <Link href="/about-us" passHref legacyBehavior>
                <a>
                  <div
                    className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold ${
                      pathname === "/about-us" ? "font-bold" : ""
                    }`}
                  >
                    <p className="text-white">Tentang Kami</p>
                  </div>
                </a>
              </Link>
              <div
                onClick={() => setShowChild(!showChild)}
                className={` border-b-4 relative border-transparent transition-all duration-500  cursor-pointer`}
              >
                <div className="p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold">
                  <p className="text-white">Products</p>
                </div>
                {productChild && (
                  <>
                    {showChild && (
                      <div
                        style={{
                          marginLeft: "-40%",
                        }}
                        className="hidden w-44 absolute bg-white p-4 flex flex-col gap-4 rounded shadow-level-1 top-20 left-0 right-0 md:flex"
                      >
                        {productChild.map((item) => {
                          return (
                            <a
                              href={item.url}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              item.name
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
                {productChild && (
                  <>
                    {showChild &&
                      productChild.map((item) => (
                        <Link href={item.url} passHref legacyBehavior>
                          <a>
                            <div
                              className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:font-bold md:hidden bg-white ${
                                pathname === "" ? "font-bold" : ""
                              }`}
                            >
                              <p>{item.name}</p>
                            </div>
                          </a>
                        </Link>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
