import { Activity } from "../model/activity";
import { Pagination } from "./base";

export type GetActivitiesResp = {
  meta: Pagination;
  data: Activity[];
};

export type GetActivitiesReq = {
  per_page?: string;
  page?: string;
  search?: string;
};

export type GetActivityReq = {
  slug: string;
};

export type GetActivityResp = Activity;
