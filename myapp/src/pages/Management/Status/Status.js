import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Typography } from "@mui/material";
import ApiService from "../../../service/ApiService";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

function Status() {
  const [statusManagement, setstatusManagementGet] = useState([]);

  useEffect(() => {
    getAllStatusManagement();
  }, []);


  const getAllStatusManagement = async () => {
    const { data } = await ApiService.getAllstatusManagementGet();
    const statusManagement = data.results;
    setstatusManagementGet(statusManagement);
  };

  const rows = statusManagement.map((row) => ({
    id: row.id,
    Name: row.name,
    VisibilityList: row.VisibilityList.toString(),
    Status: row.status.name,
  }));


  const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "Name", headerName: "Name", width: 450 },
    { field: "VisibilityList", headerName: "Visibility List", width: 150 },
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
            <Link to={"/Management/add/Class/" + params.row.id}>
              <span>
                <FaIcons.FaEdit />
              </span>
            </Link>
            <span>
              <a
                // onClick={(e) => {
                //   deleteClass(e, params.row.id);
                // }}
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
    <Container sx={{  height: "750px" }}>
      <Container sx={{ backgroundColor: "whitesmoke"  }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Status Management
        </Typography>
      </Container>

      <Container sx={{ textAlign: "end"}}>
        <Link to="/Management/add/Class">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </Container>
      <Container sx={{ textAlign: "end"  }}>
        <div style={{ width: "100%" }}>
          <div style={{  width: "100%" ,height:"550px"}}>
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Status;
