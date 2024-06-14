"use client";

import { Input } from "@/components/form";
import Select from "@/components/form/Select";
import SubmitButton from "@/components/form/SubmitButton";
import { GENDER_OPTION } from "@/constants/form/profile";
import changeProfile from "@/features/Profile/actions/changeProfile";
import { NotifyUser } from "@/functions/notification";
import { Profile, Province, University } from "@/types/model/user";
import { useRouter } from "next/navigation";

type ActivityProfileFormProps = {
  profileData: Profile;
  mandatoryProfileData: { name: string; required: boolean }[];
  provinces: Province[];
  universities: University[];
  slug: string;
};

export default function ActivityForm({
  profileData,
  provinces,
  universities,
  mandatoryProfileData,
  slug,
}: ActivityProfileFormProps) {
  const router = useRouter();
  console.log(profileData);

  const changeUserProfile = async (formData: FormData) => {
    try {
      const respData = await changeProfile(formData);
      if (respData?.ok) {
        NotifyUser("SUCCESS", respData.message);
        router.push("/program/register/" + slug + "/second");
      } else {
        NotifyUser("ERROR", respData.message);
      }
    } catch (error) {
      if (error instanceof Error) NotifyUser("ERROR", error?.message);
    }
  };

  const RenderForm = (profileKey: string, isRequired: boolean) => {
    switch (profileKey) {
      case "gender":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="gender" className="text-white font-bold">
              Gender {isRequired ? "*" : ""}
            </label>
            <Select
              required={isRequired}
              id="gender"
              name="gender"
              inputStyle="outlined-primary"
              placeholder="Enter your gender"
              options={GENDER_OPTION}
              defaultValue={GENDER_OPTION.find(
                (option) => option.value === profileData?.gender,
              )}
            />
          </div>
        );

      case "personal_id":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="personal-id" className="text-white font-bold">
              Personal ID (NIK) {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              id="personal-id"
              name="personal_id"
              type="text"
              inputStyle="outlined-primary"
              placeholder="Enter your personal id"
              defaultValue={profileData?.personal_id}
            />
          </div>
        );

      case "whatsapp":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="whatsapp" className="text-white font-bold">
              WhatsApp {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              name="whatsapp"
              type="text"
              inputStyle="outlined-primary"
              id="whatsapp"
              pattern="^[0-9]*$"
              placeholder="Masukkan Nomor WhatsApp"
              defaultValue={profileData?.whatsapp}
            />
          </div>
        );
      case "linkedin":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="linkedid" className="text-white font-bold">
              Linkedin {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              name="linkedin"
              type="text"
              inputStyle="outlined-primary"
              id="linkedin"
              placeholder="Enter your linkedin profile"
              defaultValue={profileData?.linkedin}
            />
          </div>
        );

      case "line":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="id-line" className="text-white font-bold">
              ID Line {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              id="id-line"
              name="line"
              type="text"
              inputStyle="outlined-primary"
              placeholder="Enter your line id"
              defaultValue={profileData?.line}
            />
          </div>
        );

      case "tiktok":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="tiktok" className="text-white font-bold">
              Tiktok {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              id="tiktok"
              name="tiktok"
              type="text"
              inputStyle="outlined-primary"
              placeholder="Enter your tiktok account"
              defaultValue={profileData?.tiktok}
            />
          </div>
        );

      case "university_temp":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="university_temp" className="text-white font-bold">
              University {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              id="university_temp"
              name="university_temp"
              type="text"
              inputStyle="outlined-primary"
              placeholder="Enter your university name"
              defaultValue={profileData?.university_temp}
            />
          </div>
        );

      case "province_id":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="province_id" className="text-white font-bold">
              Province {isRequired ? "*" : ""}
            </label>
            <Select
              required={isRequired}
              id="province_id"
              name="province_id"
              inputStyle="outlined-primary"
              placeholder="Enter your province"
              options={provinces?.map((province) => ({
                label: province.name,
                value: province.id,
              }))}
              defaultValue={
                profileData?.province_id
                  ? {
                      value: profileData?.province_id,
                      label: provinces?.find(
                        (option) => option.id === profileData?.province_id,
                      )?.name,
                    }
                  : undefined
              }
            />
          </div>
        );

      case "university_id":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="university_id" className="text-white font-bold">
              University Name {isRequired ? "*" : ""}
            </label>
            <Select
              required={isRequired}
              id="university_id"
              name="university_id"
              inputStyle="outlined-primary"
              placeholder="Enter your university name"
              options={universities?.map((university) => ({
                label: university.name,
                value: university.id,
              }))}
              defaultValue={
                profileData.university_id
                  ? {
                      value: profileData.university_id,
                      label: universities?.find(
                        (option) => option.id === profileData.province_id,
                      )?.name,
                    }
                  : undefined
              }
            />
          </div>
        );

      case "major":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="major" className="text-white font-bold">
              Major {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              name="major"
              type="text"
              inputStyle="outlined-primary"
              id="major"
              placeholder="Enter your major"
              defaultValue={profileData?.major}
            />
          </div>
        );

      case "intake_year":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="intake_year" className="text-white font-bold">
              Intake Year {isRequired ? "*" : ""}
            </label>
            <Input
              required={isRequired}
              name="intake_year"
              type="number"
              inputStyle="outlined-primary"
              id="intake_year"
              placeholder="Enter your intake year"
              defaultValue={profileData?.intake_year}
            />
          </div>
        );

      default:
        return <div key={profileKey} />;
    }
  };

  return (
    <form action={changeUserProfile}>
      <div className="flex-col gap-6 flex">
        {mandatoryProfileData.map(
          ({ name: profileKey, required: isRequired }) =>
            RenderForm(profileKey, isRequired),
        )}
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-white text-sm">* Required data</p>
          <SubmitButton variant="secondary" type="submit">
            Next
          </SubmitButton>
        </div>
      </div>
    </form>
  );
}
