import axios from "axios";

const apiClient = axios.create({
    baseURL: "",
    timeout: 3000,
    withCredentials: true
})

export { apiClient };