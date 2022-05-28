import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  title: string;
}

export const AuthHeader = ({ title }: Props) => {
  const router = useRouter();

  return (
    <Flex
      position='relative'
      alignItems='center'
      justifyContent='center'
      w='100%'
      paddingBottom={2}
    >
      <ChevronLeftIcon
        position='absolute'
        left={10}
        w={8}
        h={8}
        color='gray.400'
        cursor='pointer'
        onClick={router.back}
      />
      <Heading size='lg' margin={2}>
        {title}
      </Heading>
    </Flex>
  );
};
