import Axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Styles/classadd.css";
import { Link, useNavigate,useParams } from "react-router-dom";
import {
  Container,
  Select,
  TextField,
  MenuItem,
  FormControl,
  Button,
  Typography,
} from "@mui/material";

function BrandAdd() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(`http://127.0.0.1:8000/api/status`);
      const products = data.results;
      setProducts(products);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  function title() {
    if (id) {
      return "Updata Brand";
    } else {
      return "Add Brand";
    }
  }

  const productPost = (e) => {
    e.preventDefault();
    Axios.post("http://127.0.0.1:8000/api/brandPost/", {
      name,
      status: productName,
    })
      .then((res) => navigate("/Management/brand/"))
      // .then((res) => console.log("posting data", res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  return (
    <div>
    <Container sx={{ width: 300, height: 300 }}>
      <Typography padding={3} variant="h5" textAlign={"center"}>
        {title()}
      </Typography>

      <FormControl fullWidth>
        <TextField
          variant="outlined"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <Select label="Status" value={productName} onChange={handleChange}>
          {products.map((product, index) => (
            <MenuItem value={product.id} key={index}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
            <br/>
        <Button variant="contained" onClick={productPost}>
          Click
        </Button>
        <br />
        <Button
          variant="contained"
          onClick={() => navigate("/Management/Brand")}
        >
          Back
        </Button>
      </FormControl>
    </Container>
    </div>
  );
}

export default BrandAdd;
