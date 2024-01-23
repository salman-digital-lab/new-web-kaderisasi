'use client';

import Image from 'next/image';
import { Navbar } from '@/components/layout';
import { Footer } from '@/components/layout';
import placeholdeImage from '@/assets/images/profile-image-placeholder.jpg';

export default function Profile() {
	return (
		<>
			<Navbar />
			<main className="mt-[84px] min-h-full bg-white text-black py-16">
				<div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
					<div className="flex gap-8 justify-between">
						<section className="w-1/3">
								<div className="w-80 h-[400px] shadow-lg rounded-lg relative">
									<div className="w-full h-[50%] bg-primary rounded-t-lg"></div>
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border-8 border-white rounded-full">
                    <Image src={placeholdeImage} alt="Profile image" className="w-full h-full object-cover rounded-full" />
                  </div>
									<div className="w-full h-[50%] bg-white rounded-b-lg flex flex-col justify-center items-center gap-2">
                    <h2 className="text-lg font-bold">Khabib Nurmagomedov</h2>
                    <p className="text-md text-gray-500">Kader</p>
                  </div>
								</div>
						</section>
						<section className="w-2/3 border border-black">Keterangan</section>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
