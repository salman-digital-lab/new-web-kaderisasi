import Image from 'next/image';
import Link from 'next/link';
import LoginImage from '@/assets/images/login-illustration.png';
import LogoBMKA from '@/assets/images/logo-bmka-primary.png';
import Button from '@/components/common/Button';

export default function Login() {
	return (
		<div className="">
			<section className="bg-primary flex justify-center items-center lg:w-[70vh]">
				<Image src={LoginImage} alt="Login illustration image" className="md:h-[530px] md:w-auto" />
			</section>
			<section className="bg-white px-6 md:px-12 pt-4 md:pt-10 pb-6 md:pb-12 lg:w-[30vh]">
				<div className="flex flex-col gap-4">
					<div className="flex items-end justify-between gap-4">
						<h1 className="text-primary font-bold md:text-4xl">
							Selamat Datang Kembali
						</h1>
						<Image src={LogoBMKA} alt="Logo BMKA image" className="md:h-[70px] md:w-auto lg:hidden" />
					</div>
          <form className="flex flex-col gap-2 pr-1">
            <div>
              <label htmlFor="email" className="block text-primary md:text-xl font-bold mb-2">Email</label>
              <input id="email" type="email" placeholder="Masukkan Email Anda" required className="block border-2 border-primary focus:border-primary-400 focus:outline-none py-2 md:py-4 px-4 md:px-8 md:text-xl w-full rounded-lg text-black" />
            </div>
            <div>
              <label htmlFor="password" className="block text-primary md:text-xl font-bold mb-2">Password</label>
              <input id="password" type="password" placeholder="Password" required className="block border-2 border-primary focus:border-primary-400 focus:outline-none py-2 md:py-4 px-4 md:px-8 md:text-xl w-full rounded-lg text-black" />
            </div>
            <div className="mt-4">
              <Button variant="secondary" type="submit" className="text-center md:text-xl py-2 md:py-4 w-full hover:bg-secondary-500 active:bg-secondary-400">Masuk</Button>
            </div>
          </form>
          <p className="text-primary text-center my-4 pr-1 md:text-xl">Belum Punya Akun? <Link href={'/register'} className="font-bold hover:text-primary-500 active:bg-primary-400">Daftar</Link></p>
				</div>
			</section>
		</div>
	);
}
