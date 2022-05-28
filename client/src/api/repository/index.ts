import { api } from "../api";
import { UserRepository } from "./UserRepository";

export const userRepository = new UserRepository(api);
