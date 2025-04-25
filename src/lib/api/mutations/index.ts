import { useMutation } from "@tanstack/react-query";
import { createUserApi } from "../clients";

export const useCreateUserMutation = () =>
  useMutation({
    mutationFn: createUserApi,
    onSuccess(data) {
      console.log(data);
    },
  });
