import { Button } from "@chakra-ui/react";

import { useAuth } from "@/api";

interface Props {
  email: string;
}

export const HomeWithAuth = ({ email }: Props) => {
  const { logout } = useAuth();

  return (
    <>
      <p>{email}님 안녕하세요!</p>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};
