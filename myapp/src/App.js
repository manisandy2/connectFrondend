import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { SidebarData } from "./components/SidebarData";
import About from "./pages/About";
// import AssetManagement from "./pages/AssetManagement";
import BrandLocation from "./pages/Management/BrandLocation/BrandLocation";
import Brand from "./pages/Management/Brand/Brand";


import ClassAdd from "./pages/Management/Class/ClassAdd";
import ClassManagement from "./pages/Management/Class/Class";
import LightManagement from "./pages/Management/Light/Light";
import BrandAdd from "./pages/Management/Brand/BrandAdd";


import Asset from "./pages/OutletMedia/Asset/Asset";
import AssetAdd from "./pages/OutletMedia/Asset/AssetAdd";
import ShowroomDetails from "./pages/OutletMedia/ShowRoom/ShowroomDetails";
import ShowroomAdd from "./pages/OutletMedia/ShowRoom/ShowroomAdd";


import BrandType from "./pages/Types/Brand/BrandType"


import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MaterialManagement from "./pages/MaterialManagement";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";


import VendorManagement from "./pages/VendorManagement";
import MaterialType from "./pages/Types/Material/MaterialType";
import LightType from "./pages/Types/Light/LightType";
import UpdateProduct from "./pages/Management/Class/UpdateProduct";
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
          <Route path="/Management/class/update/:id" element={<UpdateProduct/>} /> 
          <Route path="/Management/add/class" element={<ClassAdd/>} /> 
          <Route path="/Management/Brand" element={<Brand/>} /> 
          <Route path="/Management/add/Brand" element={<BrandAdd/>} /> 
          <Route path="/Management/Vendor" element={<VendorManagement/>} /> 
          <Route path="/Management/BrandLocation" element={<BrandLocation/>} /> 
          <Route path="/Management/Material" element={<MaterialManagement/>} /> 
          
          ########################### OutletMedia ###############################
          
          <Route path="/OutletMedia/Asset" element={<Asset/>} /> 
          <Route path="/OutletMedia/add/Asset" element={<AssetAdd/>} /> 
          <Route path="/OutletMedia/ShowRoom" element={<ShowroomDetails/>} /> 
          <Route path="/OutletMedia/add/ShowRoom" element={<ShowroomAdd/>} />

          ########################### Types ##################################### 
   
          <Route path="/Types/Brand/BrandType" element={<BrandType />} />  
          <Route path="/Types/Material/MaterialType" element={<MaterialType/>} />  
          <Route path="/Types/Light/LightType" element={<LightType/>} />  
      </Routes>
    </div>
  );
}

export default App;
