import {
  GetActivitiesReq,
  GetActivitiesResp,
  GetActivityReq,
  GetActivityResp,
} from "@/types/service/activity";

export const getActivities = async (props: GetActivitiesReq) => {
  const urlSearch = new URLSearchParams(props).toString();
  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_API + "/activities?" + urlSearch,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (response.ok) {
    const { data: parsedResponse }: { data: GetActivitiesResp } =
      await response.json();

    return parsedResponse;
  } else {
    if (response.status === 500) throw new Error("500, internal server error");
    throw new Error(String(response.status));
  }
};

export const getActivity = async (props: GetActivityReq) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_API + "/activities/" + props.slug,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const { data: parsedResponse }: { data: GetActivityResp } =
    await response.json();

  return parsedResponse;
};

export const postRegisterActivity = async (
  token: string,
  answer: Record<string, unknown>,
  slug: string
) => {
  const data = { questionnaire_answer: answer };

  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_API + `/activities/${slug}/register`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  const parsedResponse = await response.json();

  if (response.ok) {
    return parsedResponse;
  } else {
    if (parsedResponse.message) throw new Error(String(parsedResponse.message));

    throw new Error(String(response.statusText));
  }
};
