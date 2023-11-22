import axios from "axios";

const BASE_URL = "https://movieapi.cyberlearn.vn/api";

export const axiosWthoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000
})