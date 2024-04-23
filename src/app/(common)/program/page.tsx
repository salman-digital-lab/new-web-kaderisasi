import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/common";

import activitiespageIllustration from "@/assets/images/activitiespage-1.svg";
import ActivityList from "@/features/Activities/components/ActivityList";
import { ActivityCard } from "@/components/biz";
import { cookies } from "next/headers";
import { getProfileActivity } from "@/services/profile";

export default async function Activities() {
  let registration;
  const tokenCookie = cookies().get("kaderisasi-web-session");

  try {
    if (tokenCookie?.value) {
      registration = await getProfileActivity(
        tokenCookie?.value,
        "open-registration-ilias",
      );
      console.log(registration);
    }
  } catch (error) {
    if (!(error instanceof Error && error.message === "Unauthorized")) {
      throw error;
    }
  }

  return (
    <main>
      <div className="w-full bg-lmdi-primary pb-8 flex flex-col items-center md:pt-8 lg:flex-row-reverse lg:justify-center">
        <div className="p-10">
          <Image
            src={activitiespageIllustration}
            alt="Mascot Leadership In Action Summit 2024"
            priority
          />
        </div>
        <div className="flex max-w-xl items-center flex-col gap-6">
          <p className="text-white text-4xl px-10 text-center font-bold md:text-4xl">
            International Leadership in Action Summit 2024
          </p>
          <p className="text-white text-xl px-10 text-center font-bold md:text-2xl">
            Chapter Singapore & Malaysia
          </p>
          <p className="text-white text-md text-center px-10">
            Embark on a journey unlike any other with the LMDI International
            Leadership Development Program, an immersive experience meticulously
            designed to shape the future leaders of Indonesia. Keterangan
            singkat tentang program
          </p>
          <div className="flex flex-col items-center gap-6 mx-auto md:mx-0 md:flex-row">
            <Link
              href={
                tokenCookie
                  ? "/program/register/open-registration-ilias/first"
                  : "/login"
              }
            >
              <Button
                disabled={!(registration?.status === "BELUM TERDAFTAR")}
                variant="secondary"
              >
                {registration?.status === "BELUM TERDAFTAR"
                  ? "Register Now"
                  : "Registered"}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full my-14 flex flex-col items-center">
        <h1 className="font-bold text-3xl mb-10">Program Highlight</h1>
        <div className="flex p-6 w-full flex-wrap gap-5 items-center justify-center">
          <ActivityCard
            key={1}
            activityName="Registration"
            registrationEnd="13-05-2024"
            slug="registration"
            minimumLevel={0}
          />
          <ActivityCard
            key={1}
            activityName="Basic Training"
            registrationEnd="13-05-2024"
            slug="registration"
            minimumLevel={0}
          />
          <ActivityCard
            key={1}
            activityName="Mentoring"
            registrationEnd="13-05-2024"
            slug="registration"
            minimumLevel={0}
          />
          <ActivityCard
            key={1}
            activityName="Proposal Training"
            registrationEnd="13-05-2024"
            slug="registration"
            minimumLevel={0}
          />
          <ActivityCard
            key={1}
            activityName="Leadership in Summit"
            registrationEnd="13-05-2024"
            slug="registration"
            minimumLevel={0}
          />
        </div>
      </div>

      <div className="w-full my-10 mx-auto bg-lmdi-secondary-darken py-6 px-16 lg:rounded-xl lg:max-w-[72rem]">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-white text-2xl text-center">
              What Our Alumni Said
            </h1>
            <p className="text-white text-center">
              The Leadership in Action Summit 2024 isnt just an opportunity—its
              a calling. A chance to forge lifelong connections, to challenge
              your limits, and to emerge as a leader poised to build a better
              civilization for Indonesia and beyond.
            </p>
            <p className="text-white text-center">
              Dare to lead. Dare to inspire. Your journey begins here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
