import axios from "axios";

const BASE_URL = "https://movieapi.cyberlearn.vn/api";

export const axiosWthoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000
})

const URL = "https://movienew.cybersoft.edu.vn/api";
export const axiosWthoutAu = axios.create({
    baseURL: URL,
    timeout: 180_000
})
