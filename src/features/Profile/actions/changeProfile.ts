"use server";

import { putUpdate } from "@/services/profile";
import { Profile } from "@/types/model/user";
import { cookies } from "next/headers";

export default async function changeProfile(formData: FormData) {
  const token = cookies().get("kaderisasi-web-session");

  const data = {
    gender: formData.get("gender"),
  } as Profile;

  await putUpdate(token?.value || "", data);
}
