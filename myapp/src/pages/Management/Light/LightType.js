import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Typography } from "@mui/material";
import ApiService from "../../../service/ApiService";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function LightType() {
  const [lightTypeArray, setLightTypeArray] = useState([]);

  useEffect(() => {
    getAllLightType();
  }, []);

  const getAllLightType = async () => {
    const { data } = await ApiService.getAllLightType();

    const lightTypeArray = data.results;
    setLightTypeArray(lightTypeArray);
  };

  function deleteLightType(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Class")) {
      ApiService.deleteLightType(id)
        .then(getAllLightType())
        .catch((e) => console.log(e));
    }
  }
  const rows = lightTypeArray.map((row) => ({
    id: row.id,
    Name: row.name,
    Status: row.status.name,
  }));

  const columns = [
    { field: "id", headerName: "Id", width: 100 },
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
            <Link to={"/Types/add/LightType/" + params.row.id}>
              <span>
                <FaIcons.FaEdit />
              </span>
            </Link>
            <span>
              <a
                onClick={(e) => {
                  deleteLightType(e, params.row.id);
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
        <Container>
          <Typography
            variant="h3"
            textAlign={"center"}
            paddingTop={5}
            paddingBottom={5}
          >
            Light Type
          </Typography>
        </Container>
        <Container sx={{ textAlign: "end" }}>
          <Link to="/Types/add/LightType">
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
        
      </div>
    </Container>
  );
}

export default LightType;
