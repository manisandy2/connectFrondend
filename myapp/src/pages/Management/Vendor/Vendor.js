import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Alert, Typography } from "@mui/material";
import ApiService from "../../../service/ApiService";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

function Vendor() {
  const [vendorArray, setVendorArray] = useState([]);

  useEffect(() => {
    getAllVendor();
  }, []);

  const getAllVendor = async () => {
    const { data } = await ApiService.getAllVendor();

    const vendorArray = data.results;
    setVendorArray(vendorArray);
  };

  function deleteVendor(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Material")) {
      ApiService.deleteVendor(id)
        .then(getAllVendor())
        .catch((e) => console.log(e));
    }
  }
  return (
    <Container>
      <div>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Vendor Management
        </Typography>
        <Container sx={{ textAlign: "end" }}>
          <Link to="/Management/add/Vendor">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Container>
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
            {vendorArray.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
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

export default Vendor;
