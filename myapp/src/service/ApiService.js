import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

class ApiService {
  ////////////////////////////*** Status ***///////////////////////////////////
  getAllStatus() {
    return axios.get(BASE_URL + "status");
  }
  ////////////////////////////*** Class ***///////////////////////////////////
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
  postClassAddLink(){
    return "sdfsf"
  }
  ////////////////////////////*** Brand ***///////////////////////////////////
  getAllBrand() {
    return axios.get(BASE_URL + "brandGet");
  }
  saveBrand(brandData) {
    return axios.post(BASE_URL + "brandPost", brandData);
  }
  updateBrand(id, brandData) {
    return axios.put(`${BASE_URL + "brandGet"}/ ${id}`, brandData);
  }
  getBrandId(id) {
    return axios.get(`${BASE_URL + "brandGet"}/${id}`);
  }
  deleteBrand(id) {
    return axios.delete(BASE_URL + "brandGet/" + id);
  }
  ////////////////////////////*** Brand Location ***///////////////////////////////////
  getAllBrandLocation() {
    return axios.get(BASE_URL + "brandLocationGet");
  }
  saveBrandLocation(brandLocationData) {
    return axios.post(BASE_URL + "brandPost", brandLocationData);
  }
  updateBrandLocation(id, brandLocationData) {
    return axios.put(
      `${BASE_URL + "brandLocationGet"}/ ${id}`,
      brandLocationData
    );
  }
  getBrandLocationId(id) {
    return axios.get(`${BASE_URL + "brandLocationGet"}/${id}`);
  }
  deleteBrandLocation(id) {
    return axios.delete(BASE_URL + "brandLocationGet/" + id);
  }
  ////////////////////////////*** Material ***///////////////////////////////////
  getAllMaterial() {
    return axios.get(BASE_URL + "materialGet");
  }
  saveMaterial(materialData) {
    return axios.post(BASE_URL + "materialPost", materialData);
  }
  updateMaterial(id, materialData) {
    return axios.put(`${BASE_URL + "materialGet"}/ ${id}`, materialData);
  }
  getMaterialId(id) {
    return axios.get(`${BASE_URL + "materialGet"}/${id}`);
  }
  deleteMaterial(id) {
    return axios.delete(BASE_URL + "materialGet/" + id);
  }
  ////////////////////////////*** Vendor ***///////////////////////////////////
  getAllVendor() {
    return axios.get(BASE_URL + "vendorGet");
  }
  saveVendor(vendorData) {
    return axios.post(BASE_URL + "vendorPost", vendorData);
  }
  updateVendor(id, vendorData) {
    return axios.put(`${BASE_URL + "vendorGet"}/ ${id}`, vendorData);
  }
  getVendorId(id) {
    return axios.get(`${BASE_URL + "vendorGet"}/${id}`);
  }
  deleteVendor(id) {
    return axios.delete(BASE_URL + "vendorGet/" + id);
  }
}

export default new ApiService();
