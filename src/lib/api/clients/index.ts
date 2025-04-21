import { Client } from "@/lib/config";

export const getUsersApi = async () => {
  return await Client.get("users");
};
