import { Container } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/brand.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function BrandManagement() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/brand/");

    const products = data.results;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <div>
        <h2>Brand Management</h2>
        <div>
          <Link to="/Management/add/brand">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </div>
        <br />

        <table>
          <thead>
            <tr>
              <td>S No</td>
              <td>Name</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.status.name}</td>
                <td>
                  <span><FaIcons.FaEdit /></span>
                  <span><AiIcons.AiFillDelete /></span>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default BrandManagement;
