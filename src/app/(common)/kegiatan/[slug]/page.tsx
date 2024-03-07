import { Carousel } from "flowbite-react";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/common";
import { getActivity } from "@/services/activity";
import { USER_LEVEL_RENDER } from "@/constants/render/activity";
import Link from "next/link";
import dayjs from "dayjs";
import { getProfile, getProfileActivity } from "@/services/profile";
import { cookies } from "next/headers";

export default async function Activities({
  params,
}: {
  params: { slug: string };
}) {
  let registration, profileData;
  const tokenCookie = cookies().get("kaderisasi-web-session");

  const activity = await getActivity(params);

  try {
    if (tokenCookie?.value) {
      registration = await getProfileActivity(tokenCookie?.value, params.slug);
      profileData = await getProfile(tokenCookie?.value);
    }
  } catch (error) {
    if (!(error instanceof Error && error.message === "Unauthorized")) {
      throw error;
    }
  }

  return (
    <main className="bg-white w-full mt-24 max-w-[80rem] md:px-10 xl:mx-auto">
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

      <div className="flex flex-col w-full items-center p-6 gap-4 mt-4 lg:flex-row lg:p-0 ">
        <div className="my-6 lg:w-9/12">
          <h1 className="text-3xl font-bold text-center md:text-left md:text-4xl">
            {activity.name}
          </h1>
          <div className="flex gap-2 flex-wrap justify-center md:justify-start">
            <p className="flex text-xs w-fit rounded-full py-1 pl-2 pr-2 bg-secondary text-white mt-5 md:text-sm md:py-2 md:pl-3 md:pr-3">
              <CalendarDays className="h-[.9rem] md:h-[1.2rem]" />
              {dayjs(activity.activity_start).format("DD MMMM YYYY")}
            </p>
            <p className="flex text-xs w-fit rounded-full px-2 py-1 bg-primary text-white mt-5 md:text-sm md:px-4 md:py-2">
              {USER_LEVEL_RENDER[activity.minimum_level]}
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow flex flex-col justify-center items-center gap-2 lg:w-3/12">
          {registration?.status && registration?.status !== "UNREGISTERED" ? (
            <>
              <h1 className="text-primary-800 font-bold">Status Pendaftaran</h1>
              <p className="flex text-xs w-fit rounded-full px-2 py-1 bg-secondary text-white mt-5 md:text-sm md:px-4 md:py-2">
                {registration?.status}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-primary-800 font-bold">Tutup Pendaftaran</h1>
              <p className="text-sm">
                {dayjs(activity.registration_end).format("DD MMMM YYYY")}
              </p>

              {profileData?.profile ? (
                profileData?.profile.level < activity.minimum_level ? (
                  <p className="font-bold text-primary-500">Jenjang anda tidak cukup</p>
                ) : (
                  <Link
                    className="w-fit"
                    href={"/kegiatan/daftar/" + activity.slug + "/pertama"}
                  >
                    <Button variant="secondary">Daftar Sekarang</Button>
                  </Link>
                )
              ) : (
                <>
                  <p className="text-sm text-primary-500">
                    Silahkan masuk terlebih dahulu
                  </p>
                  <Link className="w-fit" href={"/masuk"}>
                    <Button variant="secondary">Masuk</Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className="bg-primary flex flex-col items-center p-6 gap-6 mt-4 md:rounded-lg md:mb-10">
        <h2 className="text-white w-fit border-b-2 border-secondary text-2xl pb-2">
          Deskripsi
        </h2>
        <div className="bg-white p-4 rounded rendered-description">
          <div dangerouslySetInnerHTML={{ __html: activity.description }} />
        </div>
      </div>
    </main>
  );
}
