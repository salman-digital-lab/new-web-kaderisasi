"use client";

import { useRouter } from "next/navigation";

import { Input } from "@/components/form";
import InputPassword from "@/components/form/InputPassword";
import SubmitButton from "@/components/form/SubmitButton";
import login from "../actions/login";
import { NotifyUser } from "@/functions/notification";
import Link from "next/link";
import { Button } from "@/components/common";

export default function LoginForm() {
  const router = useRouter();

  const loginUser = async (formData: FormData) => {
    try {
      const resp = await login(formData);
      NotifyUser(resp.ok ? "SUCCESS" : "ERROR", resp.message);
      if (resp.ok) router.push("/");
    } catch (error) {
      if (error instanceof Error) NotifyUser("ERROR", error?.message);
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
          placeholder="Input Your Email"
          className="py-2 md:py-4 px-4 lg:border-0 focus:outline-primary-600 lg:focus:outline-2"
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
          placeholder="Input Your Password"
          className="py-2 md:py-4 px-4 lg:border-0 focus:outline-primary-600 lg:focus:outline-2"
          eyeClassname="md:bottom-[1rem]"
          required
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 md:text-xl lg:text-base">
        <SubmitButton
          variant="secondary"
          type="submit"
          className="text-center font-bold py-2 md:py-4 lg:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400 lg:border-2 lg:border-white"
        >
          Login
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
