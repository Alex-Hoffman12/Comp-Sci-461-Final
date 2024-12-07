import axios from "axios";

// Return structure for the API
export interface FetchResponse {
  type: string;
  data: any;
}

// Default Axios instance
const axiosInstance = axios.create({
  baseURL: "http://colormind.io/api/",
  headers: {
    method: "get",
    model: "default",
    withCredentials: false,
  },
});

class APIClient {
  getPalette = () => {
    const controller = new AbortController();

    const request = axiosInstance.post<FetchResponse>(
      "",
      { model: "default" },
      {
        signal: controller.signal,
      }
    );

    return { request, cancel: () => controller.abort() };
  };
}

export default APIClient;
