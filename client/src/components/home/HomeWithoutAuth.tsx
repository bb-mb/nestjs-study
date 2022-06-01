import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const HomeWithoutAuth = () => {
  return (
    <>
      <p>로그인이 필요합니다.</p>
      <Link href='/login'>
        <Button>LogIn</Button>
      </Link>
      <Link href='/sign-up'>
        <Button>SignIn</Button>
      </Link>
    </>
  );
};
