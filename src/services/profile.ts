import { getProfileResp } from "@/types/service/user";

export const getProfile = async (token: string) => {
  const response = await fetch(process.env.NEXT_PUBLIC_BE_API + "/profiles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    cache: "no-store",
  });

  if (response.ok) {
    console.log(response.status);

    const { data: parsedResponse }: { data: getProfileResp } =
      await response.json();

    console.log(parsedResponse);

    return parsedResponse;
  } else {
    throw new Error(String(response.status));
  }
};
