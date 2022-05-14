import { Box, Button, Flex, Heading, Input, Wrap } from "@chakra-ui/react";

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
      <Heading size='lg' margin={2}>
        Welcome!
      </Heading>

      <Input w={60} placeholder='id'></Input>
      <Input w={60} type='password' placeholder='password'></Input>

      <Flex w={60} marginTop={2} gap={4}>
        <Button flex={1} colorScheme='gray'>
          Sign up
        </Button>
        <Button flex={1} colorScheme='teal'>
          Login
        </Button>
      </Flex>
    </Flex>
  );
};
