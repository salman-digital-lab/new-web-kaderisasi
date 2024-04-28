import Link from "next/link";

import { Button } from "@/components/common";

import { Profil } from "@/features/Profile/components";
import LogoutButton from "@/features/Auth/components/LogoutButton";
import { getProfile, getProvinces, getUniversities } from "@/services/profile";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Profile() {
  const tokenCookie = cookies().get("kaderisasi-web-session");
  let profileData;

  try {
    profileData = await getProfile(tokenCookie?.value || "");
  } catch (error) {
    if (!(error instanceof Error && error.message === "Unauthorized")) {
      throw error;
    } else {
      redirect("utils/remove-session");
    }
  }

  const provinceData = await getProvinces();
  const universityData = await getUniversities();

  return (
    <main className="py-6 px-2 text-black bg-white">
      <div className="max-w-6xl lg:px-6 lg:mx-auto flex flex-col justify-between gap-8 lg:flex-row">
        <section className="lg:w-1/3">
          <div className="relative shadow-lg flex flex-col justify-end items-center gap-2 p-4 bg-white rounded-b-lg lg:justify-center max-w-screen-sm mx-auto">
            <h2 className="text-lg font-bold">{profileData?.profile?.name}</h2>
            <p className="text-md text-gray-500">
              {profileData?.userData?.email}
            </p>
            <LogoutButton />
          </div>
        </section>

        <section className="flex flex-col gap-4 px-4 lg:w-2/3">
          <div className="lg:none flex justify-center lg:justify-start items-center gap-4 mb-8">
            <Link href="/account/profile">
              <Button
                className="border-2 border-solid border-primary"
                variant="primary"
              >
                Profile
              </Button>
            </Link>
            <Link href="/account/activity">
              <Button variant="outlined-primary" className="hover:!text-white">
                Activity
              </Button>
            </Link>
          </div>

          <div>
            <Profil
              data={profileData}
              provinces={provinceData}
              universities={universityData?.data}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
