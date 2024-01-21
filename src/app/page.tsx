"use client";
import Link from "next/link";
import Image from "next/image";

import homepageIllustration from "../assets/images/homepage-1.svg";

import { Footer, Navbar } from "@/components/layout";
import { Button, Card } from "@/components/common";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid grid-rows-pageWrapper bg-white">
      <Navbar />
      <main>
        <div className="w-full h-screen bg-primary pt-16 md:h-fit md:pt-32">
          <div className="w-full px-4 max-w-6xl mx-auto md:px-6">
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
              <div className="flex items-center">
                <div className="max-w-xl flex flex-col gap-6">
                  <p className="text-white text-3xl text-center font-bold md:text-5xl">
                    Selamat Datang di <br /> Kaderisasi Salman
                  </p>
                  <p className="text-white text-xl text-center md:text-left px-10">
                    Ayo mulai perjalanan kaderisasi mu disini
                  </p>
                  <div className="flex flex-col items-center gap-6 mx-auto md:mx-0">
                    <Link href="/regeneration-flow">
                      <Button variant="secondary" outlined={true}>
                        Daftar Kegiatan
                      </Button>
                    </Link>
                    <p className="text-white">atau</p>
                    <Link href="/regeneration-flow">
                      <Button variant="transparant-secondary" outlined={true}>
                        Lihat Alur Kaderisasi
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="order-first md:block  md:order-last">
                <Image
                  className="-translate-x-6 p-10"
                  src={homepageIllustration}
                  alt="Selamat Datang di BMKA Salman ITB"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-5 py-12 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="font-bold text-3xl">Kegiatan Baru</h1>
            <p className="text-xl">
              Jelajahi dan saksikan peluang kegiatan yang dapat membantu Anda
              mengasah potensi dan kontribusi unik Anda dalam lingkungan yang
              mendukung.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex flex-row-reverse">
              <Button className="flex ">
                Lihat semua <ArrowRight className="w-[1rem]" />
              </Button>
            </div>
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
            <div></div>
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-white text-2xl md:text-left text-center">
                Kembalikan Senyum Bahagiamu
              </h1>
              <p className="text-white">
                Ruang Curhat merupakan layanan konseling sebaya yang diberikan
                oleh sesama aktivis salman. Aktivis salman yang akan membersamai
                kamu, sudah mendapatkan pelatihan dan bekal-bekal pengetahuan
                psikologi praktis untuk menjadi seorang konselor lho.
              </p>
              <div>
                <Button variant="secondary" outlined={true}>
                  Ruang Curhat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
