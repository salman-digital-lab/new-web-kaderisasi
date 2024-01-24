import Image from 'next/image';
import Link from 'next/link';
import LoginImage from '@/assets/images/login-illustration.png';
import LogoBMKA from '@/assets/images/logo-bmka-primary.png';
import Input from '@/components/form/Input';
import InputPassword from '@/components/form/InputPassword';
import Button from '@/components/common/Button';

export default function Login() {
	return (
		<main className="w-full lg:flex min-h-[100vh]">
			<section className="bg-primary lg:bg-white flex justify-center items-center lg:w-[55vw] p-10">
				<Image src={LoginImage} alt="Login illustration image" className="w-full md:h-[530px] md:w-auto" />
			</section>
			<section className="bg-white lg:bg-primary text-primary lg:text-white px-6 md:px-12 lg:px-20 pt-4 md:pt-10 pb-6 md:pb-12 lg:w-[45vw]">
				<div className="flex flex-col gap-4">
					<div className="flex items-end justify-between gap-4">
						<h1 className="font-bold text-lg md:text-4xl lg:text-2xl">
							Selamat Datang Kembali
						</h1>
						<Image src={LogoBMKA} alt="Logo BMKA image" className="md:h-[70px] md:w-auto lg:hidden" />
					</div>
          <form className="flex flex-col gap-2 pr-1">
            <div className="md:text-xl lg:text-base">
							{/* <Input name="email" label="Email" labelClasses="block font-bold mb-2" type="email" placeholder="Masukkan Email Anda" required={true} inputClasses="block border-2 border-primary focus:border-primary-400 focus:outline-none py-2 md:py-4 px-4 md:px-8 lg:px-4 w-full rounded-lg text-black" /> */}
              <label htmlFor="email" className="block font-bold mb-2">Email</label>
              <Input id="email" type="email" placeholder="Masukkan Email Anda" required classes="block border-2 border-primary focus:border-primary-400 focus:outline-none py-2 md:py-4 px-4 md:px-8 lg:px-4 w-full rounded-lg text-black" />
            </div>
            <div className="md:text-xl lg:text-base">
							{/* <Input name="password" label="Password" labelClasses="block font-bold mb-2" type="password" placeholder="Password" required={true} inputClasses="block border-2 border-primary focus:border-primary-400 focus:outline-none py-2 md:py-4 px-4 md:px-8 lg:px-4 w-full rounded-lg text-black" /> */}
              <label htmlFor="password" className="block font-bold mb-2">Password</label>
              <InputPassword id="password" placeholder="Password" classes="block border-2 border-primary focus:border-primary-400 focus:outline-none py-2 md:py-4 px-4 md:px-8 lg:px-4 w-full rounded-lg text-black" />
            </div>
            <div className="mt-4 md:text-xl lg:text-base">
              <Button variant="secondary" type="submit" className="text-center font-bold py-2 md:py-4 lg:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400 lg:border-2 lg:border-white">Masuk</Button>
            </div>
          </form>
          <p className="text-center mt-4 lg:mt-6 pr-1 md:text-xl lg:text-base">Belum Punya Akun? <Link href={'/register'} className="font-bold hover:text-primary-500 active:bg-primary-400">Daftar</Link></p>
				</div>
			</section>
		</main>
	);
}