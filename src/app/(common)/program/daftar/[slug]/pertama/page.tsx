import ActivityProfileForm from "@/features/Activities/components/ActivityProfileForm";
import { getActivity } from "@/services/activity";
import { getProfile, getProvinces, getUniversities } from "@/services/profile";
import { cookies } from "next/headers";

export default async function ActivityRegistration({
  params,
}: {
  params: { slug: string };
}) {
  const tokenCookie = cookies().get("kaderisasi-web-session");
  const activity = await getActivity(params);
  const profileData = await getProfile(tokenCookie?.value || "");
  const provinceData = await getProvinces();
  const universityData = await getUniversities();

  return (
    <main className="bg-white min-h-[50vh] w-full mt-24 md:w-2/3 md:mx-auto md:mt-32">
      <h1 className="text-3xl font-bold text-primary text-center mb-8 md:mb-12 md:text-4xl">
        Form Pendaftaran
      </h1>
      <div className="bg-primary p-6 gap-6 md:rounded-lg md:mb-14">
        <ActivityProfileForm
          profileData={profileData.profile}
          provinces={provinceData}
          universities={universityData.data}
          mandatoryProfileData={
            activity.additional_config?.mandatory_profile_data
          }
          slug={params.slug}
        />
      </div>
    </main>
  );
}
