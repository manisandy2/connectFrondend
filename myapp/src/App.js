import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { SidebarData } from "./components/SidebarData";
import About from "./pages/About";
// import AssetManagement from "./pages/AssetManagement";


import BrandLocation from "./pages/Management/BrandLocation/BrandLocation";
import ClassManagement from "./pages/Management/Class/Class";
import BrandManagement from "./pages/Management/Brand/Brand";
import MaterialManagement from "./pages/Management/Material/Material";
import VendorManagement from "./pages/Management/Vendor/Vendor";


import ClassAdd from "./pages/Management/Class/ClassAdd";
import BrandAdd from "./pages/Management/Brand/BrandAdd";


import BrandType from "./pages/Types/Brand/BrandType"
import LightType from "./pages/Types/Light/LightType";



import Asset from "./pages/OutletMedia/Asset/Asset";
import AssetAdd from "./pages/OutletMedia/Asset/AssetAdd";
import ShowroomDetails from "./pages/OutletMedia/ShowRoom/ShowroomDetails";
import ShowroomAdd from "./pages/OutletMedia/ShowRoom/ShowroomAdd";


import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import StatusManagement from "./pages/Management/Status/Status";


// import LogoutPage from './pages/LogoutPage';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} /> 
          <Route path="/productlist" element={<ProductList />} /> 

          ########################### Management ##############################

          <Route path="/Management/class" element={<ClassManagement />} />
          <Route path="/Management/Brand" element={<BrandManagement/>} /> 
          <Route path="/Management/BrandLocation" element={<BrandLocation/>} /> 
          <Route path="/Management/Material" element={<MaterialManagement/>} /> 
          <Route path="/Management/Vendor" element={<VendorManagement/>} /> 
          <Route path="/Management/Status" element={<StatusManagement/>} /> 

          <Route path="/Management/add/class" element={<ClassAdd/>} /> 
          <Route path="/Management/add/class/:id" element={<ClassAdd/>} /> 
          <Route path="/Management/add/Brand" element={<BrandAdd/>} /> 
          
          ########################### OutletMedia ###############################
          
          <Route path="/OutletMedia/Asset" element={<Asset/>} /> 
          <Route path="/OutletMedia/add/Asset" element={<AssetAdd/>} /> 
          <Route path="/OutletMedia/ShowRoom" element={<ShowroomDetails/>} /> 
          <Route path="/OutletMedia/add/ShowRoom" element={<ShowroomAdd/>} />

          ########################### Types ##################################### 
   
          <Route path="/Types/Brand/BrandType" element={<BrandType />} />  
          <Route path="/Types/Light/LightType" element={<LightType/>} />  
      </Routes>
    </div>
  );
}

export default App;
