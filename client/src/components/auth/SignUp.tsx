import { Button, Flex, Input } from "@chakra-ui/react";

import { AuthHeader } from "./AuthHeader";

export const SignUp = () => {
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
      <AuthHeader title='Sign Up' />

      <Input w={60} placeholder='email' />
      <Input w={60} type='password' placeholder='password' />

      <Flex w={60} marginTop={2} gap={4}>
        <Button as='a' flex={1} colorScheme='teal'>
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};
