import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function MaterialManagement() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/material");
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
        <h2>
        Material Management
        </h2>
        <table>
        <thead>
          <tr>

            <th>S No</th>
            <th>Name</th>
            <th>Status</th>       
            <th>Edit </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td> {product.id}</td>
              <td> {product.name}</td>
              <td> {product.status.name}</td>
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
  )
}

export default MaterialManagement
