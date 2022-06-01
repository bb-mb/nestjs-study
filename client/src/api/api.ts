import axios from "axios";

export class Api {
  api = axios.create({ baseURL: "http://localhost:3001" });
  get = this.api.get;
  post = this.api.post;
  put = this.api.put;
  patch = this.api.patch;
  delete = this.api.delete;

  constructor() {
    if (typeof window !== "undefined") {
      this.settingAxios();
    }
  }

  settingAxios = () => {
    const accessToken = localStorage.getItem("accessToken") || "";
    this.api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  };

  setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    this.settingAxios();
  };

  deleteAccessToken = () => {
    localStorage.setItem("accessToken", "");
    this.settingAxios();
  };
}

export const api = new Api();
