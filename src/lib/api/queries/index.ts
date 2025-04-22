import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../clients";

export const useGetUsersQuery = () =>
  useQuery({
    queryFn: getUsersApi,
    queryKey: ["users"],
    staleTime: 5 * 1000,
  });
