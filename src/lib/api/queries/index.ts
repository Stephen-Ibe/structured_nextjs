import { TGetTodos, TGetUsers } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllTodosApi, getUsersApi } from "../clients";

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
    // staleTime: 5 * 1000,
    enabled,
  });
