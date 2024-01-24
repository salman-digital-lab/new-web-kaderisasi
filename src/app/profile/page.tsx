'use client';

import Image from 'next/image';
import { Navbar } from '@/components/layout';
import { Button } from '@/components/common';
import { BukuAktivis } from './components';
import { Footer } from '@/components/layout';
import placeholderImage from '@/assets/images/profile-image-placeholder.jpg';

export default function Profile() {
	return (
		<>
			<Navbar />
			<main className="mt-[84px] min-h-full bg-white text-black py-16">
				<div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
					<div className="flex gap-8 justify-between">
						{/* Card */}
						<section className="w-1/3">
							<div className="w-80 h-[450px] shadow-lg rounded-lg relative">
								<div className="w-full h-[40%] bg-primary rounded-t-lg"></div>
								<div className="absolute top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border-8 border-white rounded-full">
									<Image
										src={placeholderImage}
										alt="Profile image"
										className="w-full h-full object-cover rounded-full"
									/>
								</div>
								<div className="w-full h-[60%] bg-white rounded-b-lg flex flex-col justify-center items-center gap-2">
									<h2 className="text-lg font-bold">Khabib Nurmagomedov</h2>
									<p className="text-md text-gray-500">Kader</p>
									<Button variant="secondary" className="mt-4">
										Ubah Foto Profil
									</Button>
								</div>
							</div>
						</section>
						{/* Card end */}
						{/* Detail */}
						<section className="w-2/3 px-4 flex flex-col gap-4">
							<div className="flex justify-start items-center gap-4 mb-8">
								<Button>Profil</Button>
								<Button>Kegiatan</Button>
								<Button>Buku Aktivis</Button>
							</div>
							<div>
								<BukuAktivis />
							</div>
						</section>
						{/* Detail end */}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
