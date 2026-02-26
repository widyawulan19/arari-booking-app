import axios from "axios";

/*
  Base axios instance
  Semua endpoint nanti lewat sini
*/

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

/*
  REQUEST INTERCEPTOR
  Auto inject JWT
*/
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/*
  RESPONSE INTERCEPTOR
  Handle error global
*/
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.log("API ERROR :", error.response.data);

            // contoh handle unauthorized
            if (error.response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);

export default api;
