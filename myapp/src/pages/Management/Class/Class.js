import React, { useEffect, useState } from "react";
// import Axios from "axios";
import "./Styles/class.css";
import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ApiService from "../../../service/ApiService";
import { Alert, Typography } from "@mui/material";

export default function Class() {
  const [classArray, setclassArray] = useState([]);

  useEffect(() => {
    getAllClass();
  }, []);

  const getAllClass = async () => {
    const { data } = await ApiService.getAllClass();

    const classArray = data.results;
    setclassArray(classArray);
  };

  function deleteClass(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Class")) {
      ApiService.deleteClass(id)
        .then(getAllClass())
        .catch((e) => console.log(e));
    }
  }

  console.log(ApiService.postClassAddLink)

  return (
    <Container>
      <div>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Class Management
        </Typography>
        <Container sx={{ textAlign: "end" }}>
          <Link to={<ApiService.postClassAddLink/>}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Container>

        <table>
          <thead>
            <th>S No</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {classArray.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.status.name}</td>
                <td>
                  <Link to={"/Management/add/Class/" + product.id}>
                    <span>
                      <FaIcons.FaEdit />
                    </span>
                  </Link>
                  <span>
                    <a
                      onClick={(e) => {
                        deleteClass(e, product.id);
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
      </div>
    </Container>
  );
}
