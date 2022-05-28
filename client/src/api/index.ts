import { api } from "./api";
import { UserRepository } from "./repository";

export const userRepository = new UserRepository(api);
