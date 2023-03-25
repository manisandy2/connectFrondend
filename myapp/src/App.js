import {  Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { SidebarData } from "./components/SidebarData";
import About from "./pages/About";
// import AssetManagement from "./pages/AssetManagement";


import Class from "./pages/Management/Class/Class";
import Brand from "./pages/Management/Brand/Brand";
import BrandLocation from "./pages/Management/BrandLocation/BrandLocation";
import Material from "./pages/Management/Material/Material";
import Vendor from "./pages/Management/Vendor/Vendor";


import ClassAdd from "./pages/Management/Class/ClassAdd";
import BrandAdd from "./pages/Management/Brand/BrandAdd";
import BrandLocationAdd from "./pages/Management/BrandLocation/BrandLocationAdd";
import MaterialAdd from "./pages/Management/Material/MaterialAdd";
import VendorAdd from "./pages/Management/Vendor/VendorAdd";


import BrandType from "./pages/Types/Brand/BrandType"
import BrandTypeAdd from "./pages/Types/Brand/BrandTypeAdd"
import LightType from "./pages/Types/Light/LightType";
import LightTypeAdd from "./pages/Types/Light/LightTypeAdd";



import Asset from "./pages/OutletMedia/Asset/Asset";
import AssetAdd from "./pages/OutletMedia/Asset/AssetAdd";
import ShowroomDetails from "./pages/OutletMedia/ShowRoom/ShowroomDetails";
import ShowroomAdd from "./pages/OutletMedia/ShowRoom/ShowroomAdd";


import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Status from "./pages/Management/Status/Status";
import PrivateRoute from "./utils/PrivateRoute";
// import PrivateRoute 


// import LogoutPage from './pages/LogoutPage';

function App() {
  return (
    <div>
      <Routes>
          {/* <PrivateRoute></PrivateRoute> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} /> 
          <Route path="/productlist" element={<ProductList />} /> 

          ########################### Management ##############################

          <Route path="/Management/Class" element={<Class />} />
          <Route path="/Management/Brand" element={<Brand/>} /> 
          <Route path="/Management/BrandLocation" element={<BrandLocation/>} />

          <Route path="/Management/Material" element={<Material/>} /> 
          <Route path="/Management/Vendor" element={<Vendor/>} /> 
          <Route path="/Management/Status" element={<Status/>} /> 

          <Route path="/Management/add/Class" element={<ClassAdd/>} /> 
          <Route path="/Management/add/Class/:id" element={<ClassAdd/>} />

          <Route path="/Management/add/Brand" element={<BrandAdd/>} />
          <Route path="/Management/add/Brand/:id" element={<BrandAdd/>} />

          <Route path="/Management/add/BrandLocation" element={<BrandLocationAdd />} /> 
          <Route path="/Management/add/BrandLocation/:id" element={<BrandLocationAdd />} /> 

          <Route path="/Management/add/Material" element={<MaterialAdd/>} /> 
          <Route path="/Management/add/Material/:id" element={<MaterialAdd/>} />

          <Route path="/Management/add/Vendor" element={<VendorAdd/>} /> 
          <Route path="/Management/add/Vendor/:id" element={<VendorAdd/>} /> 

          
          ########################### OutletMedia ###############################
          
          <Route path="/OutletMedia/Asset" element={<Asset/>} /> 
          <Route path="/OutletMedia/add/Asset" element={<AssetAdd/>} /> 
          <Route path="/OutletMedia/ShowRoom" element={<ShowroomDetails/>} /> 
          <Route path="/OutletMedia/add/ShowRoom" element={<ShowroomAdd/>} />

          ########################### Types ##################################### 
   
          <Route path="/Types/Brand/BrandType" element={<BrandType />} />  
          <Route path="/Types/Light/LightType" element={<LightType/>} /> 

          <Route path="/Types/add/BrandType" element={<BrandTypeAdd />} />  
          <Route path="/Types/add/BrandType/:id" element={<BrandTypeAdd />} />  

          <Route path="/Types/add/LightType" element={<LightTypeAdd/>} /> 
          <Route path="/Types/add/LightType/:id" element={<LightTypeAdd/>} /> 
      </Routes>
    </div>
  );
}

export default App;
