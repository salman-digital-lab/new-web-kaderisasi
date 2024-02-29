import { Profile, Province, University, User } from "../model/user";
import { Pagination } from "./base";

export type getProfileResp = {
  userData: User;
  profile: Profile;
};

export type getProvincesResp = Province[];

export type getUniversitiesResp = {
  meta: Pagination;
  data: University[];
};

export type putProfileReq = Partial<Profile>;
