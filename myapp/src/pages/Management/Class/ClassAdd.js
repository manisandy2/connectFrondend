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
} from "@mui/material";
import ApiService from "../../../service/ApiService";

function ClassAdd() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  let { id } = useParams();

  console.log(id);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(`http://127.0.0.1:8000/api/status`);
      const products = data.results;
      setProducts(products);
    };
    fetchData();
  }, []);

  const classData = { name: name, status: productName };

  console.log(classData);

  function title() {
    if (id) {
      return "Updata Class";
    } else {
      return "Add Class";
    }
  }

  useEffect(() => {
    if (id) {
      ApiService.getClassById(id)
        .then((res) => {
          setName(res.data.name);
          setProductName(res.data.status);
        })

        .catch((e) => console.log(e));
    }
  }, []);

  function saveClass(e) {
    e.preventDefault();
    if (classData.name !== "" && classData.status !== "") {
      if (id) {
        ApiService.updateClass(id, classData)
          .then(navigate("/Management/class/"))
          .catch((e) => console.log(e));
      } else {
        ApiService.saveClass(classData)
          .then(navigate("/Management/class/"))
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
        <h2>{title()}</h2>
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
          <Button variant="contained" onClick={(e) => saveClass(e)}>
            Click
          </Button>
          <br />
          <Button
            variant="contained"
            onClick={() => navigate("/Management/class")}
          >
            Back
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default ClassAdd;
