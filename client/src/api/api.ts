import axios from "axios";

export class Api {
  api = axios.create({ baseURL: "http://localhost:3001" });
  get = this.api.get;
  post = this.api.post;
  put = this.api.put;
  patch = this.api.patch;
  delete = this.api.delete;

  constructor() {
    this.settingAxios();
  }

  settingAxios = () => {
    const accessToken = localStorage.getItem("accessToken") || "";
    this.api.defaults.headers.common["Authorization"] = accessToken;
  };

  setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", `Bearer ${accessToken}`);
    this.settingAxios();
  };
}

export const api = new Api();
