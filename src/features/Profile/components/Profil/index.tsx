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
                  Gender
                </label>
                <Select
                  id="gender"
                  name="gender"
                  inputStyle="outlined-primary"
                  placeholder="Enter your gender"
                  options={GENDER_OPTION}
                  defaultValue={GENDER_OPTION.find(
                    (option) => option.value === data?.profile.gender,
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="personal-id" className="font-bold">
                  Personal ID
                </label>
                <Input
                  id="personal-id"
                  name="personal_id"
                  type="text"
                  inputStyle="outlined-primary"
                  placeholder="Enter your personal id"
                  defaultValue={data?.profile.personal_id}
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Contact</legend>
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
                  placeholder="Enter your whatsapp number"
                  defaultValue={data?.profile.whatsapp}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="linkedin" className="font-bold">
                  Linkedin
                </label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="text"
                  inputStyle="outlined-primary"
                  placeholder="Enter your Linkedin profile"
                  defaultValue={data?.profile.linkedin}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tiktok" className="font-bold">
                  Tiktok
                </label>
                <Input
                  id="tiktok"
                  name="tiktok"
                  type="text"
                  inputStyle="outlined-primary"
                  placeholder="Enter your Tiktok profile"
                  defaultValue={data?.profile.tiktok}
                />
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Residence</legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="province_id" className="font-bold">
                  Province
                </label>
                <Select
                  id="province_id"
                  name="province_id"
                  inputStyle="outlined-primary"
                  placeholder="Enter your province"
                  options={provinces?.map((province) => ({
                    label: province.name,
                    value: province.id,
                  }))}
                  defaultValue={
                    data?.profile.province_id
                      ? {
                          value: data.profile.province_id,
                          label: provinces?.find(
                            (option) => option.id === data.profile.province_id,
                          )?.name,
                        }
                      : undefined
                  }
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">
                University Data
              </legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="university_id" className="font-bold">
                  University Name
                </label>
                <Select
                  id="university_id"
                  name="university_id"
                  inputStyle="outlined-primary"
                  placeholder="Enter your university name"
                  options={universities?.map((university) => ({
                    label: university.name,
                    value: university.id,
                  }))}
                  defaultValue={
                    data?.profile.university_id
                      ? {
                          value: data.profile.university_id,
                          label: universities?.find(
                            (option) => option.id === data.profile.province_id,
                          )?.name,
                        }
                      : undefined
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="major" className="font-bold">
                  Major
                </label>
                <Input
                  name="major"
                  type="text"
                  inputStyle="outlined-primary"
                  id="major"
                  placeholder="Enter your major"
                  defaultValue={data?.profile.major}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="intake_year" className="font-bold">
                  Intake Year
                </label>
                <Input
                  name="intake_year"
                  type="number"
                  inputStyle="outlined-primary"
                  id="intake_year"
                  placeholder="Enter your intake year"
                  defaultValue={data?.profile.intake_year}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="md:self-end mt-4">
          <SubmitButton variant="secondary" type="submit" className="w-full">
            Update Profile Data
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
