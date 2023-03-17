import React, { useEffect, useState } from "react";
import "./Styles/class.css";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container, Box } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ApiService from "../../../service/ApiService";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Class() {
  const [classArray, setclassArray] = useState([]);

  useEffect(() => {
    getAllClass();
  }, []);

  const getAllClass = async () => {
    const { data } = await ApiService.getAllClass();
    // console.log(JSON.stringify(data))
    const classArray = data.results;
    setclassArray(classArray);
  };

  console.log(ApiService.postClassAddLink)

  const rows = classArray.map((row) => ({
    id: row.id,
    Name: row.name,
    Status: row.status.name,
  }));

  function deleteClass(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Class")) {
      ApiService.deleteClass(id)
        .then(getAllClass())
        .catch((e) => console.log(e));
    }
  }

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
            <Link to={"/Management/add/Class/" + params.row.id}>
              <span>
                <FaIcons.FaEdit />
              </span>
            </Link>
            <span>
              <a
                onClick={(e) => {
                  deleteClass(e, params.row.id);
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

  console.log(classArray);

  return (
    <Container sx={{  height: "750px" }}>
      <Container sx={{ backgroundColor: "whitesmoke"  }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Class Management
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
