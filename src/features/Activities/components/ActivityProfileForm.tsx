"use client";

import { Button } from "@/components/common";
import { Input } from "@/components/form";
import Select from "@/components/form/Select";
import SubmitButton from "@/components/form/SubmitButton";
import { GENDER_OPTION } from "@/constants/form/profile";
import changeProfile from "@/features/Profile/actions/changeProfile";
import { NotifyUser } from "@/functions/notification";
import { Profile, Province, University } from "@/types/model/user";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ActivityProfileFormProps = {
  profileData: Profile;
  mandatoryProfileData: string[];
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

  const changeUserProfile = async (formData: FormData) => {
    try {
      const respData = await changeProfile(formData);
      if (respData) {
        NotifyUser("SUCCESS", respData.message);
        router.push("/kegiatan/daftar/" + slug + "/kedua");
      }
    } catch (error) {
      if (error instanceof Error) NotifyUser("ERROR", error?.message);
    }
  };

  const RenderForm = (profileKey: string) => {
    switch (profileKey) {
      case "gender":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="jenis-kelamin" className="text-white font-bold">
              Gender
            </label>
            <Select
              required
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
              Personal ID
            </label>
            <Input
              required
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
              WhatsApp
            </label>
            <Input
              required
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
              Linkedin
            </label>
            <Input
              required
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
              ID Line
            </label>
            <Input
              required
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
              Tiktok
            </label>
            <Input
              required
              id="tiktok"
              name="tiktok"
              type="text"
              inputStyle="outlined-primary"
              placeholder="Enter your tiktok account"
              defaultValue={profileData?.tiktok}
            />
          </div>
        );

      case "province_id":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="province_id" className="text-white font-bold">
              Province
            </label>
            <Select
              required
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

      case "university":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="university_id" className="text-white font-bold">
              University Name
            </label>
            <Select
              required
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
              Major
            </label>
            <Input
              required
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
              Intake Year
            </label>
            <Input
              required
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
        {mandatoryProfileData.map((profileKey) => RenderForm(profileKey))}
        <div className="flex gap-4 justify-center">
          <SubmitButton variant="secondary" type="submit">
            Next
          </SubmitButton>
        </div>
      </div>
    </form>
  );
}
