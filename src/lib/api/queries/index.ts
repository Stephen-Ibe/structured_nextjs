import { TGetTodos, TGetUsers } from "@/lib/types";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
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

export const useGetAllPostsQuery = () =>
  useSuspenseQuery({
    queryFn: getAllPostsApi,
    queryKey: ["posts"],
  });
