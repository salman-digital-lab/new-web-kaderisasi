"use client";

import { useState } from "react";
import { XCircle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Input } from "@/components/form";
import InputPassword from "@/components/form/InputPassword";
import SubmitButton from "@/components/form/SubmitButton";

export default function RegistrationForm() {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const router = useRouter();

  const registerUser = async (formData: FormData) => {
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
        }
      );

      const parsedResponse = await response.json();

      if (response.ok) {
        toast.success(parsedResponse?.message);
        router.push("/masuk");
      } else {
        toast.error(parsedResponse?.message);
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
    <form action={registerUser} className="flex flex-col gap-2 pr-1">
      <div className="md:text-xl lg:text-base">
        <label htmlFor="fullname" className="block mb-2">
          Nama
        </label>
        <Input
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Isikan Nama Anda"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 md:px-8 lg:px-4 md:border-0 focus:outline-primary-600 md:focus:outline-2"
          required
        />
      </div>
      <div className="md:text-xl lg:text-base">
        <label htmlFor="email" className="block  mb-2">
          Alamat Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Masukkan Email Anda"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 md:px-8 lg:px-4 md:border-0 focus:outline-primary-600 md:focus:outline-2"
          required
        />
      </div>
      <div className="md:text-xl lg:text-base">
        <label htmlFor="password" className="block mb-2">
          Kata Sandi
        </label>
        <InputPassword
          id="password"
          name="password"
          placeholder="Kata Sandi"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 md:px-8 lg:px-4 md:border-0  focus:outline-primary-600 md:focus:outline-2"
          eyeClassname="md:bottom-[1rem]"
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="md:text-xl lg:text-base">
        <label htmlFor="confirmedpassword" className="block mb-2">
          Konfirmasi Kata Sandi
        </label>
        <InputPassword
          id="confirmedpassword"
          name="confirmedpassword"
          placeholder="Konfirmasi Kata Sandi"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 md:px-8 lg:px-4 md:border-0  focus:outline-primary-600 md:focus:outline-2"
          eyeClassname="md:bottom-[1rem]"
          minLength={8}
          onChange={(e) => setIsPasswordCorrect(e.target.value !== password)}
          required
        />
        {isPasswordCorrect ? (
          <p className="text-red-500 flex py-1 gap-1">
            <XCircle /> Konfirmasi kata sandi harus sama
          </p>
        ) : undefined}
      </div>
      <div className="mt-4 md:text-xl lg:text-base">
        <SubmitButton
          variant="secondary"
          type="submit"
          className="text-center font-bold py-2 md:py-4 lg:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400 lg:border-2 lg:border-white"
        >
          Daftar
        </SubmitButton>
      </div>
    </form>
  );
}
