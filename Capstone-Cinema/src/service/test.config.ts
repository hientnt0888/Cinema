import axios from "axios";
// import { ACCESS_TOKEN } from "src/constants";
// import { getLocal } from "src/utils";

const BASE_URL = "https://shop.cyberlearn.vn/api";

/**
 * axios
 * - axiosWithoutAuth: những api public
 * - axiosAuth: những api private - cần xác minh
 */

export const axiosWithoutAuth = axios.create({
  baseURL: BASE_URL,
  // Thời gian đợi một request hoàn thành.
  timeout: 180_000, // 180000
});

// Cần đính kèm Authorization vào header của mỗi request
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  // Thời gian đợi một request hoàn thành.
  timeout: 180_000, // 180000
});

// // interceptor: Đính kèm thêm vài thông tin cho request trước khi gửi đi
// axiosAuth.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${getLocal(ACCESS_TOKEN)}`;

//     return config;
//   },
//   (err) => {
//     console.log(err);
//     return Promise.reject(err);
//   },
// );

/**
 * animal
 * - dog
 * - cat
 */
