import { TCreateUser } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { createUserApi } from "../clients";

export const useCreateUserMutation = () =>
  useMutation({
    mutationFn: (data: TCreateUser) => createUserApi(data),
    onSuccess: () => {},
  });
