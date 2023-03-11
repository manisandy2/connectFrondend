import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Styles/class.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/system";

export default function ClassManagement() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get("http://127.0.0.1:8000/api/classGet");
    const products = data.results;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Container>
          <h2>Class Management</h2>
        </Container>
        <Container>
          <Link to="/Management/add/class">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Container>

        <Container>
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
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.status.name}</td>
                  {/* <td>{product.id} </td> */}
                  <td>
                    <Link to={"update/" + product.id}>
                      <span className="update">Update</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Box>
    </div>
  );
}
