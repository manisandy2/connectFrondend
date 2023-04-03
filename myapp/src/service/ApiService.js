import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";
const class_redirect = "/Management/add/Class/"
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
  postClassAddLink()  {
    let name = "/Management/add/Class/" 
    return BASE_URL
  }
  ////////////////////////////*** Brand ***///////////////////////////////////
  getAllBrand() {
    return axios.get(BASE_URL + "brandGet");
  }
  saveBrand(brandData) {
    return axios.post(BASE_URL + "brandPost", brandData);
  }
  updateBrand(id, brandData) {
    return axios.put(`${BASE_URL + "brandGet"}/${id}`, brandData);
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
    return axios.post(BASE_URL + "brandLocationPost", brandLocationData);
  }
  updateBrandLocation(id, brandLocationData) {
    return axios.put(
      `${BASE_URL + "brandLocationGet"}/${id}`,
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
    return axios.put(`${BASE_URL + "materialGet"}/${id}`, materialData);
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
    return axios.put(`${BASE_URL + "vendorGet"}/${id}`, vendorData);
  }
  getVendorId(id) {
    return axios.get(`${BASE_URL + "vendorGet"}/${id}`);
  }
  deleteVendor(id) {
    return axios.delete(BASE_URL + "vendorGet/" + id);
  }
  ////////////////////////////*** BrandType ***///////////////////////////////////
  getAllBrandType() {
    return axios.get(BASE_URL + "brandTypeGet");
  }
  saveBrandType(BrandTypeData) {
    return axios.post(BASE_URL + "brandTypePost", BrandTypeData);
  }
  updateBrandType(id, BrandTypeData) {
    return axios.put(`${BASE_URL + "brandTypeGet"}/${id}`, BrandTypeData);
  }
  getBrandTypeId(id) {
    return axios.get(`${BASE_URL + "brandTypeGet"}/${id}`);
  }
  deleteBrandType(id) {
    return axios.delete(BASE_URL + "brandTypeGet/" + id);
  }
    ////////////////////////////*** LightType ***///////////////////////////////////
    getAllLightType() {
      return axios.get(BASE_URL + "lightTypeGet");
    }
    saveLightType(LightTypeData) {
      return axios.post(BASE_URL + "lightTypePost", LightTypeData);
    }
    updateLightType(id, LightTypeData) {
      return axios.put(`${BASE_URL + "lightTypeGet"}/${id}`, LightTypeData);
    }
    getLightTypeId(id) {
      return axios.get(`${BASE_URL + "lightTypeGet"}/${id}`);
    }
    deleteLightType(id) {
      return axios.delete(BASE_URL + "lightTypeGet/" + id);
    }
    //////////////////////////////*** Asset ***///////////////////////////////////////
    getAllAsset() {
      return axios.get(BASE_URL + "assetGet");
    }

    //////////////////////////////*** statusManagementGet ***///////////////////////////////////////
    getAllstatusManagementGet() {
      return axios.get(BASE_URL + "statusManagementGet");
    }

    //////////////////////////////*** ShowRoom ***///////////////////////////////////////

     getAllShowRoomGet() {
      return axios.get(BASE_URL + "showroom");
    }

    //////////////////////////////*** User ***///////////////////////////////////////
    getAllUser() {
      return axios.get(BASE_URL + "userList");
    }
  }

export default new ApiService();

