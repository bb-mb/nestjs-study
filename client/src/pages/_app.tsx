import { ChakraProvider } from "@chakra-ui/react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { Layout } from "@/components/layout";

import type { AppProps } from "next/app";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
