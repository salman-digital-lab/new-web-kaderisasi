import Image from "next/image";
import Link from "next/link";

import RegisterImage from "@/assets/images/register-1.webp";
import RegistrationForm from "@/features/Auth/components/RegistrationForm";

export default function Register() {
  return (
    <main className="flex w-full h-dvh">
      <section className="bg-white hidden justify-center items-center w-[55vw] p-4 lg:flex">
        <Image
          src={RegisterImage}
          alt="Register illustration image"
          className="md:w-auto"
          priority
        />
      </section>

      <section className="bg-white text-lmdi-primary h-full w-full px-5 flex flex-col justify-center gap-5 lg:bg-lmdi-primary lg:text-white lg:px-20 lg:w-[45vw]">
        <h1 className="font-bold text-2xl md:text-4xl">Registration Form</h1>
        <RegistrationForm />
        <p className="text-center mt-4 lg:mt-6 pr-1 md:text-xl lg:text-base">
          Already have an account?
          <Link
            href={"/login"}
            className="font-bold ml-1 hover:text-lmdi-primary-light active:bg-lmdi-primary-light"
          >
            Login Here!
          </Link>
        </p>
      </section>
    </main>
  );
}
