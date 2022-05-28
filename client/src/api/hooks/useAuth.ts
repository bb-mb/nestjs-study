import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";

import { authRepository } from "../repository";

export const useAuth = () => {
  const router = useRouter();

  const { mutate: login } = useMutation(authRepository.login, {
    onSuccess: ({ data }) => {
      router.push("/");
      toast.success("로그인에 성공하였습니다.");
    },
  });

  return { login };
};
