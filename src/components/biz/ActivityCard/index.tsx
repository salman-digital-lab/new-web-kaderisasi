import Image from "next/image";
import { CalendarClock } from "lucide-react";
import dayjs from "dayjs";

import lmdiPoster from "../../../assets/images/lmdi_poster.png";

import { USER_LEVEL_ENUM } from "@/constants/enum/activity";

type ActivityCardProps = {
  activityName: string;
  registrationEnd: string;
  slug: string;
  minimumLevel: USER_LEVEL_ENUM;
};

export default function ActivityCard({
  activityName,
  registrationEnd,
  slug,
}: ActivityCardProps) {
  return (
    <div className="flex flex-col flex-none w-64 justify-between bg-white cursor-default rounded-xl shadow">
      <div className="flex flex-col p-2">
        <Image
          src={lmdiPoster}
          alt="Activity Banner"
          className="object-cover self-center rounded"
          width={230}
          height={288}
        />

        <div className="flex flex-col pt-2">
          <h5 className="font-bold w-60">{activityName}</h5>

          <p className="flex text-xs w-fit rounded-full py-1 pl-1 pr-2 bg-secondary text-white mt-5">
            <CalendarClock className="h-[.9rem]" />{" "}
            {dayjs(registrationEnd).format("DD MMMM YYYY")}
          </p>
        </div>
      </div>
      {/* <Link href={"/kegiatan/" + slug}>
        <Button
          variant="secondary"
          className="w-full rounded-none rounded-b-lg"
        >
          Detail
        </Button>
      </Link> */}
    </div>
  );
}
