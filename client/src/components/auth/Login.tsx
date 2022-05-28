import { Button, Flex, Input } from "@chakra-ui/react";
import Link from "next/link";

import { AuthHeader } from "./AuthHeader";

export const Login = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      padding={4}
      paddingY={12}
      width={350}
      gap={4}
      borderRadius={12}
      boxShadow='xl'
      backgroundColor={"white"}
    >
      <AuthHeader title='Welcome!' />

      <Input w={60} placeholder='id'></Input>
      <Input w={60} type='password' placeholder='password'></Input>

      <Flex w={60} marginTop={2} gap={4}>
        <Link href='/sign-up'>
          <Button flex={1} colorScheme='gray'>
            Sign up
          </Button>
        </Link>
        <Button flex={1} colorScheme='teal'>
          Login
        </Button>
      </Flex>
    </Flex>
  );
};
