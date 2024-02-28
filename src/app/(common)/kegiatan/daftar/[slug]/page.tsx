import ActivityForm from "@/features/Activities/components/ActivityForm";
import { getActivity } from "@/services/activity";

export default async function ActivityRegistration({
  params,
}: {
  params: { slug: string };
}) {
  const activity = await getActivity(params);

  return (
    <main className="bg-white min-h-[50vh] w-full mt-24 md:w-2/3 md:mx-auto md:mt-32">
      <h1 className="text-3xl font-bold text-primary text-center mb-8 md:mb-12 md:text-4xl">
        Form Pendaftaran
      </h1>
      <div className="bg-primary p-6 gap-6 md:rounded-lg md:mb-14">
        <ActivityForm formSchemas={activity.additional_questionnaire} />
      </div>
    </main>
  );
}
