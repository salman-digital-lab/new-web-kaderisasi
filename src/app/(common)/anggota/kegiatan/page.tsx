import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/common";

import { Kegiatan } from "@/features/Profile/components";
import placeholderImage from "@/assets/images/profile-image-placeholder.jpg";
import LogoutButton from "@/features/Auth/components/LogoutButton";
import { cookies } from "next/headers";
import { getProfile, getProfileActivities } from "@/services/profile";
import { USER_LEVEL_RENDER } from "@/constants/render/activity";

export default async function Profile() {
  const tokenCookie = cookies().get("kaderisasi-web-session");

  const profileData = await getProfile(tokenCookie?.value || "");
  const profileActivities = await getProfileActivities(
    tokenCookie?.value || "",
  );

  return (
    <main className="mt-[65px] pb-6 text-black bg-white lg:mt-[84px] lg:py-16">
      <div className="max-w-6xl lg:px-6 lg:mx-auto">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <section className="lg:w-1/3">
            <div className="relative h-[270px] shadow-lg md:h-[350px] lg:w-80 lg:h-[450px]">
              <div className="h-[25%] bg-primary lg:h-[40%] lg:rounded-t-lg"></div>
              <div className="absolute top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border-8 border-white rounded-full">
                <Image
                  src={placeholderImage}
                  alt="Profile image"
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col justify-end items-center gap-2 h-[75%] pb-4 bg-white rounded-b-lg lg:justify-center lg:h-[60%] lg:pb-0">
                <h2 className="text-lg font-bold">
                  {profileData?.profile?.name}
                </h2>
                <p className="text-md text-gray-500">
                  {profileData?.profile?.level
                    ? USER_LEVEL_RENDER[profileData.profile.level]
                    : "Jamaah"}
                </p>
                <LogoutButton />
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 px-4 lg:w-2/3">
            <div className="lg:none flex justify-center lg:justify-start items-center gap-4 mb-8">
              <Link href="/anggota/profil">
                <Button
                  variant="outlined-primary"
                  className="hover:!text-white"
                >
                  Profil
                </Button>
              </Link>
              <Link href="/anggota/kegiatan">
                <Button
                  className="border-2 border-solid border-primary"
                  variant="primary"
                >
                  Kegiatan
                </Button>
              </Link>
            </div>

            <div>
              <Kegiatan activities={profileActivities} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
