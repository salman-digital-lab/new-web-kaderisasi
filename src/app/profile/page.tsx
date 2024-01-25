'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout';
import { Button } from '@/components/common';
import { Profil, Kegiatan, BukuAktivis } from './components';
import { Footer } from '@/components/layout';
import placeholderImage from '@/assets/images/profile-image-placeholder.jpg';

export default function Profile() {
	const [section, setSection] = useState('profil');

	function switchSection(section: string) {
		setSection(section);
	}

	return (
		<>
			<Navbar />
			<main className="mt-[65px] pb-6 text-black bg-white lg:mt-[84px] lg:py-16">
				<div className="max-w-6xl lg:px-6 lg:mx-auto">
					<div className="flex flex-col justify-between gap-8 lg:flex-row">
						{/* Card */}
						<section className="lg:w-1/3">
							<div className="relative h-[270px] shadow-lg md:h-[350px] lg:w-80 lg:h-[450px]">
								<div className="h-[25%] bg-primary lg:h-[40%] lg:rounded-t-lg"></div>
								<div className="absolute top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border-8 border-white rounded-full">
									<Image
										src={placeholderImage}
										alt="Profile image"
										className="object-cover rounded-full"
									/>
								</div>
								<div className="flex flex-col justify-end items-center gap-2 h-[75%] pb-4 bg-white rounded-b-lg lg:justify-center lg:h-[60%] lg:pb-0">
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
						<section className="flex flex-col gap-4 px-4 lg:w-2/3">
							<div className="hidden lg:block">
								<div className="flex justify-center items-center gap-4 mb-8 lg:justify-start">
									<Button
										onClick={() => switchSection('profil')}
										variant={
											section === 'profil' ? 'primary' : 'transparant-primary'
										}
										className="hover:text-white"
										style={{ color: section !== 'profil' ? 'black' : '' }}
									>
										Profil
									</Button>
									<Button
										onClick={() => switchSection('kegiatan')}
										variant={
											section === 'kegiatan' ? 'primary' : 'transparant-primary'
										}
										style={{ color: section !== 'kegiatan' ? 'black' : '' }}
									>
										Kegiatan
									</Button>
									<Button
										onClick={() => switchSection('buku aktivis')}
										variant={
											section === 'buku aktivis'
												? 'primary'
												: 'transparant-primary'
										}
										style={{ color: section !== 'buku aktivis' ? 'black' : '' }}
									>
										Buku Aktivis
									</Button>
								</div>
							</div>
							<div className="lg:hidden">
								<div className="lg:none flex justify-center lg:justify-start items-center gap-4 mb-8">
									<Button
										onClick={() => switchSection('profil')}
										variant={
											section === 'profil' ? 'primary' : 'transparant-primary'
										}
										className={`px-2 bg-transparent border-t-0 border-x-0 border-b-4 rounded-none hover:bg-transparent md:px-8 ${
											section === 'profil'
												? 'border-primary'
												: 'border-gray-300'
										}`}
										style={{ color: 'black' }}
									>
										Profil
									</Button>
									<Button
										onClick={() => switchSection('kegiatan')}
										variant={
											section === 'kegiatan' ? 'primary' : 'transparant-primary'
										}
										className={`px-2 bg-transparent border-t-0 border-x-0 border-b-4 rounded-none hover:bg-transparent md:px-8 ${
											section === 'kegiatan'
												? 'border-primary'
												: 'border-gray-300'
										}`}
										style={{ color: 'black' }}
									>
										Kegiatan
									</Button>
									<Button
										onClick={() => switchSection('buku aktivis')}
										variant={
											section === 'buku aktivis'
												? 'primary'
												: 'transparant-primary'
										}
										className={`px-2 bg-transparent border-t-0 border-x-0 border-b-4 rounded-none hover:bg-transparent md:px-8 ${
											section === 'buku aktivis'
												? 'border-primary'
												: 'border-gray-300'
										}`}
										style={{ color: 'black' }}
									>
										Buku Aktivis
									</Button>
								</div>
							</div>
							<div>
								{section === 'profil' && <Profil />}
								{section === 'kegiatan' && <Kegiatan />}
								{section === 'buku aktivis' && <BukuAktivis />}
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
