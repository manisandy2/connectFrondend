import Axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Styles/classadd.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Select,
  TextField,
  MenuItem,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import ApiService from "../../../service/ApiService";

function BrandLocationAdd() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  let { id } = useParams();

  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    getAllStatus();
  }, []);

  // console.log(products)
  const getAllStatus = async () => {
    const { data } = await ApiService.getAllStatus();
    const products = data.results;
    setProducts(products);
  };

  const brandLocationData = { name: name, status: productName };

  // console.log(classData);

  function title() {
    if (id) {
      return "Updata Brand Location";
    } else {
      return "Brand Location Add";
    }
  }

  useEffect(() => {
    if (id) {
      ApiService.getBrandLocationId(id)
        .then((res) => {
          setName(res.data.name);
          setProductName(res.data.status);
        })

        .catch((e) => console.log(e));
    }
  }, []);

  function savebrandLocation(e) {
    e.preventDefault();
    if (brandLocationData.name !== "" && brandLocationData.status !== "") {
      if (id) {
        ApiService.updateBrandLocation(id, brandLocationData)
          .then(navigate("/Management/BrandLocation/"))
          .catch((e) => console.log(e));
      } else {
        ApiService.saveBrandLocation(brandLocationData)
          .then(navigate("/Management/BrandLocation/"))
          .catch((e) => console.log(e));
      }
    } else alert("Please Enter the Value");
  }

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

          <br />
          <Select label="Status" value={productName} onChange={handleChange}>
            {products.map((product, index) => (
              <MenuItem value={product.id} key={index}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
          <br />
          <Button variant="contained" onClick={(e) => savebrandLocation(e)}>
            Click
          </Button>
          <br />
          <Button
            variant="contained"
            onClick={() => navigate("/Management/BrandLocation")}
          >
            Back
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default BrandLocationAdd;