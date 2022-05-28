import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";

import { userRepository } from "../repository";

export const useUsersMutation = () => {
  const router = useRouter();
  const { mutate: createUser } = useMutation(userRepository.create, {
    onSuccess: () => {
      toast.success("회원가입에 성공하였습니다.");
      router.push("/login");
    },
    onError: () => {
      toast.error("회원가입에 실패하였습니다.");
    },
  });

  return { createUser };
};
