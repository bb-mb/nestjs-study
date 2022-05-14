import { Box } from "@chakra-ui/react";

export const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    height='100vh'
    backgroundColor={"teal.100"}
  >
    {children}
  </Box>
);
