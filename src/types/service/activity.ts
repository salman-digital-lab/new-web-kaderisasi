import { Activity } from "../model/Activity";
import { Pagination } from "./base";

export type GetActivitiesResp = {
  meta: Pagination;
  data: Activity[];
};
