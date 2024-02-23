import { ActivityCard } from "@/components/biz";
import { Button } from "@/components/common";
import { GetActivitiesResp } from "@/types/service/activity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function ActivitySection() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_API + "/activities?per_page=4",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data: parsedResponse }: { data: GetActivitiesResp } =
    await response.json();

  console.log(parsedResponse);

  return (
    <div className="flex flex-col gap-4 mt-12">
      <div className="flex flex-row-reverse">
        <Link href="/kegiatan">
          <Button className="flex ">
            Lihat semua <ArrowRight className="w-[1rem]" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center">
        {parsedResponse.data?.map((data) => (
          <ActivityCard
            key={data.id}
            activityName={data.name}
            registrationEnd={data.registration_end}
          />
        ))}
      </div>
    </div>
  );
}
