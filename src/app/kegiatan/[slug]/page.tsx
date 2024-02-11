"use client";

import { Button } from "@/components/common";
import { Footer, Navbar } from "@/components/layout";
import { Carousel } from "flowbite-react";
import { CalendarClock } from "lucide-react";
import Image from "next/image";

export default function Activities() {
  return (
    <>
      <Navbar />
      <main className="bg-white w-full mt-24 md:w-2/3 md:mx-auto">
        <div className="w-full flex justify-center">
          <Carousel
            slide={false}
            className="carousel-fix w-96 h-[32rem] md:w-[32rem] md:h-[40rem]"
          >
            <Image
              src="https://admin-api-kaderisasi.salmanitb.com/activity_pic/1704528106622.jpeg"
              alt="Activity Banner"
              width={230}
              height={288}
            />
            <Image
              src="https://admin-api-kaderisasi.salmanitb.com/activity_pic/1707458344756.png"
              alt="Activity Banner"
              width={230}
              height={288}
            />
            <Image
              src="https://admin-api-kaderisasi.salmanitb.com/activity_pic/1707458357015.png"
              alt="Activity Banner"
              width={230}
              height={288}
            />
          </Carousel>
        </div>
        <div className="flex flex-col w-full items-center p-6 md:flex-row md:p-0">
          <div className="my-6 md:w-4/5">
            <h1 className="text-3xl font-bold text-center md:text-left md:text-4xl">
              Latihan Mujtahid Dakwah 255
            </h1>
            <div className="flex gap-2 flex-wrap">
              <p className="flex text-xs w-fit rounded-full py-1 pl-2 pr-2 bg-secondary text-white mt-5 md:text-sm md:py-2 md:pl-3 md:pr-3">
                <CalendarClock className="h-[.9rem] md:h-[1.2rem]" /> 12/08/2023
              </p>
              <p className="flex text-xs w-fit rounded-full px-2 py-1 bg-primary text-white mt-5 md:text-sm md:px-4 md:py-2">
                Kaderisasi
              </p>
            </div>
          </div>
          <Button className="md:w-1/5" variant="secondary">
            Daftar Sekarang
          </Button>
        </div>
        <div className="bg-primary flex flex-col items-center p-6 gap-6 md:rounded-lg md:mb-10">
          <h2 className="text-white w-fit border-b-2 border-secondary text-2xl pb-2">
            Deskripsi
          </h2>
          <div className="bg-white p-4 rounded rendered-description">
            <p>[OPEN STUDIO HADIR KEMBALI]</p>
            <p></p>
            <p>
              Siapa nih yang udah gasabar nunggu Open Studio semester ini? Open
              Studio kali ini bawa topik yang seru banget lho! Topik Open Studio
              Semester ini adalah 3D Design &amp; Printing untuk membuat alat
              dan membuat karya seni, serta simulasi medan elektromagnetik untuk
              keperluan RnD dan Penelitian.
            </p>
            <p></p>
            <p>*Ga daftar Open Studio? Yang bener aja! Rugi Dong!*</p>
            <p></p>
            <p>
              Buruan daftar Open Studio sekarang juga lewat website
              kaderisasi.salmanitb.com
            </p>
            <p></p>
            <p>
              Apabila ada yang ingin ditanyakan, silakan langsung tanyakan pada
              akang ini Kalsani (wa.me/628987025795)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
