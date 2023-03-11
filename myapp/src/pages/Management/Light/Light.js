import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles/light.css";
import { Link } from "react-router-dom";

export default function LightManagement() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/light/");
    const products = data.results;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-box">
      <h2>

      LightManagement

      </h2>
      <div className="createButton">
        <Link className="linkbutton" to="/Management/add/Light"> + Light </Link>
      </div>

      {/* <Link className="linkbutton" to="/Management/add/class"> + Light </Link> */}
      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th> Name</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td >{product.id}</td>
              <td >{product.name}</td>
              <td >{product.status.name}</td>
              <td >Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
