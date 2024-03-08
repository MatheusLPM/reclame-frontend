import axios from "axios";
import Swal from "sweetalert2";

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const { status } = error.response ?? "";

        if (status === 401) {

            localStorage.removeItem('token')
            console.log("Token expirou")

        }
        if (status >= 400) {

            console.log("Erro na solicitação")
        }
        if (status >= 500) {

            console.log("Erro no servidor")
            console.log(error)

            Swal.fire({
                icon: "error",
                text: error.response.data.message ? "Erro de conexão" : "Erro Desconhecido",
            });
        }
        return Promise.reject(error);
    }
);
