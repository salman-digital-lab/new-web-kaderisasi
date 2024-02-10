import { Button } from "@/components/common";
import Select from "@/components/form/Select";
import { Input } from "@/components/form";

const DUMMY_OPTIONS = [
  { value: "data1", label: "Data 1" },
  { value: "data2", label: "Data 2" },
  { value: "data3", label: "Data 3" },
  { value: "data4", label: "Data 4" },
  { value: "data5", label: "Data 5" },
  { value: "data6", label: "Data 6" },
  { value: "data7", label: "Data 7" },
  { value: "data8", label: "Data 8" },
  { value: "data8", label: "Data 8" },
  { value: "data9", label: "Data 9" },
  { value: "data10", label: "Data 10" },
  { value: "data11", label: "Data 11" },
  { value: "data12", label: "Data 12" },
  { value: "data13", label: "Data 13" },
  { value: "data14", label: "Data 14" },
  { value: "data15", label: "Data 15" },
  { value: "data16", label: "Data 16" },
  { value: "data17", label: "Data 17" },
  { value: "data18", label: "Data 18" },
  { value: "data19", label: "Data 19" },
  { value: "data20", label: "Data 20" },
  { value: "data21", label: "Data 21" },
  { value: "data22", label: "Data 22" },
];

export default function Profil() {

  return (
    <>
      <h1 className="text-xl text-center font-bold mb-4 lg:text-left">
        Data Profil
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:justify-between lg:gap-32">
          <div className="flex flex-col gap-4 md:w-1/2">
            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Personal</legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="jenis-kelamin" className="font-bold">
                  Jenis Kelamin
                </label>
                <Select
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Data"
                  options={DUMMY_OPTIONS}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tanggal-lahir" className="font-bold">
                  Tanggal Lahir
                </label>
                <Input
                  type="date"
                  inputStyle="outlined-primary"
                  id="tanggal-lahir"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tempat-lahir" className="font-bold">
                  Tempat Lahir
                </label>
                <Input
                  inputStyle="outlined-primary"
                  type="text"
                  id="tempat-lahir"
                  placeholder="Tempat lahir"
                />
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Domisili</legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">
                  Provinsi
                </label>
                <Select
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Data"
                  options={DUMMY_OPTIONS}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">
                  Kota/Kabupaten
                </label>
                <Select
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Data"
                  options={DUMMY_OPTIONS}
                />
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            {/* Field kontak */}
            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">Kontak</legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold">
                  Alamat Email
                </label>
                <Input
                  type="email"
                  inputStyle="outlined-primary"
                  id="email"
                  placeholder="Masukkan alamat Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="whatsapp" className="font-bold">
                  WhatsApp
                </label>
                <Input
                  type="text"
                  inputStyle="outlined-primary"
                  id="whatsapp"
                  placeholder="Masukkan Nomor WhatsApp"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="id-line" className="font-bold">
                  ID Line
                </label>
                <Input
                  type="text"
                  inputStyle="outlined-primary"
                  id="id-line"
                  placeholder="Masukkan ID Line"
                />
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-3">
              <legend className="text-lg text-gray-500 mb-4">
                Data Kampus
              </legend>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">
                  Nama Kampus
                </label>
                <Select
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Data"
                  options={DUMMY_OPTIONS}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="jurusan" className="font-bold">
                  Jurusan
                </label>
                <Input
                  type="text"
                  inputStyle="outlined-primary"
                  id="jurusan"
                  placeholder="Masukkan Jurusan"
                />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="md:self-end mt-4">
          <Button variant="secondary" type="submit" className="w-full">
            Update Data Profil
          </Button>
        </div>
      </form>
    </>
  );
}
