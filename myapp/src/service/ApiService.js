import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";
                //  "http://127.0.0.1:8000/api/status"


class ApiService {
  getAllStatus() {
    return axios.get();
  }

  getAllClass() {
    return axios.get(BASE_URL + "classGet");
  }
  saveClass(classData) {
    return axios.post(BASE_URL + "classPost", classData);
  }
  updateClass(id, classData) {
    return axios.put(`${BASE_URL + "classGet"}/${id}`, classData);
  }
  getClassById(id) {
    return axios.get(`${BASE_URL + "classGet"}/${id}`);
  }
  deleteClass(id) {
    return axios.delete(BASE_URL + "classGet/" + id);
  }
}

export default new ApiService();
