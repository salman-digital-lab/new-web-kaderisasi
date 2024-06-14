"use client";

import { useState } from "react";
import { XCircle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Input } from "@/components/form";
import InputPassword from "@/components/form/InputPassword";
import SubmitButton from "@/components/form/SubmitButton";
import { NotifyUser } from "@/functions/notification";
import register from "../actions/register";
import Link from "next/link";
import { Button } from "@/components/common";

export default function RegistrationForm() {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const router = useRouter();

  const registerUser = async (formData: FormData) => {
    try {
      const resp = await register(formData);
      NotifyUser(resp.ok ? "SUCCESS" : "ERROR", resp.message);
      if (resp.ok) router.push("/login");
    } catch (error) {
      if (error instanceof Error) NotifyUser("ERROR", error?.message);
    }
  };

  return (
    <form action={registerUser} className="flex flex-col gap-2 pr-1">
      <div className="md:text-xl lg:text-base">
        <label htmlFor="fullname" className="block mb-2">
          Fullname
        </label>
        <Input
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Input Your Fullname"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 lg:border-0 focus:outline-lmdi-primary lg:focus:outline-2"
          required
        />
      </div>
      <div className="md:text-xl lg:text-base">
        <label htmlFor="email" className="block  mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Input Your Email"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 lg:border-0 focus:outline-lmdi-primary lg:focus:outline-2"
          required
        />
      </div>
      <div className="md:text-xl lg:text-base">
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <InputPassword
          id="password"
          name="password"
          placeholder="Input Your Password"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 lg:border-0  focus:outline-lmdi-primary md:focus:outline-2"
          eyeClassname="md:bottom-[1rem]"
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="md:text-xl lg:text-base">
        <label htmlFor="confirmedpassword" className="block mb-2">
          Password Confirmation
        </label>
        <InputPassword
          id="confirmedpassword"
          name="confirmedpassword"
          placeholder="Input Your Password Again"
          inputStyle="outlined-primary"
          className="py-2 md:py-4 px-4 lg:border-0  focus:outline-lmdi-primary md:focus:outline-2"
          eyeClassname="md:bottom-[1rem]"
          minLength={8}
          onChange={(e) => setIsPasswordCorrect(e.target.value !== password)}
          required
        />
        {isPasswordCorrect ? (
          <p className="text-red-500 flex py-1 gap-1">
            <XCircle /> Password must be same!
          </p>
        ) : undefined}
      </div>
      <div className="mt-4 flex flex-col gap-4 md:text-xl lg:text-base">
        <SubmitButton
          variant="secondary"
          type="submit"
          className="text-center font-bold py-2 md:py-4 lg:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400 lg:border-2 lg:border-white"
        >
          Register
        </SubmitButton>
        <Link href={"/"}>
          <Button className="text-center font-bold py-2 md:py-4 lg:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400 lg:border-2 lg:border-white">
            Back to Homepage
          </Button>
        </Link>
      </div>
    </form>
  );
}
