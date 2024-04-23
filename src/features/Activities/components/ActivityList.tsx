import { ActivityCard } from "@/components/biz";
import { getActivities } from "@/services/activity";

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
      <div className="w-full justify-items-center px-5 py-12 max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-6">
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
    </>
  );
}
