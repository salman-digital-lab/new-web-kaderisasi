import Image from 'next/image';
import { Search, NotebookPen } from 'lucide-react'
import { Button } from '@/components/common';
import placeholderPosterKegiatan from '@/assets/images/poster-kegiatan-placeholder.jpeg';

export default function Kegiatan() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<h1 className="font-bold text-xl mb-4">Daftar Kegiatan</h1>
				<form className="relative self-start md:w-72">
					<input
						type="text"
						placeholder="Cari kegiatan..."
						className="w-full p-2 pl-8 focus:pl-2 border-2 border-primary rounded-md peer focus:outline-none focus:border-primary/30"
					/>
					<Search className="absolute top-1/2 left-2 -translate-y-1/2 text-primary peer-focus:hidden" />
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
				<div className="p-4 flex flex-col md:flex-row justify-between gap-4 border border-primary rounded-lg">
					<div className="md:w-1/4 md:self-start">
						<Image src={placeholderPosterKegiatan} alt="Poster kegiatan" className="w-full h-48 md:h-auto object-cover" />
					</div>
					<div className="md:w-2/4 flex flex-col gap-3">
						<h2 className="font-bold text-md">
							Impactful Class (iClass) Public Speaking
						</h2>
						<div className="flex justify-between items-center md:block">
							<p className="font-bold text-primary">Aktualisasi Diri</p>
							<p className="md:hidden text-yellow-500"><NotebookPen className="mr-1 inline-block"/>Proses seleksi</p>
						</div>
						<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
						<div>
							<Button variant="secondary" type="button" className="w-full md:w-auto">
								Lihat Detail
							</Button>
						</div>
					</div>
					<div className="hidden md:w-1/4 md:flex md:justify-end md:items-end">
						<p className="text-yellow-500"><NotebookPen className="mr-1 inline-block"/>Proses seleksi</p>
					</div>
				</div>
				<div className="p-4 flex flex-col md:flex-row justify-between gap-4 border border-primary rounded-lg">
					<div className="md:w-1/4 md:self-start">
						<Image src={placeholderPosterKegiatan} alt="Poster kegiatan" className="w-full h-48 md:h-auto object-cover" />
					</div>
					<div className="md:w-2/4 flex flex-col gap-3">
						<h2 className="font-bold text-md">
							Impactful Class (iClass) Public Speaking
						</h2>
						<div className="flex justify-between items-center md:block">
							<p className="font-bold text-primary">Aktualisasi Diri</p>
							<p className="md:hidden text-primary"><NotebookPen className="mr-1 inline-block"/>Pendaftaran</p>
						</div>
						<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
						<div>
							<Button variant="secondary" type="button" className="w-full md:w-auto">
								Lihat Detail
							</Button>
						</div>
					</div>
					<div className="hidden md:w-1/4 md:flex md:justify-end md:items-end">
						<p className="text-primary"><NotebookPen className="mr-1 inline-block"/>Pendaftaran</p>
					</div>
				</div>
				<div className="p-4 flex flex-col md:flex-row justify-between gap-4 border border-primary rounded-lg">
					<div className="md:w-1/4 md:self-start">
						<Image src={placeholderPosterKegiatan} alt="Poster kegiatan" className="w-full h-48 md:h-auto object-cover" />
					</div>
					<div className="md:w-2/4 flex flex-col gap-3">
						<h2 className="font-bold text-md">
							Impactful Class (iClass) Public Speaking
						</h2>
						<div className="flex justify-between items-center md:block">
							<p className="font-bold text-primary">Aktualisasi Diri</p>
							<p className="md:hidden text-green-500"><NotebookPen className="mr-1 inline-block"/>Selesai</p>
						</div>
						<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
						<div>
							<Button variant="secondary" type="button" className="w-full md:w-auto">
								Lihat Detail
							</Button>
						</div>
					</div>
					<div className="hidden md:w-1/4 md:flex md:justify-end md:items-end">
						<p className="text-green-500"><NotebookPen className="mr-1 inline-block"/>Selesai</p>
					</div>
				</div>
			</div>
		</div>
	);
}
