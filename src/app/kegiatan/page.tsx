import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/common";
import { Footer, Navbar } from "@/components/layout";

import activitiespageIllustration from "@/assets/images/activitiespage-1.svg";
import ActivityList from "@/features/Activities/components/ActivityList";

export default function Activities({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="w-full h-[75vh] bg-primary pt-16 md:h-fit md:pt-32 md:pb-16">
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
              <div className="order-first h-fit md:order-last">
                <Image
                  className="-translate-x-6 p-10 max-h-[40vh]"
                  src={activitiespageIllustration}
                  alt="Selamat Datang di BMKA Salman ITB"
                />
              </div>
            </div>
          </div>
        </div>
        <ActivityList searchParams={searchParams} />
      </main>

      <Footer />
    </div>
  );
}
