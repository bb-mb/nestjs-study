import { Suspense } from "react";

import { Spinner } from "@chakra-ui/react";

const Home = dynamic(async () => (await import("@/components/home")).Home, {
  ssr: false,
});

import dynamic from "next/dynamic";

import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Home />
    </Suspense>
  );
};

export default HomePage;
