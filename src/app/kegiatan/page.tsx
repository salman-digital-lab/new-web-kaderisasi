import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@/components/common";
import { Footer, Navbar } from "@/components/layout";

import activitiespageIllustration from "../../assets/images/activitiespage-1.svg";

export default function Activities() {
  return (
    <div className="w-full min-h-screen grid grid-rows-pageWrapper bg-white">
      <Navbar />
      <main>
        <div className="w-full h-screen bg-primary pt-16 md:h-fit md:pt-32 md:pb-16">
          <div className="w-full px-4 max-w-6xl mx-auto md:px-6">
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
              <div className="flex items-center">
                <div className="max-w-xl flex flex-col gap-6">
                  <p className="text-white text-3xl text-center font-bold md:text-5xl">
                    Ayo Daftar Kegiatan <br /> Di Kaderisasi Salman
                  </p>
                  <p className="hidden text-white text-xl text-center px-10 lg:block">
                    Kegiatan di kaderisasi salman merupakan kegiatan yang
                    diperuntukan untuk aktivis yang terdaftar menjadi kader
                    salman. Kegiatan meliputi kegiatan kaderisasi, pelatihan,
                    keasramaan dan lain-lain.
                  </p>
                  <div className="flex flex-col items-center gap-6 mx-auto md:mx-0">
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
                  src={activitiespageIllustration}
                  alt="Selamat Datang di BMKA Salman ITB"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-5 pt-12 md:px-6 max-w-6xl mx-auto">
          <div className="flex gap-6">
            <Button>All</Button>
            <Button className="bg-[#DBDCDC] text-[#7B7C7E]">Pelatihan</Button>
            <Button className="bg-[#DBDCDC] text-[#7B7C7E]">Seminar</Button>
            <Button className="bg-[#DBDCDC] text-[#7B7C7E]">Kealumnian</Button>
          </div>
        </div>

        {/* 

        <div className="w-full px-5 py-12 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center mb-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center mb-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center mb-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="w-full px-5 py-12 md:px-6 max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Button variant="secondary">Lebih Banyak</Button>
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
