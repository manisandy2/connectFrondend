import Axios from "axios";
import React, { useEffect, useState } from "react";
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

function ClassAdd() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState([]);
  const [selectStatus, setSelectStatus] = useState([]);
  
  let { id } = useParams();

  console.log(id);

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

  const classData = { name: name, status: selectStatus };

  // console.log(classData);

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
          setSelectStatus(res.data.status);
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
    setSelectStatus(e.target.value);
  };

  return (
    <div>
      <Container
        sx={{ width: 300, height: 400, backgroundColor: "whitesmoke" }}
      >
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
          <Select label="Status" value={selectStatus} onChange={handleChange}>
            {status.map((statu, index) => (
              <MenuItem value={statu.id} key={index}>
                {statu.name}
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
            onClick={() => navigate("/Management/Class")}
          >
            Back
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default ClassAdd;
