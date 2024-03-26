"use server";

export default async function register(formData: FormData) {
  const rawFormData = {
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BE_API + "/auth/register",
      {
        method: "POST",
        body: JSON.stringify(rawFormData),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const parsedResponse = await response.json();

    if (response.ok) {
      return parsedResponse?.message;
    } else {
      throw new Error(
        parsedResponse?.message ||
          "Sistem dalam gangguan. Silahkan mencoba kembali beberapa saat lagi.",
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

    throw new Error(message);
  }
}
