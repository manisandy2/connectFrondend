import Axios from "axios";
import React, { useEffect, useState } from "react";

function MaterialManagement() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/material/");
    const products = data.results;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>MaterialManagement
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
              <td> Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MaterialManagement
