import { AxiosInstance } from "axios";

export class Repository {
  api: AxiosInstance;
  constructor(api: AxiosInstance) {
    this.api = api;
  }
}
