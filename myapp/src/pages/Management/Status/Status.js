import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Typography } from "@mui/material";

function StatusManagement() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "http://127.0.0.1:8000/api/statusManagement"
    );

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
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Status Management
        </Typography>

        <table>
          <thead>
            <tr>
              <td>S no</td>
              <td>Name</td>
              <td>VisibilityList</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.VisibilityList.toString()}</td>
                <td>{product.status.name}</td>
                <td>
                  <span>
                    <FaIcons.FaEdit />
                  </span>
                  <span>
                    <AiIcons.AiFillDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default StatusManagement;
