import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "./axios";

export default class Client {
  private static async request<T>(
    method: "get" | "post" | "put" | "patch" | "delete",
    url: string,
    data?: unknown,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      let response: AxiosResponse<T>;

      switch (method) {
        case "get":
        case "delete":
          response = await axios[method]<T>(url, options);
          break;

        case "post":
        case "put":
        case "patch":
          response = await axios[method]<T>(url, data, options);
          break;
      }

      return response.data;
    } catch (error) {
      const err = error as Error | AxiosError;

      if (err && "response" in err) {
        const axiosError = err as AxiosError;
        const status = axiosError.response?.status;
        const message = axiosError.response?.data as unknown;
      }
    }
  }
}
