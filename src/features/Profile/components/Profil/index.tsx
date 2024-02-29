"use client";

import { Button } from "@/components/common";
import Select from "@/components/form/Select";
import { Input } from "@/components/form";
import { Profile, Province, University, User } from "@/types/model/user";
import { GENDER_OPTION } from "@/constants/form/profile";

import changeProfile from "../../actions/changeProfile";

type ProfilProps = {
  data: {
    userData: User;
    profile: Profile;
  };
  provinces: Province[];
  universities: University[];
};

export default function Profil({ data, provinces, universities }: ProfilProps) {
  return (
    <>
      <h1 className="text-xl text-center font-bold mb-4 lg:text-left">
        Data Profil
      </h1>
      <form className="flex flex-col gap-4" action={changeProfile}>
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
                  defaultValue={data?.profile.gender}
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
                  type="text"
                  inputStyle="outlined-primary"
                  id="whatsapp"
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
                  defaultValue={data?.profile.university_id}
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
                <label htmlFor="major" className="font-bold">
                  Angkatan/Tahun Masuk
                </label>
                <Input
                  name="major"
                  type="number"
                  inputStyle="outlined-primary"
                  id="major"
                  placeholder="Masukkan Angkatan"
                  defaultValue={data?.profile.major}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="md:self-end mt-4">
          <Button variant="secondary" type="submit" className="w-full">
            Update Data Profil
          </Button>
        </div>
      </form>
    </>
  );
}
