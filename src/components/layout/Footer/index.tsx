import React from "react";

import { MailIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-gray-800">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-4">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-8 flex-col">
              <div className="flex h-20 justify-center items-center">
                <p className="pb-2 text-white font-bold">Sosial Media</p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <InstagramIcon className="w-6 h-6 text-white" />
                  <p className="text-white text-sm">@interleadershipsummit</p>
                </div>
                <div className="flex items-center gap-6">
                  <MailIcon className="w-6 h-6 text-white" />
                  <p className="text-white text-sm">
                    interleadershipsummit@salmanitb.com
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <LinkedinIcon className="w-6 h-6 text-white" />
                  <p className="text-white text-sm">+62 821 1128 6037</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 flex-col">
            <div className="flex gap-8 flex-col">
              <div className="flex h-20 justify-center items-center">
                <p className="pb-2 text-white font-bold">Alamat</p>
              </div>
              <div className="sm:max-w-xs">
                <p className="text-white text-sm text-justify">
                  Jl. Ganesa No.7, Lb. Siliwangi, Kecamatan Coblong, Kota
                  Bandung, Jawa Barat 40132
                </p>
              </div>
            </div>
          </div>

          <div className="md:max-w-sm flex items-end">
            <p className="mt-4 text-white text-xs font-bold">
              © Copyright BMKA Salman ITB 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
