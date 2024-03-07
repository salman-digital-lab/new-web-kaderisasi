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
              Jenis Kelamin
            </label>
            <Select
              required
              inputStyle="outlined-primary"
              placeholder="Masukkan Data"
              options={GENDER_OPTION}
              defaultValue={GENDER_OPTION.find(
                (option) => option.value === profileData?.gender
              )}
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
              placeholder="Masukkan ID Line"
              defaultValue={profileData?.line}
            />
          </div>
        );

      case "province":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="province_id" className="text-white font-bold">
              Provinsi
            </label>
            <Select
              required
              id="province_id"
              name="province_id"
              inputStyle="outlined-primary"
              placeholder="Masukkan Provinsi"
              options={provinces?.map((province) => ({
                label: province.name,
                value: province.id,
              }))}
              defaultValue={{
                value: profileData?.province_id,
                label: provinces?.find(
                  (option) => option.id === profileData?.province_id
                )?.name,
              }}
            />
          </div>
        );

      case "university":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="university_id" className="text-white font-bold">
              Nama Kampus
            </label>
            <Select
              required
              id="university_id"
              name="university_id"
              inputStyle="outlined-primary"
              placeholder="Masukkan Kampus"
              options={universities?.map((university) => ({
                label: university.name,
                value: university.id,
              }))}
              defaultValue={{
                value: profileData.university_id,
                label: universities?.find(
                  (option) => option.id === profileData.province_id
                )?.name,
              }}
            />
          </div>
        );

      case "major":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="major" className="text-white font-bold">
              Jurusan
            </label>
            <Input
              required
              name="major"
              type="text"
              inputStyle="outlined-primary"
              id="major"
              placeholder="Masukkan Jurusan"
              defaultValue={profileData?.major}
            />
          </div>
        );

      case "intake_year":
        return (
          <div key={profileKey} className="flex flex-col gap-2">
            <label htmlFor="intake_year" className="text-white font-bold">
              Angkatan/Tahun Masuk
            </label>
            <Input
              required
              name="intake_year"
              type="number"
              inputStyle="outlined-primary"
              id="intake_year"
              placeholder="Masukkan Angkatan"
              defaultValue={profileData?.intake_year}
            />
          </div>
        );

      default:
        return <div />;
    }
  };

  return (
    <form action={changeUserProfile}>
      <div className="flex-col gap-6 flex">
        {mandatoryProfileData.map((profileKey) => RenderForm(profileKey))}
        <div className="flex gap-4 justify-center">
          <Link className="w-fit" href={"/kegiatan/" + slug}>
            <Button variant="secondary" type="button">
              Kembali
            </Button>
          </Link>

          <SubmitButton variant="secondary" type="submit">
            Selanjutnya
          </SubmitButton>
        </div>
      </div>
    </form>
  );
}
