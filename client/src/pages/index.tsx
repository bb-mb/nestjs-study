import { Box } from "@chakra-ui/react";

import { Login } from "@/components/login";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      backgroundColor={"teal.100"}
    >
      <Login></Login>
    </Box>
  );
};

export default Home;
