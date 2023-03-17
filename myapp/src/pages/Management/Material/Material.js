import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Typography } from "@mui/material";
import ApiService from "../../../service/ApiService";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function Material() {
  const [materialArray, setMaterialArray] = useState([]);

  useEffect(() => {
    getAllMaterial();
  }, []);

  const getAllMaterial = async () => {
    const { data } = await ApiService.getAllMaterial();

    const materialArray = data.results;
    setMaterialArray(materialArray);
  };

  function deleteMaterial(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Material")) {
      ApiService.deleteMaterial(id)
        .then(getAllMaterial())
        .catch((e) => console.log(e));
    }
  }

  const rows = materialArray.map((row) => ({
    id: row.id,
    Name: row.name,
    Status: row.status.name,
    
  }));

  const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "Name", headerName: "Name", width: 750 },
    { field: "Status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div style={{ cursor: "pointer" }}>
            <Link to={"/Management/add/Material/" + params.row.id}>
              <span>
                <FaIcons.FaEdit />
              </span>
            </Link>
            <span>
              <a
                onClick={(e) => {
                  deleteMaterial(e, params.row.id);
                }}
              >
                <AiIcons.AiFillDelete />
              </a>
            </span>
          </div>
        );
      },
    },
  ];


  return (
    <Container>
      <div>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Material Management
        </Typography>
        <Container sx={{ textAlign: "end" }}>
          <Link to="/Management/add/Material">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Container>

        <div style={{ width: "100%" }}>
        <div style={{ height: 350, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </div>

        {/* <table>
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {materialArray.map((product) => (
              <tr key={product.id}>
                <td> {product.id}</td>
                <td> {product.name}</td>
                <td> {product.status.name}</td>
                <td>
                <Link to={"/Management/add/Material/" + product.id}>
                    <span>
                      <FaIcons.FaEdit />
                    </span>
                  </Link>
                  <span>
                    <AiIcons.AiFillDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </Container>
  );
}

export default Material;
