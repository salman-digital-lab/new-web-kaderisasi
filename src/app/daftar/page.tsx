import Image from "next/image";
import Link from "next/link";

import RegisterImage from "@/assets/images/register-1.webp";

import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";
import Button from "@/components/common/Button";

export default function Register() {
  return (
    <main className="flex w-full h-dvh">
      <section className="bg-white hidden justify-center items-center w-[55vw] p-4 lg:flex">
        <Image
          src={RegisterImage}
          alt="Register illustration image"
          className="md:w-auto"
        />
      </section>

      <section className="bg-white text-primary h-full w-full px-5 flex flex-col justify-center gap-5 lg:bg-primary lg:text-white lg:px-20 lg:w-[45vw]">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl">
          Daftarkan Diri Anda
        </h1>

        <form className="flex flex-col gap-2 pr-1">
          <div className="md:text-xl lg:text-base">
            <label htmlFor="nama" className="block mb-2">
              Nama
            </label>
            <Input
              id="nama"
              type="text"
              placeholder="Isikan Nama Anda"
              inputStyle="outlined-primary"
              className="md:border-0 focus:outline-primary-600 md:focus:outline-2"
              required
            />
          </div>
          <div className="md:text-xl lg:text-base">
            <label htmlFor="email" className="block  mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Masukkan Email Anda"
              inputStyle="outlined-primary"
              className="md:border-0 focus:outline-primary-600 md:focus:outline-2"
              required
            />
          </div>
          <div className="md:text-xl lg:text-base">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <InputPassword
              id="password"
              placeholder="Password"
              inputStyle="outlined-primary"
              className="md:border-0  focus:outline-primary-600 md:focus:outline-2"
            />
          </div>
          <div className="mt-4 md:text-xl lg:text-base">
            <Button
              variant="secondary"
              type="submit"
              className="text-center font-bold py-2 md:py-4 lg:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400 lg:border-2 lg:border-white"
            >
              Daftar
            </Button>
          </div>
        </form>
        <p className="text-center mt-4 lg:mt-6 pr-1 md:text-xl lg:text-base">
          Sudah Punya Akun?{" "}
          <Link
            href={"/login"}
            className="font-bold hover:text-primary-500 active:bg-primary-400"
          >
            Masuk
          </Link>
        </p>
      </section>
    </main>
  );
}
