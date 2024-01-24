import Image from 'next/image';
import { Button } from '@/components/common';
import placeholderImage from '@/assets/images/profile-image-placeholder.jpg';

export default function Kegiatan() {
  return (
    <div className="flex flex-col gap-6">
									<div className="flex justify-between items-center">
										<h1 className="font-bold text-xl mb-4">Daftar Kegiatan</h1>
										<form>
											<input
												type="text"
												placeholder="Cari kegiatan"
												className="p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30"
											/>
										</form>
									</div>
									<form>
										<select
											name="kegiatan"
											id="kegiatan"
											className="w-[15rem] p-2 border-2 border-primary/30 rounded-md focus:outline-none focus:border-primary"
										>
											<option value="semua">Semua</option>
										</select>
									</form>
									<div className="flex flex-col gap-6">
										<div className="p-4 flex justify-between gap-4 border border-primary rounded-lg">
											<div className="w-1/5">
												<Image src={placeholderImage} alt="Poster kegiatan" />
											</div>
											<div className="w-3/5 flex flex-col gap-3">
												<h2 className="font-bold text-md">
													Impactful Class (iClass) Public Speaking
												</h2>
												<p className="font-bold text-primary">
													Aktualisasi Diri
												</p>
												<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
												<div>
													<Button variant="secondary" type="button">
														Lihat Detail
													</Button>
												</div>
											</div>
											<div className="w-1/5 flex justify-end items-end">
												<p className=" text-yellow-400">Proses seleksi</p>
											</div>
										</div>
										<div className="p-4 flex justify-between gap-4 border border-primary rounded-lg">
											<div className="w-1/5">
												<Image src={placeholderImage} alt="Poster kegiatan" />
											</div>
											<div className="w-3/5 flex flex-col gap-3">
												<h2 className="font-bold text-md">
													Impactful Class (iClass) Public Speaking
												</h2>
												<p className="font-bold text-primary">
													Aktualisasi Diri
												</p>
												<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
												<div>
													<Button variant="secondary" type="button">
														Lihat Detail
													</Button>
												</div>
											</div>
											<div className="w-1/5 flex justify-end items-end">
												<p className=" text-yellow-400">Proses seleksi</p>
											</div>
										</div>
										<div className="p-4 flex justify-between gap-4 border border-primary rounded-lg">
											<div className="w-1/5">
												<Image src={placeholderImage} alt="Poster kegiatan" />
											</div>
											<div className="w-3/5 flex flex-col gap-3">
												<h2 className="font-bold text-md">
													Impactful Class (iClass) Public Speaking
												</h2>
												<p className="font-bold text-primary">
													Aktualisasi Diri
												</p>
												<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
												<div>
													<Button variant="secondary" type="button">
														Lihat Detail
													</Button>
												</div>
											</div>
											<div className="w-1/5 flex justify-end items-end">
												<p className=" text-yellow-400">Proses seleksi</p>
											</div>
										</div>
									</div>
								</div>
  );
};