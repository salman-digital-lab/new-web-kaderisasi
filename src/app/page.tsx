"use client";
import { BMKAWelcomeIcon } from "@/assets/icons";
import Link from "next/link";

import { Footer, Navbar } from "@/components/layout";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid grid-rows-pageWrapper">
      <div>
        <Navbar />

        <main>
          {/* HomeHeader */}
          <div className="w-full bg-bmka-primary-blue pt-40 pb-10">
            <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
              <div className="mb-16 flex justify-center md:justify-between">
                <div className="flex items-center">
                  <div className="max-w-xl flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-white text-center leading-tight md:text-left">
                        Selamat Datang di Kaderisasi Salman ITB
                      </h1>
                    </div>
                    <p className="text-white text-center md:text-left">
                      Portal Aktivis Salman yang dikelola BMKA (Bidang
                      Kemahasiswaan, Kaderisasi dan Alumni) Salman yang
                      berfungsi sebagai pusat pendaftaran kegiatan di{" "}
                      <span className="font-bold underline">
                        <a
                          href="https://www.instagram.com/kaderisasisalman/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          @kaderisasisalman
                        </a>
                      </span>
                      . Program pembinaan dalam rangka membentuk kader teladan
                      untuk membangun Indonesia.
                    </p>
                    <div className="flex items-center gap-6 mx-auto md:mx-0">
                      <div>
                        <Link href="/about-us" passHref legacyBehavior>
                          <a>
                            <button
                              className="bg-bmka-accent-orange border-2 border-bmka-accent-orange py-2 px-4 rounded"
                              type="button"
                            >
                              <p className="text-white font-bold">
                                Tentang BMKA
                              </p>
                            </button>
                          </a>
                        </Link>
                      </div>
                      <div style={{ width: "2px" }} className="h-16 bg-white" />
                      <div>
                        <Link href="/regeneration-flow" passHref legacyBehavior>
                          <a>
                            <button
                              className="py-2 px-4 rounded border-2 border-white"
                              type="button"
                            >
                              <p className="text-white font-bold">
                                Alur Kaderisasi
                              </p>
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
                <p className="text-3xl text-bmka-accent-orange font-extrabold">
                  678
                </p>
                <p>Kampus di seluruh Indonesia</p>
              </div>
              <div className="text-center p-8">
                <p className="text-3xl text-bmka-accent-orange font-extrabold">
                  32400
                </p>
                <p>Kader dari kalangan mahasiswa</p>
              </div>
              <div className="text-center p-8">
                <p className="text-3xl text-bmka-accent-orange font-extrabold">
                  34
                </p>
                <p>Provinsi di seluruh Indonesia</p>
              </div>
            </div>
          </div>

          <div className="my-28">
            <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
              <div>
                <div className="flex flex-col items-center justify-between px-8 py-10 bg-bmka-accent-orange rounded-3xl md:px-14 md:py-24 md:flex-row">
                  <p className="text-3xl text-white font-extrabold">
                    Ruang Curhat
                  </p>
                  <p className="text-white max-w-lg my-4 md:my-0">
                    Ruang Curhat merupakan layanan konseling sebaya yang
                    diberikan oleh sesama aktivis salman. Aktivis salman yang
                    akan membersamai kamu, sudah mendapatkan pelatihan dan
                    bekal-bekal pengetahuan psikologi praktis untuk menjadi
                    seorang konselor lho.
                  </p>
                </div>
                <div className="mx-14 px-4 py-6 bg-white rounded-lg transform -translate-y-10 shadow-level-1">
                  <div className="flex flex-col gap-4 items-center justify-between md:flex-row">
                    <p className="font-bold text-center">
                      Ayo menuju ruang curhat dan ceritakan masalahmu
                    </p>
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
      <Footer />
    </div>
  );
}
