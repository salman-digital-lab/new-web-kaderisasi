import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/common";
import { ActivityCard } from "@/components/biz";
import { Footer, Navbar } from "@/components/layout";

import activitiespageIllustration from "@/assets/images/activitiespage-1.svg";
import Select from "@/components/form/Select";
import { Input } from "@/components/form";

export default function Activities() {
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

        <div className="flex flex-col gap-5 w-full px-5 pt-12 max-w-6xl mx-auto md:px-6">
          <Input placeholder="Cari Kegiatan" inputStyle="outlined-primary" />
          <div className="gap-3 hidden justify-center flex-wrap md:flex">
            <Button>Semua</Button>
            <Button>SSC</Button>
            <Button>LMD</Button>
            <Button>Spectra</Button>
          </div>

          <Select
            inputStyle="outlined-primary"
            className="md:hidden"
            placeholder="Pilih Kategori"
            isClearable
            options={[{ label: "Pelatihan", value: "pelatihan" }]}
          />
        </div>

        <div className="w-full px-5 py-12 max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 md:px-6">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>

        <div className="w-full px-5 py-12 md:px-6 max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Button variant="secondary">Lebih Banyak</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
