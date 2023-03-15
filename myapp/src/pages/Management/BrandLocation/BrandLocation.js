import { Container, Typography } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ApiService from "../../../service/ApiService";

function BrandLocation() {

  const [brandLocationArray,setbrandLocationArray] = useState([]);

  useEffect(() => {
    getAllBrandLocation();
  }, []);

  const getAllBrandLocation = async () => {
    const { data } = await ApiService.getAllBrandLocation();
    const brandLocationArray = data.results;
    setbrandLocationArray(brandLocationArray);
  };

  function deleteClass(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Class")) {
      ApiService.deleteBrandLocation(id)
        .then(getAllBrandLocation())
        .catch((e) => console.log(e));
    }
  }

  return (
    <Container>
      <Typography
        variant="h3"
        textAlign={"center"}
        paddingTop={5}
        paddingBottom={5}
      >
        Brand Location
      </Typography>

      <Container sx={{ textAlign: "end" }}>
        <Link to="/Management/add/BrandLocation">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </Container>

      <table>
        <thead>
          <tr>
            <td>S No</td>
            <td>Name</td>
            <td>Status</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {brandLocationArray.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.status.name}</td>
              <td>
                <span>
                <Link to={"/Management/add/BrandLocation/" + product.id}>
                    <span>
                      <FaIcons.FaEdit />
                    </span>
                  </Link>
                </span>
                <span>
                  <AiIcons.AiFillDelete />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default BrandLocation;
