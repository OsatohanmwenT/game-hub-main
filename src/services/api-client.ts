import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '09f863806bf74d3480bd146c5bdb45d9'
    }
})

export interface FetchResponse<T> {
    count: number;
    next: string | null
    results: T[];
}

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + "/" + id)
            .then(res => res.data)
    }
}

// const fetchData = <T>(endpoint: string, config?: AxiosRequestConfig) => {
//     return axiosInstance
//         .get<FetchResponse<T>>(endpoint, config)
//         .then((res) => res.data);
// };

// export default fetchData;

export default APIClient