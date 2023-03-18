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
import ApiService from "../../../service/ApiService";

function BrandAdd() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState([]);
  const [selectStatus, setSelectStatus] = useState([]);

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getAllStatus();
  }, []);

  // console.log(products)
  const getAllStatus = async () => {
    const { data } = await ApiService.getAllStatus();
    const status = data.results;
    setStatus(status);
  };

  const brandData = { name: name, status: selectStatus };

  function title() {
    if (id) {
      return "Updata Brand";
    } else {
      return "Add Brand";
    }
  }


  useEffect(() => {
    if (id) {
      ApiService.getBrandId(id)
        .then((res) => {
          setName(res.data.name);
          setSelectStatus(res.data.status);
        })

        .catch((e) => console.log(e));
    }
  }, []);

  function saveBrand(e) {
    e.preventDefault();
    if (brandData.name !== "" && brandData.status !== "") {
      if (id) {
        ApiService.updateBrand(id, brandData)
          .then(navigate("/Management/Brand/"))
          .catch((e) => console.log(e));
      } else {
        ApiService.saveBrand(brandData)
          .then(navigate("/Management/Brand/"))
          .catch((e) => console.log(e));
      }
    } else alert("Please Enter the Value");
  }

  const handleChange = (e) => {
    setSelectStatus(e.target.value);
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
        <Select label="Status" value={selectStatus} onChange={handleChange}>
          {status.map((statu, index) => (
            <MenuItem value={statu.id} key={index}>
              {statu.name}
            </MenuItem>
          ))}
        </Select>
            <br/>
        <Button variant="contained" onClick={(e) => saveBrand(e)}>
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
