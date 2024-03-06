"use client";

import Select from "@/components/form/Select";
import { Input } from "@/components/form";
import SubmitButton from "@/components/form/SubmitButton";
import { Profile, Province, University, User } from "@/types/model/user";
import { GENDER_OPTION } from "@/constants/form/profile";

import changeProfile from "../../actions/changeProfile";
import { toast } from "sonner";

type ProfilProps = {
  data: {
    userData: User;
    profile: Profile;
  };
  provinces: Province[];
  universities: University[];
};

export default function Profil({ data, provinces, universities }: ProfilProps) {
  const changeUserProfile = async (formData: FormData) => {
    try {
      const respData = await changeProfile(formData);
      if (respData) toast(respData.message);
    } catch (error) {
      if (error instanceof Error) toast.error(error?.message);
    }
  };

  console.log(data.profile);
  return (
    <>
      <h1 className="text-xl text-center font-bold mb-4 lg:text-left">
        Data Profil
      </h1>
      <form className="flex flex-col gap-4" action={changeUserProfile}>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:justify-between lg:gap-32">
          <div className="flex flex-col gap-4 md:w-1/2">
            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Personal</legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className="font-bold">
                  Jenis Kelamin
                </label>
                <Select
                  id="gender"
                  name="gender"
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Jenis Kelamin"
                  options={GENDER_OPTION}
                  defaultValue={GENDER_OPTION.find(
                    (option) => option.value === data?.profile.gender
                  )}
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Kontak</legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold">
                  Alamat Email
                </label>
                <Input
                  type="email"
                  inputStyle="outlined-primary"
                  id="email"
                  placeholder="Masukkan alamat Email"
                  defaultValue={data?.userData.email}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="whatsapp" className="font-bold">
                  WhatsApp
                </label>
                <Input
                  required
                  name="whatsapp"
                  type="tel"
                  inputStyle="outlined-primary"
                  id="whatsapp"
                  pattern="^[0-9]*$"
                  placeholder="Masukkan Nomor WhatsApp"
                  defaultValue={data?.profile.whatsapp}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="id-line" className="font-bold">
                  ID Line
                </label>
                <Input
                  id="id-line"
                  name="line"
                  type="text"
                  inputStyle="outlined-primary"
                  placeholder="Masukkan ID Line"
                  defaultValue={data?.profile.line}
                />
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Domisili</legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="province_id" className="font-bold">
                  Provinsi
                </label>
                <Select
                  id="province_id"
                  name="province_id"
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Provinsi"
                  options={provinces?.map((province) => ({
                    label: province.name,
                    value: province.id,
                  }))}
                  defaultValue={{
                    value: data?.profile.province_id,
                    label: provinces?.find(
                      (option) => option.id === data?.profile.province_id
                    )?.name,
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="city_id" className="font-bold">
                  Kota/Kabupaten
                </label>
                <Select
                  id="city_id"
                  name="city_id"
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Kota"
                  isDisabled
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">
                Data Kampus
              </legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="university_id" className="font-bold">
                  Nama Kampus
                </label>
                <Select
                  id="university_id"
                  name="university_id"
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Kampus"
                  options={universities?.map((university) => ({
                    label: university.name,
                    value: university.id,
                  }))}
                  defaultValue={{
                    value: data?.profile.university_id,
                    label: universities?.find(
                      (option) => option.id === data?.profile.province_id
                    )?.name,
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="major" className="font-bold">
                  Jurusan
                </label>
                <Input
                  name="major"
                  type="text"
                  inputStyle="outlined-primary"
                  id="major"
                  placeholder="Masukkan Jurusan"
                  defaultValue={data?.profile.major}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="intake_year" className="font-bold">
                  Angkatan/Tahun Masuk
                </label>
                <Input
                  name="intake_year"
                  type="number"
                  inputStyle="outlined-primary"
                  id="intake_year"
                  placeholder="Masukkan Angkatan"
                  defaultValue={data?.profile.intake_year}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="md:self-end mt-4">
          <SubmitButton variant="secondary" type="submit" className="w-full">
            Update Data Profil
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
