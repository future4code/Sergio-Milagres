export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type user = {
  id: string;
  email: string;
  name: string;
  nickname: string;
  password: string;
  role: USER_ROLES;
};
