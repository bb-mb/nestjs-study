import { Repository } from "./Repository";

export class AuthRepository extends Repository {
  login = (params: { email: string; password: string }) => {
    return this.api.post<{ message: string; token: string }>(
      "/auth/login",
      params
    );
  };
}
