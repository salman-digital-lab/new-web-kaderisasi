"use client";

import { Button } from "@/components/common";
import { Input } from "@/components/form";
import Select from "@/components/form/Select";
import { Footer, Navbar } from "@/components/layout";
import { useState } from "react";

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

export default function ActivityRegistration() {
  const [activeForm, setActiveForm] = useState(0);
  // min-h-[80vh] flex flex-col justify-center
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-[50vh] w-full mt-24 md:w-2/3 md:mx-auto md:mt-32">
        <h1 className="text-3xl font-bold text-primary text-center mb-8 md:mb-12 md:text-4xl">
          Form Pendaftaran
        </h1>
        <div className="bg-primary p-6 gap-6 md:rounded-lg md:mb-14">
          <form>
            <div
              className={`flex-col gap-6 ${
                activeForm === 0 ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="jenis-kelamin" className="text-white font-bold">
                  Jenis Kelamin
                </label>
                <Select
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Data"
                  options={DUMMY_OPTIONS}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tanggal-lahir" className="text-white font-bold">
                  Tanggal Lahir
                </label>
                <Input
                  type="date"
                  inputStyle="outlined-primary"
                  id="tanggal-lahir"
                />
              </div>
              <Button
                onClick={() => setActiveForm(1)}
                variant="secondary"
                type="button"
              >
                Lanjutkan
              </Button>
            </div>
            <div
              className={`flex-col gap-6 ${
                activeForm === 1 ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="jenis-kelamin" className="text-white font-bold">
                  Tuliskan motivasi anda
                </label>
                <Input
                  inputStyle="outlined-primary"
                  placeholder="Masukkan Data"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tanggal-lahir" className="text-white font-bold">
                  Kapan anda siap untuk hadir?
                </label>
                <Input
                  type="date"
                  inputStyle="outlined-primary"
                  id="tanggal-lahir"
                />
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setActiveForm(0)}
                  variant="secondary"
                  type="button"
                >
                  Kembali
                </Button>
                <Button
                  onClick={() => setActiveForm(2)}
                  variant="secondary"
                  type="button"
                >
                  Lanjutkan
                </Button>
              </div>
            </div>
            <div
              className={`flex-col gap-6 ${
                activeForm === 2 ? "flex" : "hidden"
              }`}
            >
              <div className="flex gap-2 items-baseline justify-center">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label className="text-white" htmlFor="vehicle1">
                  Saya sudah mengisi seluruh formulir dengan baik dan benar
                </label>
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setActiveForm(1)}
                  variant="transparant-secondary"
                  outlined
                  type="button"
                >
                  Kembali
                </Button>
                <Button variant="secondary" type="button">
                  Daftar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
