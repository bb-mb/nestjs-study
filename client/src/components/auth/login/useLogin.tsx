import { ChangeEvent, useCallback, useState } from "react";

import { useAuth } from "@/api";

export const useLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const submit = () => {
    login({ email, password });
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
