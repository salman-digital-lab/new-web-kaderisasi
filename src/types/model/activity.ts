import { USER_LEVEL_ENUM } from "@/constants/biz";

export type Activity = {
  id: number;
  name: string;
  slug: string;
  description: string;
  activity_start: string;
  activity_end: string;
  registration_start: string;
  registration_end: string;
  selection_start: string;
  selection_end: string;
  minimum_role: USER_LEVEL_ENUM;
  additional_questionnaire: any;
  additional_config: any;
};
