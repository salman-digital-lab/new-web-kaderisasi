"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout() {
  cookies().delete("kaderisasi-web-session");
  cookies().delete("kaderisasi-web-name");
  redirect(`/`);
}
