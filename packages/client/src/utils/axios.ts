import axios from "axios";

export type AxiosResponse<T> = Promise<{
  success: boolean;
  data: T;
}>;

const _axios = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 15000,
});

_axios.interceptors.response.use(
  (response) => {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  (error) => {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  }
);

export default _axios;
