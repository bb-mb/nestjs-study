import { Repository } from "./Repository";

export class UserRepository extends Repository {
  create = (params: { email: string; password: string }) => {
    return this.api.post("/users", params);
  };

  find = () => {
    return this.api.get("/users");
  };
}
