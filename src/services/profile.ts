import {
  getProfileActivityResp,
  getProfileResp,
  getProvincesResp,
  getUniversitiesResp,
  putProfileReq,
  putProfileResp,
} from "@/types/service/user";

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
    const { data: parsedResponse }: { data: getProfileResp } =
      await response.json();

    return parsedResponse;
  } else {
    throw new Error(String(response.statusText));
  }
};

export const putUpdate = async (token: string, data: putProfileReq) => {
  const response = await fetch(process.env.NEXT_PUBLIC_BE_API + "/profiles", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const parsedResponse = (await response.json()) as putProfileResp;

  if (response.ok) {
    return parsedResponse;
  } else {
    if (parsedResponse.message) throw new Error(String(parsedResponse.message));

    throw new Error(String(response.statusText));
  }
};

export const getProvinces = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_ADMIN_API + "/provinces",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (response.ok) {
    const { data: parsedResponse }: { data: getProvincesResp } =
      await response.json();

    return parsedResponse;
  } else {
    throw new Error(String(response.statusText));
  }
};

export const getUniversities = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_ADMIN_API + "/universities?per_page=5000",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (response.ok) {
    const { data: parsedResponse }: { data: getUniversitiesResp } =
      await response.json();

    return parsedResponse;
  } else {
    throw new Error(String(response.statusText));
  }
};

export const getProfileActivities = async (token: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_API + "/profiles/activities",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      cache: "no-store",
    },
  );

  if (response.ok) {
    const { data: parsedResponse }: { data: getProfileActivityResp } =
      await response.json();

    return parsedResponse;
  } else {
    throw new Error(String(response.statusText));
  }
};

export const getProfileActivity = async (token: string, slug: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BE_API + "/profiles/activities/" + slug,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      cache: "no-store",
    },
  );

  if (response.ok) {
    const { data: parsedResponse }: { data: { status: string } } =
      await response.json();

    return parsedResponse;
  } else {
    throw new Error(String(response.statusText));
  }
};
