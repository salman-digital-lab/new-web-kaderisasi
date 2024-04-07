import Image from "next/image";
import Link from "next/link";

import LoginImage from "@/assets/images/login-illustration.png";
import LogoBMKA from "@/assets/images/bmka-main.svg";

import LoginForm from "@/features/Auth/components/LoginForm";

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
      <section className="bg-white text-primary h-full w-full px-5 flex flex-col justify-center gap-5 lg:bg-primary lg:text-white lg:px-20 lg:w-[45vw]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={LogoBMKA}
              alt="Logo BMKA image"
              className="lg:hidden w-54"
            />
            <h1 className="font-bold text-lg md:text-4xl lg:text-2xl">
              Selamat Datang Kembali
            </h1>
          </div>

          <LoginForm />

          <p className="text-center mt-4 lg:mt-6 pr-1 md:text-xl lg:text-base">
            Belum Punya Akun?{" "}
            <Link
              href={"/daftar"}
              className="font-bold hover:text-primary-500 active:bg-primary-400"
            >
              Daftar
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
