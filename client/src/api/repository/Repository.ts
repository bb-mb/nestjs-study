import { Api } from "../api";

export class Repository {
  api: Api;
  constructor(api: Api) {
    this.api = api;
    console.log("run");
  }
}
