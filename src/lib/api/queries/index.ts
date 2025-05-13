import { PostsResponseType, TGetTodos, TGetUsers } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllPostsApi, getAllTodosApi, getUsersApi } from "../clients";

export const useGetUsersQuery = () =>
  useQuery<TGetUsers[]>({
    queryFn: getUsersApi,
    queryKey: ["users"],
    // staleTime: 5 * 1000,
  });

export const useGetAllTodosQuery = (enabled: boolean = true) =>
  useQuery<TGetTodos[]>({
    queryFn: getAllTodosApi,
    queryKey: ["todos"],
    enabled,
  });

export const useGetAllPostsQuery = <
  O extends { id?: number | string } | undefined = undefined
>(
  enabled: boolean = true,
  options?: O
) => {
  return useQuery<PostsResponseType<O>>({
    queryFn: async () => {
      const result = await getAllPostsApi(options?.id);
      if (result === undefined) {
        return (options?.id !== undefined ? {} : []) as PostsResponseType<O>;
      }
      return result as PostsResponseType<O>;
    },
    queryKey: ["posts", options?.id],
    enabled,
  });
};
