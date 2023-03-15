import { Container, Typography } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/brand.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ApiService from "../../../service/ApiService";

function Brand() {
  const [brandArray, setbrandArray] = useState([]);

  useEffect(() => {
    getAllBrand();
  }, []);

  const getAllBrand = async () => {
    const { data } = await ApiService.getAllBrand();

    const brandArray = data.results;
    setbrandArray(brandArray);
  };

  function deleteBrand(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Class")) {
      ApiService.deleteBrand(id)
        .then(getAllBrand())
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
        Brand Management
      </Typography>

      <Container sx={{ textAlign: "end" }}>
        <Link to="/Management/add/Brand">
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
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {brandArray.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.status.name}</td>
              <td>
                <Link to={"/Management/add/Brand/" + product.id}>
                  <span>
                    <FaIcons.FaEdit />
                  </span>
                </Link>
                <span>
                <a
                      onClick={(e) => {
                        deleteBrand(e, product.id);
                      }}
                    >
                      <AiIcons.AiFillDelete />
                    </a>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Brand;
