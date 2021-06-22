export type AuthenticationData = {
  id: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type signupInputDTO = {
  name: string;
  email: string;
  password: string;
};

export type Friendship = {
  id_friend1: string;
  id_friend2: string;
};
