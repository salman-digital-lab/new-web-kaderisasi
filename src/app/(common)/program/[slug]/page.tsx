import { Carousel } from "flowbite-react";
import Image from "next/image";

import { Button } from "@/components/common";
import { getActivity } from "@/services/activity";
import { TRANSLATION_TEMP } from "@/constants/render/activity";
import Link from "next/link";
import dayjs from "dayjs";
import { getProfile, getProfileActivity } from "@/services/profile";
import { cookies } from "next/headers";

import lmdiPoster from "@/assets/images/lmdi_poster.png";
import oprecPoster from "@/assets/images/oprec-poster.png";

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
    <main className="bg-white w-full my-24 max-w-[80rem] md:px-10 xl:mx-auto">
      <div className="w-full flex justify-center">
        <div className="div-fix w-96 h-[32rem] md:w-[32rem] md:h-[40rem]">
          {params.slug === "call-for-participants" ? (
            <Image
              src={oprecPoster}
              alt="Activity Banner"
              className="object-cover self-center rounded"
            />
          ) : (
            <Image
              src={lmdiPoster}
              alt="Activity Banner"
              className="object-cover self-center rounded"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col w-full items-center p-6 gap-4 mt-4 lg:flex-row lg:p-0 ">
        <div className="my-6 lg:w-9/12">
          <h1 className="text-3xl font-bold text-center md:text-left md:text-4xl">
            {activity.name}
          </h1>
          {/* <div className="flex gap-2 flex-wrap justify-center md:justify-start">
            <p className="flex text-xs w-fit rounded-full py-1 pl-2 pr-2 bg-secondary text-white mt-5 md:text-sm md:py-2 md:pl-3 md:pr-3">
              <CalendarDays className="h-[.9rem] md:h-[1.2rem]" />
              {dayjs(activity.activity_start).format("DD MMMM YYYY")}
            </p>
            <p className="flex text-xs w-fit rounded-full px-2 py-1 bg-primary text-white mt-5 md:text-sm md:px-4 md:py-2">
              {USER_LEVEL_RENDER[activity.minimum_level]}
            </p>
          </div> */}
        </div>

        <div className="bg-white rounded-xl shadow divide-y flex flex-col justify-center items-center gap-2 lg:w-3/12">
          {registration?.status &&
          registration?.status !== "BELUM TERDAFTAR" ? (
            <div className="flex flex-col items-center justify-center p-6">
              <h1 className="text-primary-800 font-bold">
                Registration Status
              </h1>
              <p className="flex text-xs w-fit rounded-full px-2 py-1 bg-secondary text-white mt-5 md:text-sm md:px-4 md:py-2">
                {TRANSLATION_TEMP[registration?.status]}
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center p-6">
                <h1 className="text-primary-800 font-bold">Registration End</h1>
                <p className="text-sm">
                  {dayjs(activity.registration_end).format("DD MMMM YYYY")}
                </p>
              </div>

              {profileData?.profile ? (
                profileData?.profile.level < activity.minimum_level ? (
                  <p className="font-bold text-primary-500">
                    Jenjang anda tidak cukup
                  </p>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6">
                    <Link
                      className="w-fit"
                      href={"/program/register/" + activity.slug + "/first"}
                    >
                      <Button variant="secondary">Register Now</Button>
                    </Link>
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center p-6 gap-4">
                  <p className="text-sm text-lmdi-primary">
                    Please login or create an account
                  </p>
                  <Link className="w-fit" href={"/login"}>
                    <Button variant="secondary">Login</Button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {activity.description ? (
        <div className="bg-lmdi-primary flex flex-col items-center p-6 gap-6 mt-4 md:rounded-lg md:mb-10">
          <h2 className="text-white w-fit border-b-2 border-lmdi-secondary text-2xl pb-2">
            Description
          </h2>
          <div className="bg-white p-4 rounded rendered-description">
            <div dangerouslySetInnerHTML={{ __html: activity.description }} />
          </div>
        </div>
      ) : null}
    </main>
  );
}
