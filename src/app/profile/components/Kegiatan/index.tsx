import Image from 'next/image';
import { Search, NotebookPen } from 'lucide-react'
import { Button } from '@/components/common';
import InputSelect from '../InputSelect';
import placeholderPosterKegiatan from '@/assets/images/poster-kegiatan-placeholder.jpeg';

export default function Kegiatan() {
	const dummyData = {
		kategori: 'kegiatan',
		options: [
			{value: 'semua', display: 'Semua'},
			{value: 'data1', display: 'Kategori 1'},
			{value: 'data2', display: 'Kategori 2'},
			{value: 'data3', display: 'Kategori 3'},
		]
	}
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col justify-between items-center md:flex-row">
				<h1 className="text-xl font-bold mb-4">Daftar Kegiatan</h1>
				<form className="relative self-start md:w-72">
					<input
						type="text"
						placeholder="Cari kegiatan..."
						className="w-full p-2 pl-8 border-2 border-primary rounded-md peer focus:pl-2 focus:outline-none focus:border-primary/30"
					/>
					<Search className="absolute top-1/2 left-2 -translate-y-1/2 text-primary peer-focus:hidden" />
				</form>
			</div>
			{/* <form> */}
				<InputSelect data={dummyData} className="w-[200px]" />
				{/* <select
					name="kegiatan"
					id="kegiatan"
					className="w-[15rem] p-2 border-2 border-primary/30 rounded-md focus:outline-none focus:border-primary"
				>
					<option value="semua">Semua</option>
				</select>
			</form> */}
			<div className="flex flex-col gap-6">
				<div className="flex flex-col justify-between gap-4 p-4 border border-primary rounded-lg md:flex-row">
					<div className="md:self-start md:w-1/4">
						<Image src={placeholderPosterKegiatan} alt="Poster kegiatan" className="w-full h-48 object-cover md:h-auto" />
					</div>
					<div className="flex flex-col gap-3 md:w-2/4">
						<h2 className="font-bold text-md">
							Impactful Class (iClass) Public Speaking
						</h2>
						<div className="flex justify-between items-center md:block">
							<p className="font-bold text-primary">Aktualisasi Diri</p>
							<p className="text-yellow-500 md:hidden"><NotebookPen className="mr-1 inline-block"/>Proses seleksi</p>
						</div>
						<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
						<div className="md:mt-6">
							<Button variant="secondary" type="button" className="w-full md:w-auto">
								Lihat Detail
							</Button>
						</div>
					</div>
					<div className="hidden md:flex md:justify-end md:items-end md:w-1/4">
						<p className="text-yellow-500"><NotebookPen className="mr-1 inline-block"/>Proses seleksi</p>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4 p-4 border border-primary rounded-lg md:flex-row">
					<div className="md:self-start md:w-1/4">
						<Image src={placeholderPosterKegiatan} alt="Poster kegiatan" className="w-full h-48 object-cover md:h-auto" />
					</div>
					<div className="flex flex-col gap-3 md:w-2/4">
						<h2 className="font-bold text-md">
							Impactful Class (iClass) Public Speaking
						</h2>
						<div className="flex justify-between items-center md:block">
							<p className="font-bold text-primary">Aktualisasi Diri</p>
							<p className="text-primary md:hidden"><NotebookPen className="mr-1 inline-block"/>Pendaftaran</p>
						</div>
						<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
						<div className="md:mt-6">
							<Button variant="secondary" type="button" className="w-full md:w-auto">
								Lihat Detail
							</Button>
						</div>
					</div>
					<div className="hidden md:flex md:justify-end md:items-end md:w-1/4">
						<p className="text-primary"><NotebookPen className="mr-1 inline-block"/>Pendaftaran</p>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4 p-4 border border-primary rounded-lg md:flex-row">
					<div className="md:self-start md:w-1/4">
						<Image src={placeholderPosterKegiatan} alt="Poster kegiatan" className="w-full h-48 object-cover md:h-auto" />
					</div>
					<div className="flex flex-col gap-3 md:w-2/4">
						<h2 className="font-bold text-md">
							Impactful Class (iClass) Public Speaking
						</h2>
						<div className="flex justify-between items-center md:block">
							<p className="font-bold text-primary">Aktualisasi Diri</p>
							<p className="text-green-500 md:hidden"><NotebookPen className="mr-1 inline-block"/>Pendaftaran</p>
						</div>
						<p className="text-sm text-gray-500">Tutup: 20 Februari 2024</p>
						<div className="md:mt-6">
							<Button variant="secondary" type="button" className="w-full md:w-auto">
								Lihat Detail
							</Button>
						</div>
					</div>
					<div className="hidden md:flex md:justify-end md:items-end md:w-1/4">
						<p className="text-green-500"><NotebookPen className="mr-1 inline-block"/>Pendaftaran</p>
					</div>
				</div>
			</div>
		</div>
	);
}
