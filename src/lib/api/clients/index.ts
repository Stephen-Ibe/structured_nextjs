import { Client } from "@/lib/config";
import { TCreateUser, TGetPosts, TGetTodos, TGetUsers } from "@/lib/types";

export const getUsersApi = async () => {
  return await Client.get<TGetUsers[]>("users");
};

export const createUserApi = async (user: TCreateUser) => {
  return await Client.post("users", user);
};

export const getAllTodosApi = async () => {
  return await Client.get<TGetTodos[]>("todos");
};

export const getAllPostsApi = async () => {
  return await Client.get<TGetPosts[]>("posts");
};
