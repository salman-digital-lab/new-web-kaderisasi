"use server";

import { putUpdate } from "@/services/profile";
import { Profile } from "@/types/model/user";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function changeProfile(formData: FormData) {
  const token = cookies().get("kaderisasi-web-session");

  const data = {
    gender: formData.get("gender"),
    whatsapp: formData.get("whatsapp"),
    line: formData.get("line"),
    province_id: formData.get("province_id"),
    university_id: formData.get("university_id"),
    university_temp: formData.get("university_temp"),
    major: formData.get("major"),
    intake_year: formData.get("intake_year"),
    personal_id: formData.get("personal_id"),
    linkedin: formData.get("linkedin"),
    tiktok: formData.get("tiktok"),
  } as unknown as Profile;

  try {
    const response = await putUpdate(token?.value || "", data);

    revalidatePath("/anggota/profil");

    return { ok: true, message: response.message };
  } catch (error) {
    if (typeof error === "string") return { ok: false, message: error };
    return { ok: false, message: "GENERAL ERROR" };
  }
}
