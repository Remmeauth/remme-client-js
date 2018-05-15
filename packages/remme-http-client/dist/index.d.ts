import { AxiosRequestConfig, AxiosResponse } from "axios";
declare class HttpClient {
    static send(options: AxiosRequestConfig): Promise<AxiosResponse>;
}
export { HttpClient, AxiosRequestConfig };
