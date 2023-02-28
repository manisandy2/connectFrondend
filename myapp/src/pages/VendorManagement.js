import Axios from "axios";
import React, { useEffect, useState } from "react";

function VendorManagement() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/vendor/");

    const products = data.results;
    setProducts(products);
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      VendorManagement
      <table>
        <thead>
          <tr>
            <td>S no</td>
            <td>Name</td>
            <td>Status</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
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

export default VendorManagement;
