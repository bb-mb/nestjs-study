import { useQuery } from "react-query";

import { api } from "../api";

import { userRepository } from "../repository";

export const useUsersQuery = () =>
  useQuery(["users"], handleFetchUser, {
    select: (response) => response.data,
  });

async function handleFetchUser() {
  try {
    return await userRepository.find();
  } catch {
    api.deleteAccessToken();
    return { data: { email: null } };
  }
}
