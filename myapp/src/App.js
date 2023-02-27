import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { SidebarData } from "./components/SidebarData";
import About from "./pages/About";
import AssetManagement from "./pages/AssetManagement";
import ClassManagement from "./pages/ClassManagement";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LightManagement from "./pages/LightManagement";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
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
          <Route path="/classManagement" element={<ClassManagement />} /> 
          <Route path="/LightManagement" element={<LightManagement />} /> 
          <Route path="/AssetManagement" element={<AssetManagement />} /> 
      </Routes>
    </div>
  );
}

export default App;
