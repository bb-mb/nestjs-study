import { Repository } from "./Repository";

export class AuthRepository extends Repository {
  login = (params: { email: string; password: string }) => {
    return this.api.post("/auth/login", params);
  };
}
