import axios from "axios";

const api = axios.create({
    baseURL: 'http://academico3.rj.senac.br:8080/api/Competencia'
});

export default api;