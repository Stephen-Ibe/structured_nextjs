import { Client } from "@/lib/config";
import { TCreateUser, TGetUsers } from "@/lib/types";

export const getUsersApi = async () => {
  return await Client.get<TGetUsers[]>("users");
};

export const createUserApi = async (user: TCreateUser) => {
  return await Client.post("users", user);
};
