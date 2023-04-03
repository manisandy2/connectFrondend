import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container, Box } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { Typography } from "@mui/material";
import ApiService from "../../service/ApiService";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function UserList() {
  const [userArray, setuserArray] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);
  
  
  const getAllUser = async () => {
    const { data } = await ApiService.getAllUser();
    // console.log(JSON.stringify(data))
    const userArray = data.results;
    setuserArray(userArray);
    console.log(data)
  };

  const rows = userArray.map((row) => ({
    id: row.id,
    username: row.username,
    // password: row.password,
    groups: row.groups,
    user_permissions: row.user_permissions,
  }));

  const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "username", headerName: "username", width: 250 },
    // { field: "password", headerName: "password", width: 150 },
    { field: "groups", headerName: "groups", width: 150 },
    { field: "user_permissions", headerName: "user_permissions", width: 150 },
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
    <Container sx={{ height: "750px" }}>
      <Container sx={{ backgroundColor: "whitesmoke" }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          User List
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
          <div style={{  width: "100%" ,height:"650px"}}>
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

export default UserList;
