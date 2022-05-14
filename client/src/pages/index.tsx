import { Box } from "@chakra-ui/react";

import { Login } from "@/components/login";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box height={"full"}>
      <Login></Login>
    </Box>
  );
};

export default Home;
