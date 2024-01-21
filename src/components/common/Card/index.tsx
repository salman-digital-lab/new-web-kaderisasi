import { CalendarClock } from "lucide-react";
import { Button } from "..";

export default function Card() {
  return (
    <div className="flex flex-col justify-between bg-white cursor-default rounded-xl shadow">
      <div className="flex flex-col p-2">
        <img
          src="https://admin-api-kaderisasi.salmanitb.com/activity_pic/1704528106622.jpeg"
          alt="Activity Banner"
          className="w-full object-cover rounded"
          width={230}
          height={288}
        />

        <div className="flex flex-col pt-2">
          <h5 className="font-bold">Webinar Presentasi Ilmiah</h5>
          <p className="text-sm text-gray-500"> Minimun Kader</p>

          <p className="flex text-xs w-fit rounded-full py-1 pl-1 pr-2 bg-secondary text-white mt-5">
            <CalendarClock className="h-[.9rem]" /> 12/08/2023
          </p>
        </div>
      </div>
      <Button variant="secondary" className="rounded-b-lg">
        Daftar
      </Button>
    </div>
  );
}
