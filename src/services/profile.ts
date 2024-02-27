import { getProfileResp } from "@/types/service/user";

export const getProfile = async (token: string) => {
  console.log(token);
  const response = await fetch(process.env.NEXT_PUBLIC_BE_API + "/profiles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    cache: "no-store",
  });

  const { data: parsedResponse }: { data: getProfileResp } =
    await response.json();

  console.log(parsedResponse);

  return parsedResponse;
};
