import { AxiosRequestConfig } from "axios";
import axios from "./axios.config";

export default class Client {
  static async get<T>(url: string, options?: AxiosRequestConfig<unknown>) {
    const response = await axios.get<T>(url, options);
    return response.data;
  }
  static async post<T>(
    url: string,
    data?: unknown,
    options?: AxiosRequestConfig<unknown>
  ) {
    const response = await axios.post<T>(url, data, options);
    return response.data;
  }
  static async put<T>(url: string, data?: unknown) {
    const response = await axios.put<T>(url, data);
    return response.data;
  }
  static async patch<T>(url: string, data: unknown) {
    const response = await axios.patch<T>(url, data);
    return response.data;
  }
  static async delete<T>(url: string, options?: AxiosRequestConfig<unknown>) {
    const response = await axios.delete<T>(url, options);
    return response.data;
  }
}
