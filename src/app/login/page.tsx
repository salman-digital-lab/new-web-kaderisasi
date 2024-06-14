import Image from "next/image";
import Link from "next/link";

import LoginImage from "@/assets/images/login-illustration.png";
import LogoLMDIFull from "@/assets/images/logo-full.png";

import LoginForm from "@/features/Auth/components/LoginForm";
import { Button } from "@/components/common";

export default function Login() {
  return (
    <main className="flex w-full h-dvh">
      <section className="bg-white hidden justify-center items-center w-[55vw] p-4 lg:flex">
        <Image
          src={LoginImage}
          alt="Login illustration image"
          className="md:w-auto"
          priority
        />
      </section>
      <section className="bg-white text-lmdi-primary h-full w-full px-5 flex flex-col justify-center gap-5 lg:bg-lmdi-primary lg:text-white lg:px-20 lg:w-[45vw]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <Image
              src={LogoLMDIFull}
              alt="Logo BMKA image"
              className="lg:hidden w-64 object-cover h-64"
            />
            <h1 className="font-bold hidden md:text-4xl lg:inline lg:text-4xl">
              Welcome Back
            </h1>
          </div>

          <LoginForm />

          <p className="text-center mt-4 lg:mt-6 pr-1 md:text-xl lg:text-base">
            Doesnt have an account?
            <Link
              href={"/register"}
              className="font-bold ml-1 hover:text-lmdi-primary-light active:bg-lmdi-primary-light"
            >
              Register here!
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
