import { useQuery } from "react-query";

import { userRepository } from "../repository";

export const useUsersQuery = () => useQuery(["users"], userRepository.find, {});
