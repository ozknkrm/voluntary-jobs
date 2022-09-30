import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export const apiProjects = {
    getAllProjects() {
        return axios.get(baseUrl + "/project");
    },

    getProject(id){
        return axios.get(baseUrl + `/project/${id}`);
    },
    deleteProject(id){
        return axios.delete(baseUrl + `/project/${id}`);
    },
    createProject(id){
        return axios.delete(baseUrl + `/project/${id}`);
    },
}