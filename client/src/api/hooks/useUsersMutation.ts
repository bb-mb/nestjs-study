import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { userRepository } from "../repository";

export const useUserMutation = () => {
  const router = useRouter();
  const { mutate: createUser } = useMutation(userRepository.create, {
    onSuccess: () => {
      router.push("/login");
    },
  });

  return { createUser };
};
