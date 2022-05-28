import { ChangeEvent, useCallback, useState } from "react";

import { useUsersMutation } from "@/api";

export const useSignUp = () => {
  const { createUser } = useUsersMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const submit = () => {
    createUser({ email, password });
  };

  return {
    emailInputProps: {
      value: email,
      onChange: onEmailChange,
    },
    passwordInputProps: {
      value: password,
      onChange: onPasswordChange,
    },
    submit,
  };
};
