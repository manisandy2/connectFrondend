import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/classmanagement.css";

export default function ClassManagement() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/class/");
    const products = data.results;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Class Management</h2>

      <table>
        <thead>
            <tr>
                <th>S No</th>
                <th>Name</th>
                <th>Status</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.name}</td>
              <td>{product.status.name}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
