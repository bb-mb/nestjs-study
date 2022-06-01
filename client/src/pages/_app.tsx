import { ChakraProvider } from "@chakra-ui/react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { Toaster } from "react-hot-toast";

import { Layout } from "@/components/layout";

import type { AppProps } from "next/app";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: Infinity,
      retry: 0,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster position='bottom-center' />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
