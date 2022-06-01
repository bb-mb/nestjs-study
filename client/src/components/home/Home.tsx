import { Flex } from "@chakra-ui/react";

import { useUsersQuery } from "@/api";

import { HomeWithAuth } from "./HomeWithAuth";
import { HomeWithoutAuth } from "./HomeWithoutAuth";

export const Home = () => {
  const { data } = useUsersQuery();

  return (
    <Flex
      bgColor='white'
      direction='column'
      borderRadius={12}
      padding={20}
      gap={20}
    >
      {data.email ? <HomeWithAuth email={data.email} /> : <HomeWithoutAuth />}
    </Flex>
  );
};
