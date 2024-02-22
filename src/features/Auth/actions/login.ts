"use server";

import { cookies } from "next/headers";

export default async function login(formData: FormData) {
  cookies().delete("kaderisasi-web-session");
  cookies().delete("kaderisasi-web-name");

  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BE_API + "/auth/login",
      {
        method: "POST",
        body: JSON.stringify(rawFormData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const parsedResponse = await response.json();

    if (response.ok) {
      cookies().set(
        "kaderisasi-web-session",
        parsedResponse?.data?.token?.token
      );
      cookies().set("kaderisasi-web-name", parsedResponse?.data?.data?.name);

      return parsedResponse?.message;
    } else {
      return (
        parsedResponse?.message ||
        "Sistem dalam gangguan. Silahkan mencoba kembali beberapa saat lagi."
      );
    }
  } catch (error: unknown) {
    let message: string;

    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Something when wrong";
    }

    return message;
  }
}
