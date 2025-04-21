import { Client } from "@/lib/config";
import { TGetUsers } from "@/lib/types";

export const getUsersApi = async () => {
  return await Client.get<TGetUsers[]>("users");
};
