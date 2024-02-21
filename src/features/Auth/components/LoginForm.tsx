"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

import { Input } from "@/components/form";
import InputPassword from "@/components/form/InputPassword";
import SubmitButton from "@/components/form/SubmitButton";

export default function LoginForm() {
  const router = useRouter();

  const loginUser = async (formData: FormData) => {
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
        toast.success(parsedResponse?.message);
        Cookies.set(
          "kaderisasi-web-token",
          parsedResponse?.data?.token?.token,
          { expires: 7 }
        );
        router.push("/");
      } else {
        toast.error(
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

      toast.error(message);
    }
  };

  return (
    <form action={loginUser} className="flex flex-col gap-2 pr-1">
      <div className="md:text-xl lg:text-base">
        <label htmlFor="email" className="block font-bold mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Masukkan Email Anda"
          className="py-2 md:py-4 px-4 md:px-8 lg:px-4"
          required
        />
      </div>
      <div className="md:text-xl lg:text-base">
        <label htmlFor="password" className="block font-bold mb-2">
          Password
        </label>
        <InputPassword
          id="password"
          name="password"
          placeholder="Masukkan Kata Sandi"
          className="py-2 md:py-4 px-4 md:px-8 lg:px-4 md:border-0  focus:outline-primary-600 md:focus:outline-2"
          eyeClassname="md:bottom-[1rem]"
          required
        />
      </div>
      <div className="mt-4 md:text-xl lg:text-base">
        <SubmitButton
          variant="secondary"
          type="submit"
          className="text-center font-bold py-2 md:py-4 lg:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400 lg:border-2 lg:border-white"
        >
          Masuk
        </SubmitButton>
      </div>
    </form>
  );
}
