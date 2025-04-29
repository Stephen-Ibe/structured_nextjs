import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

const successHandler = async (
  response: AxiosResponse
): Promise<AxiosResponse> => Promise.resolve(response);

const errorHandler = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error.response);

instance.interceptors.response.use(successHandler, errorHandler);

export default instance;
