"use server";

import { postRegisterActivity } from "@/services/activity";
import { QuestionnaireSchema } from "@/types/model/activity";
import { cookies } from "next/headers";

export default async function registerActivity(
  formData: FormData,
  questionnaires: QuestionnaireSchema[],
  slug: string,
) {
  const token = cookies().get("kaderisasi-web-session");

  const data = {} as any;

  questionnaires.map((questionnaire) => {
    data[questionnaire.name] = formData.get(questionnaire.name);
  });

  console.log(data)
  const response = await postRegisterActivity(token?.value || "", data, slug);

  return response;
}
