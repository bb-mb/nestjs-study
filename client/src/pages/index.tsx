import Link from "next/link";

import { Flex } from "@chakra-ui/react";

import { useUsersQuery } from "@/api";

import type { NextPage } from "next";

const HomePage: NextPage = () => {
  const { data } = useUsersQuery();

  console.log(data);

  return (
    <Flex
      bgColor='white'
      direction='column'
      borderRadius={12}
      padding={20}
      gap={20}
    >
      <Link href='/login'>login</Link>
      <Link href='/sign-up'>sign-up</Link>
    </Flex>
  );
};

export default HomePage;
