import { ActivityCard } from "@/components/biz";
import { Button } from "@/components/common";
import { getActivities } from "@/services/activity";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import ActivityFilter from "./ActivityFilter";

export default async function ActivityList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const activities = await getActivities({ per_page: "8", ...searchParams });

  const currentSearchParamNext = new URLSearchParams(
    searchParams as Record<string, string>,
  );

  currentSearchParamNext.set(
    "page",
    String(Number(searchParams.page || 1) + 1),
  );

  const currentSearchParamPrev = new URLSearchParams(
    searchParams as Record<string, string>,
  );

  currentSearchParamPrev.set(
    "page",
    String(Number(searchParams.page || 1) - 1),
  );

  return (
    <>
      <ActivityFilter />

      <div className="w-full px-5 py-12 max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 md:px-6">
        {activities?.data.map((activity) => (
          <ActivityCard
            key={activity.id}
            activityName={activity.name}
            registrationEnd={activity.registration_end}
            slug={activity.slug}
            minimumLevel={activity.minimum_level}
          />
        ))}
      </div>

      <div className="w-full px-5 py-12 md:px-6 max-w-6xl mx-auto">
        <div className="flex justify-center gap-4">
          {activities?.meta.previous_page_url ? (
            <Link
              scroll={false}
              href={"/kegiatan?" + currentSearchParamPrev.toString()}
            >
              <Button variant="secondary" className="relative">
                <ChevronLeft className="absolute top-2 left-2" /> Sebelumnya
              </Button>
            </Link>
          ) : undefined}

          {activities?.meta.next_page_url ? (
            <Link
              scroll={false}
              href={"/kegiatan?" + currentSearchParamNext.toString()}
            >
              <Button variant="secondary" className="relative">
                Selanjutnya <ChevronRight className="absolute top-2 right-2" />
              </Button>
            </Link>
          ) : undefined}
        </div>
      </div>
    </>
  );
}
