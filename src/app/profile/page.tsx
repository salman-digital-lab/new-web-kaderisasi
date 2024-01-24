'use client';

import Image from 'next/image';
import { Navbar } from '@/components/layout';
import { Button } from '@/components/common';
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
								<h1 className="font-bold text-xl mb-4">Data Profil</h1>
								<form className="flex flex-col gap-4">
									<div className="flex justify-between align-top gap-32">
										{/* Left section */}
										<div className="w-1/2 flex flex-col gap-4">
											{/* Fieldset personal */}
											<fieldset className="flex flex-col gap-3">
												<legend className="text-lg text-gray-500 mb-4">
													Personal
												</legend>
												<div className="flex flex-col gap-2">
													<label className="font-bold">Jenis Kelamin</label>
													<div>
														<div className="flex items-center gap-3">
															<input
																type="radio"
																id="laki-laki"
																value="laki-laki"
																name="jenis_kelamin"
															/>
															<label htmlFor="laki-laki">Laki-laki</label>
														</div>
														<div className="flex items-center gap-3">
															<input
																type="radio"
																id="perempuan"
																value="perempuan"
																name="jenis_kelamin"
															/>
															<label htmlFor="perempuan">Perempuan</label>
														</div>
													</div>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="tanggal-lahir" className="font-bold">
														Tanggal Lahir
													</label>
													<input
														type="date"
														id="tanggal-lahir"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="tempat-lahir" className="font-bold">
														Tempat Lahir
													</label>
													<input
														type="text"
														id="tempat-lahir"
														placeholder="Tempat lahir"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
											</fieldset>
											{/* Fieldset personal end */}
											{/* Fieldset domisili */}
											<fieldset className="flex flex-col gap-3">
												<legend className="text-lg text-gray-500 mb-4">
													Domisili
												</legend>
												<div className="flex flex-col gap-2">
													<label htmlFor="" className="font-bold">
														Provinsi
													</label>
													<input
														type="text"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="" className="font-bold">
														Kota/Kabupaten
													</label>
													<input
														type="text"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="" className="font-bold">
														Kecamatan
													</label>
													<input
														type="text"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="" className="font-bold">
														Kelurahan/Desa
													</label>
													<input
														type="text"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="alamat" className="font-bold">
														Alamat
													</label>
													<textarea
														name="almat"
														id="alamat"
														rows={5}
														placeholder="Masukkan alamat lengkap"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													></textarea>
												</div>
											</fieldset>
											{/* Fieldset domisili end */}
										</div>
										{/* Left section end */}
										{/* Right section */}
										<div className="w-1/2 flex flex-col gap-4">
											{/* Field kontak */}
											<fieldset className="flex flex-col gap-3">
												<legend className="text-lg text-gray-500 mb-4">
													Kontak
												</legend>
												<div className="flex flex-col gap-2">
													<label htmlFor="email" className="font-bold">
														Alamat Email
													</label>
													<input
														type="email"
														id="email"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="whatsapp" className="font-bold">
														WhatsApp
													</label>
													<input
														type="text"
														id="whatsapp"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="id-line" className="font-bold">
														ID Line
													</label>
													<input
														type="text"
														id="id-line"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
											</fieldset>
											{/* Fieldset Kontak end */}
											{/* Fieldset Data kampus */}
											<fieldset className="flex flex-col gap-3">
												<legend className="text-lg text-gray-500 mb-4">
													Data Kampus
												</legend>
												<div className="flex flex-col gap-2">
													<label htmlFor="" className="font-bold">
														Nama Kampus
													</label>
													<input
														type="text"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="fakultas" className="font-bold">
														Fakultas
													</label>
													<input
														type="text"
														id="fakultas"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="jurusan" className="font-bold">
														Jurusan
													</label>
													<input
														type="text"
														id="jurusan"
														className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
													/>
												</div>
											</fieldset>
											{/* Fieldset Data kampus end */}
										</div>
										{/* Right section end */}
									</div>
									<div className="self-end">
										<Button variant="secondary">Update Data Profil</Button>
									</div>
								</form>
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
