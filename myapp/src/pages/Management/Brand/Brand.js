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
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

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

  const rows = brandArray.map((row) => ({
    id: row.id,
    Name: row.name,
    Status: row.status.name,
  }));

  const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "Name", headerName: "Name", width: 700 },
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
            <Link to={"/Management/add/Brand/" + params.row.id}>
              <span>
                <FaIcons.FaEdit />
              </span>
            </Link>
            <span>
              <a
                onClick={(e) => {
                  deleteBrand(e, params.row.id);
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
    <Container sx={{ height: "750px" }}>
      <Container sx={{ backgroundColor: "whitesmoke" }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Brand Management
        </Typography>
      </Container>

      <Container sx={{ textAlign: "end" }}>
        <Link to="/Management/add/Brand">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </Container>
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "650px", width: "100%" }}>
          <DataGrid
            rowHeight={50}
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Brand;
