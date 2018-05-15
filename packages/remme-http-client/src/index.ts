import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

class HttpClient {
    public static async send(options: AxiosRequestConfig): Promise<AxiosResponse> {
        try {
            return await axios(options);
        } catch (e) {
            return e.response;
        }
    }
}

export {
    HttpClient,
    AxiosRequestConfig,
};
