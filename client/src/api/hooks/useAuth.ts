import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import { api } from "../api";
import { authRepository } from "../repository";

export const useAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: login } = useMutation(authRepository.login, {
    onSuccess: ({ data }) => {
      api.setAccessToken(data.accessToken);
      router.push("/");
      toast.success("로그인에 성공하였습니다.");
    },
  });

  const logout = useCallback(() => {
    api.deleteAccessToken();
    queryClient.invalidateQueries();
  }, []);

  return { login, logout };
};
