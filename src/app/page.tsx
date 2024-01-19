"use client";
import { BMKAWelcomeIcon } from "@/assets/icons";
import Link from "next/link";

import { Footer, Navbar } from "@/components/layout";
import { Button, Card } from "@/components/common";
import RuangCurhatIcon from "@/assets/images/RuangCurhatIcon";
import HomeWomanIcon from "@/assets/images/HomeWomanIcon";
import HomeAlumniIcon from "@/assets/images/HomeAlumniIcon";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid grid-rows-pageWrapper">
      <div>
        <Navbar />
        <main>
          <div className="w-full bg-primary pt-40 pb-10">
            <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
              <div className="mb-16 flex flex-wrap md:flex-nowrap justify-center md:justify-between">
                <div className="flex items-center">
                  <div className="max-w-xl flex flex-col  gap-6">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-white text-2xl font-light text-center leading-tight md:text-left">
                        Kaderisasi Salman
                      </h1>
                    </div>
                    <p className="text-white text-3xl text-center font-bold md:text-left">
                      Selamat Datang di Kaderisasi Salman, Kembangkan Potensi dirimu Untuk masa depan
                    </p>
                    <div className="flex items-center gap-6 mx-auto md:mx-0">
                      <div>
                        <Link href="/regeneration-flow" passHref legacyBehavior>
                          <a>
                            <Button variant="secondary" outlined={true}>
                              Lihat Kegiatan
                            </Button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:block order-first md:order-last">
                    <BMKAWelcomeIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="w-full px-10 py-24 md:px-6 max-w-6xl mx-auto">
              <div className="flex flex-col gap-4 text-center">
                <h1 className="font-bold text-3xl">
                  Kegiatan Baru
                </h1>
                <p className="text-xl">Jelajahi dan saksikan peluang kegiatan yang dapat membantu Anda mengasah potensi dan kontribusi unik Anda dalam lingkungan yang mendukung.</p>
              </div>
              <div className="flex flex-col gap-4 mt-12">
                <p className="font-bold text-right pr-10">Lihat semua</p>
                <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>

            <div className="w-full mt-20 mb-20 bg-primary py-16 md:py-6 px-16 md:px-6 max-w-6xl mx-auto md:rounded-xl">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10">
                  <div>
                    <RuangCurhatIcon />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-white text-2xl md:text-left text-center">Kembalikan Senyum Bahagiamu</h1>
                    <p className="text-white">Ruang Curhat merupakan layanan konseling sebaya yang diberikan oleh sesama aktivis salman. Aktivis salman yang akan membersamai kamu, sudah mendapatkan pelatihan dan bekal-bekal pengetahuan psikologi praktis untuk menjadi seorang konselor lho.</p>
                    <div>
                      <Button variant="secondary" outlined={true} >Ruang Curhat</Button>
                    </div>
                  </div>
                </div>
            </div>

            <div className="w-full bg-white py-12 mb-20 px-16 md:px-6 max-w-6xl mx-auto">
              <div className="flex flex-wrap md:flex-nowrap gap-12">
                <div className="flex flex-col gap-8">
                  <p className="text-small font-bold">20/11/2023</p>
                  <h1 className="font-bold text-2xl">Giat Kegiatan alumni bersama angkatan 2023</h1>
                  <p>Sebuah forum akrab di mana pengalaman dan kisah sukses alumni kami menjadi inspirasi bagi generasi baru. Melalui acara ini, member baru dapat memperluas jaringan, berbagi pengetahuan, dan mendapatkan wawasan berharga dari para alumni yang telah meniti jejak sukses setelah meninggalkan jejak mereka di lembaga kami. Bergabunglah dalam komunitas ini, dan bersama-sama kita jalin hubungan yang kuat dan berkelanjutan, mendorong pertumbuhan bersama dalam setiap langkah perjalanan mereka.</p>
                </div>
                <div>
                  <HomeAlumniIcon />
                </div>
              </div>
            </div>

            <div className="w-full bg-primary mb-24 md:px-6 max-w-6xl mx-auto rounded-t-lg md:rounded-xl">
              <div className="py-16 md:py-12 px-10 md:pl-10 md:pr-0">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10">
                  <div className="flex items-center md:items-start flex-col gap-6">
                    <h1 className="font-bold text-white text-center md:text-left text-2xl">Sudah Saatnya Aktif dalam Sosial dan Mampu Membantu Sesama dari Kaderisasi Salman</h1>
                    <div>
                      <Button variant="secondary" outlined={true} >Lihat Kegiatan</Button>
                    </div>
                  </div>
                  <div className="order-first md:order-last">
                    <HomeWomanIcon />
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
