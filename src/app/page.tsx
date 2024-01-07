"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, BMKAFullIcon, BMKAWelcomeIcon, InstagramIcon, MailIcon, MenuIcon, PhoneIcon } from "@/assets/icons";
import Link from "next/link";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { usePathname } from "next/navigation";
import { activityData, activityCategoryData } from "@/constants";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const [isNavbarScrolling, setIsNavbarScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setIsNavbarScrolling(true);

        return;
      }

      setIsNavbarScrolling(false);
    });
  }, []);

  const formatDate = (date: string) => {
    dayjs.extend(localizedFormat);
    return dayjs(date).format("LL");
  };

  // Caraousell
  const CardCarousellBoxRef = useRef<HTMLDivElement>(null);
  const CardCarousellContentRef = useRef<HTMLDivElement>(null);

  const getChildrenLength = 3;

  const getSizePerCard = () => {
    const sizePerCard = CardCarousellBoxRef.current?.scrollWidth / getChildrenLength;

    return sizePerCard;
  };

  const getCurrentPosition = () => {
    const currentPositions = CardCarousellContentRef.current?.scrollLeft ?? 0;

    return currentPositions;
  };

  const previousOnClickHandler = () => {
    CardCarousellContentRef.current.scrollLeft = getCurrentPosition() - getSizePerCard();
  };

  const nextOnClickHandler = () => {
    CardCarousellContentRef.current.scrollLeft = getCurrentPosition() + getSizePerCard();
  };

  useEffect(() => {
    if (CardCarousellContentRef.current) {
      CardCarousellContentRef.current.scrollLeft = 0;
    }
  }, []);

  const imageOnErrorHandler = (e) => {
    e.target.src = "/assets/image_activities_placeholder.png";
  };

  const getActivityCategoryID = ({ activityCategoryID, activityCategoryData }: { activityCategoryID: number; activityCategoryData: { id: number; name: string }[] }) => {
    const result = activityCategoryData.filter((item: { id: number; name: string }) => item.id === activityCategoryID);

    return result[0]?.name;
  };

  return (
    <div className="w-full min-h-screen grid grid-rows-pageWrapper">
      <div>
        {/* <Navigation /> */}
        <Navbar isNavbarScrolling={isNavbarScrolling} />

        <main>
          {/* HomeHeader */}
          <div className="w-full bg-bmka-primary-blue pt-40 pb-10">
            <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
              <div className="mb-16 flex justify-center md:justify-between">
                <div className="flex items-center">
                  <div className="max-w-xl flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-white text-center leading-tight md:text-left">Selamat Datang di Kaderisasi Salman ITB</h1>
                    </div>
                    <p className="text-white text-center md:text-left">
                      Portal Aktivis Salman yang dikelola BMKA (Bidang Kemahasiswaan, Kaderisasi dan Alumni) Salman yang berfungsi sebagai pusat pendaftaran kegiatan di{" "}
                      <span className="font-bold underline">
                        <a href="https://www.instagram.com/kaderisasisalman/" rel="noopener noreferrer" target="_blank">
                          @kaderisasisalman
                        </a>
                      </span>
                      . Program pembinaan dalam rangka membentuk kader teladan untuk membangun Indonesia.
                    </p>
                    <div className="flex items-center gap-6 mx-auto md:mx-0">
                      <div>
                        <Link href="/about-us" passHref legacyBehavior>
                          <a>
                            <button className="bg-bmka-accent-orange border-2 border-bmka-accent-orange py-2 px-4 rounded" type="button">
                              <p className="text-white font-bold">Tentang BMKA</p>
                            </button>
                          </a>
                        </Link>
                      </div>
                      <div style={{ width: "2px" }} className="h-16 bg-white" />
                      <div>
                        <Link href="/regeneration-flow" passHref legacyBehavior>
                          <a>
                            <button className="py-2 px-4 rounded border-2 border-white" type="button">
                              <p className="text-white font-bold">Alur Kaderisasi</p>
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="h-96">
                    <BMKAWelcomeIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HomeStatistics */}
          <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
            <div className="w-full max-w-5xl mx-auto flex flex-col justify-between border-2 rounded-xl bg-white transform -translate-y-16 shadow-level-1 md:flex-row md:-translate-y-1/2">
              <div className="text-center p-8">
                <p className="text-3xl text-bmka-accent-orange font-extrabold">678</p>
                <p>Kampus di seluruh Indonesia</p>
              </div>
              <div className="text-center p-8">
                <p className="text-3xl text-bmka-accent-orange font-extrabold">32400</p>
                <p>Kader dari kalangan mahasiswa</p>
              </div>
              <div className="text-center p-8">
                <p className="text-3xl text-bmka-accent-orange font-extrabold">34</p>
                <p>Provinsi di seluruh Indonesia</p>
              </div>
            </div>
          </div>

          {/* HomeActivity */}
          <div>
            <>
              <div className="w-full grid gap-6">
                <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold">Kegiatan Terkini</h2>
                    <div className="flex gap-4">
                      <button type="button" className="border-2 border-bmka-primary-blue rounded p-2" onClick={previousOnClickHandler}>
                        <ArrowLeftIcon className="w-6 rounded text-bmka-primary-blue" />
                      </button>
                      <button type="button" className="border-2 border-bmka-primary-blue rounded p-2" onClick={nextOnClickHandler}>
                        <ArrowRightIcon className="w-6 rounded text-bmka-primary-blue" />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  ref={CardCarousellContentRef}
                  className="w-full overflow-x-scroll"
                  style={{
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                  }}
                >
                  <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
                    <div ref={CardCarousellBoxRef} className="w-min flex gap-6">
                      {activityData.map((item, index) => {
                        const { name, role, slug, banner_url, created_at, category_id, register_end_date, banner_file } = item;

                        return (
                          <div key={index} className="flex justify-center">
                            <div style={{ width: "270px" }} className="p-2 flex flex-col justify-between gap-4 border-2 bg-white cursor-default border-bmka-primary-blue rounded">
                              <div className="flex flex-col gap-4">
                                <img src={`${banner_url}/${banner_file?.filename}`} alt="Activity Banner" onError={imageOnErrorHandler} className="w-full h-48 object-cover rounded" />
                                <p className="font-bold">{name}</p>
                                <p className="text-bmka-primary-blue font-bold">
                                  {getActivityCategoryID({
                                    activityCategoryData,
                                    activityCategoryID: category_id,
                                  })}
                                </p>
                                {/* {props?.status && (
                                  <div className="flex gap-1">
                                    <p className="font-bold">Status : </p>
                                    <p className="text-bmka-primary-blue font-semibold">{props.status}</p>
                                  </div>
                                )} */}
                              </div>
                              <div className="flex flex-col gap-4">
                                <div>
                                  <p className="text-sm">Untuk {role.name}</p>
                                  <p className="text-sm">Tutup: {formatDate(register_end_date)}</p>
                                </div>

                                {/* if props edit exist  */}
                                {/* {props?.edit ? (
                                  <Link href={`/activities/edit/${slug}`} passHref legacyBehavior>
                                    <a>
                                      <button className={`bg-bmka-accent-orange border-2 border-bmka-accent-orange py-2 px-4 rounded text-white font-bold w-full`} type="button">
                                        <p className="text-white font-bold">Edit Pendaftaran</p>
                                      </button>
                                    </a>
                                  </Link>
                                ) : (
                                )} */}
                                <Link href={`/activities/${slug}`} passHref legacyBehavior>
                                  <a>
                                    <button className={`bg-bmka-accent-orange border-2 border-bmka-accent-orange py-2 px-4 rounded w-full`} type="button">
                                      <p className="text-white font-bold">Lihat</p>
                                    </button>{" "}
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <style jsx>{`
                ::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </>
            <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
              <div className="mt-12 text-center">
                <Link href="/activities" passHref legacyBehavior>
                  <a>
                    <button className="py-2 px-4 rounded border-2 border-bmka-accent-orange">
                      <p className="font-extrabold text-bmka-accent-orange">Lihat Selengkapnya</p>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* HomeStudentCare */}
          <div className="my-28">
            <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
              <div>
                <div className="flex flex-col items-center justify-between px-8 py-10 bg-bmka-accent-orange rounded-3xl md:px-14 md:py-24 md:flex-row">
                  <p className="text-3xl text-white font-extrabold">Ruang Curhat</p>
                  <p className="text-white max-w-lg my-4 md:my-0">
                    Ruang Curhat merupakan layanan konseling sebaya yang diberikan oleh sesama aktivis salman. Aktivis salman yang akan membersamai kamu, sudah mendapatkan pelatihan dan bekal-bekal pengetahuan psikologi praktis untuk
                    menjadi seorang konselor lho.
                  </p>
                </div>
                <div className="mx-14 px-4 py-6 bg-white rounded-lg transform -translate-y-10 shadow-level-1">
                  <div className="flex flex-col gap-4 items-center justify-between md:flex-row">
                    <p className="font-bold text-center">Ayo menuju ruang curhat dan ceritakan masalahmu</p>
                    <Link href="/student-care" passHref legacyBehavior>
                      <a>
                        <button className="bg-bmka-primary-blue border-2 border-bmka-primary-blue py-2 px-4 rounded">
                          <p className="text-white font-bold">Lanjutkan</p>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="py-10 bg-bmka-shade-dark-purple">
        <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-4">
            {/* InfoSection */}
            <div className="md:max-w-sm flex flex-col">
              <div className="flex pb-6 justify-center sm:justify-start">
                <p className="pb-2 text-white font-bold border-b-2 border-bmka-accent-orange">Platform Aktivis Salman ITB (BMKA)</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-32">
                  <BMKAFullIcon />
                </div>
                <p style={{ opacity: "0.7" }} className="text-white">
                  Portal Aktivis Salman yang dikelola BMKA (Bidang Kemahasiswaan, Kaderisasi dan Alumni) Salman yang berfungsi sebagai pusat pendaftaran kegiatan di @kaderisasisalman. Program pembinaan dalam rangka membentuk kader teladan
                  untuk membangun Indonesia.
                </p>
              </div>
              <p className="mt-4 text-white text-xs font-bold">Copyright BMKA Salman 2021</p>
            </div>
            <div className="flex gap-10 flex-col sm:flex-row">
              {/* ContactSection */}
              <div>
                <div className="flex pb-6 justify-center sm:justify-start">
                  <p className="pb-2 text-white font-bold border-b-2 border-bmka-accent-orange">Kontak</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <InstagramIcon className="w-6 h-6 text-white" />
                    <p style={{ opacity: "0.7" }} className="text-white">
                      @kaderisasisalman
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MailIcon className="w-6 h-6 text-white" />
                    <p style={{ opacity: "0.7" }} className="text-white">
                      kaderisasi@salmanitb.com
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="w-6 h-6 text-white" />
                    <p style={{ opacity: "0.7" }} className="text-white">
                      +62 821 1128 6037
                    </p>
                  </div>
                </div>
              </div>
              {/* AddressSection */}
              <div>
                <div className="flex pb-6 justify-center sm:justify-start">
                  <p className="pb-2 text-white font-bold border-b-2 border-bmka-accent-orange">Alamat</p>
                </div>
                <div className="sm:max-w-xs">
                  <p style={{ opacity: "0.7" }} className="text-white">
                    Jl. Ganesa No.7, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
