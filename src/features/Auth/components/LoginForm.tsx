"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

import { Input } from "@/components/form";
import InputPassword from "@/components/form/InputPassword";
import SubmitButton from "@/components/form/SubmitButton";
import login from "../actions/login";

export default function LoginForm() {
  const router = useRouter();

  const loginUser = async (formData: FormData) => {
    const message = await login(formData);
    if (message) toast(message);
    router.push("/");
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
          className="py-2 md:py-4 px-4 md:px-8 lg:px-4 md:border-0 focus:outline-primary-600 md:focus:outline-2"
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
