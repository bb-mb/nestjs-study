import { api } from "../api";
import { AuthRepository } from "./AuthRepository";
import { UserRepository } from "./UserRepository";

export const authRepository = new AuthRepository(api);
export const userRepository = new UserRepository(api);
