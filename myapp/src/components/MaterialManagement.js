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

            <th>ID</th>
            <th>Location</th>
            <th>Branding Type</th>
            <th>Brand Location</th>
            <th>Brand </th>
            <th>Model </th>
            <th>Width </th>
            <th>Height </th>
            <th>Material </th>
            <th>Region </th>
            <th>AD Image </th>
            <th>Job Status </th>
          
            <th>Edit </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td> {product.id}</td>
              <td> {product.Location.name}</td>
              <td> {product.BrandingType.name}</td>
              <td> {product.BrandLocation.name}</td>
              <td> {product.Brand.name}</td>
              <td> {product.ModelName}</td>
              <td> {product.Width}</td>
              <td> {product.Height}</td>
              <td> {product.Material.name}</td>
              <td> {product.Location.Region.name}</td>
              <td> {product.ADImage}</td>
              <td> {product.Status.name}</td>
              <td> Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MaterialManagement
