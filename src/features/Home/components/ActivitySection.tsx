import { ActivityCard } from "@/components/biz";
import { Button } from "@/components/common";
import { getActivities } from "@/services/activity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function ActivitySection() {
  const { data: activities } = await getActivities({ per_page: "4" });

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
        {activities?.map((activity) => (
          <ActivityCard
            key={activity.id}
            activityName={activity.name}
            registrationEnd={activity.registration_end}
            slug={activity.slug}
          />
        ))}
      </div>
    </div>
  );
}
