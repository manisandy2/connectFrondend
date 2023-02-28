import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { SidebarData } from "./components/SidebarData";
import About from "./pages/About";
import AssetManagement from "./pages/AssetManagement";
import BrandLocation from "./pages/BrandLocation";
import BrandManagement from "./pages/BrandManagement";
import BrandType from "./pages/BrandType";
import ClassAdd from "./pages/Management/Class/ClassAdd";
import ClassManagement from "./pages/Management/Class/ClassManagement";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LightManagement from "./pages/LightManagement";
import LoginPage from "./pages/LoginPage";
import MaterialManagement from "./pages/MaterialManagement";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ShowroomDetails from "./pages/ShowroomDetails";
import VendorManagement from "./pages/VendorManagement";
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
          <Route path="/Management/class" element={<ClassManagement />} /> 
          <Route path="/Management/add/class" element={<ClassAdd/>} /> 
          <Route path="/Management/Brand" element={<BrandManagement/>} /> 
          <Route path="/Management/Vendor" element={<VendorManagement/>} /> 
          <Route path="/Management/BrandLocation" element={<BrandLocation/>} /> 
          <Route path="/Management/Material" element={<MaterialManagement/>} /> 
          <Route path="/Type/LightType" element={<LightManagement />} /> 
          <Route path="/Type/BrandType" element={<BrandType />} /> 
          <Route path="/OutletMedia/Asset" element={<AssetManagement />} /> 
          <Route path="/OutletMedia/Showroom" element={<ShowroomDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;
