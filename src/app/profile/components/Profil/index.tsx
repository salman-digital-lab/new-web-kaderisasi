import { Button } from '@/components/common';

export default function Profil() {
	return (
		<>
			<h1 className="text-xl text-center font-bold mb-4 lg:text-left">Data Profil</h1>
			<form className="flex flex-col gap-4">
				<div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:justify-between lg:gap-32">
					{/* Left section */}
					<div className="flex flex-col gap-4 md:w-1/2">
						{/* Fieldset personal */}
						<fieldset className="flex flex-col gap-3">
							<legend className="text-lg text-gray-500 mb-4">Personal</legend>
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
							<legend className="text-lg text-gray-500 mb-4">Domisili</legend>
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
					<div className="flex flex-col gap-4 md:w-1/2">
						{/* Field kontak */}
						<fieldset className="flex flex-col gap-3">
							<legend className="text-lg text-gray-500 mb-4">Kontak</legend>
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
				<div className="mt-4 md:self-end md:mt-0">
					<Button variant="secondary" type="submit" className="w-full">
						Update Data Profil
					</Button>
				</div>
			</form>
		</>
	);
}
