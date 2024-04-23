import { CalendarClock } from "lucide-react";
import { Button } from "../../common";
import Image from "next/image";
import Link from "next/link";
import { USER_LEVEL_RENDER } from "@/constants/render/activity";
import { USER_LEVEL_ENUM } from "@/constants/enum/activity";
import dayjs from "dayjs";

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
          src="https://admin-api-kaderisasi.salmanitb.com/activity_pic/1704528106622.jpeg"
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
