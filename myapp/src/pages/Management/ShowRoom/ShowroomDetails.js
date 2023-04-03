import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container, Box } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ApiService from "../../../service/ApiService";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function ShowroomDetails() {
  const [showroom,setShowroom] = useState([])

  useEffect(() => {
    getAllshowroom();
  }, []);


 
  const getAllshowroom = async () => {
    const { data } = await ApiService.getAllShowRoomGet();
    const showroom = data.results;
    setShowroom(showroom);
  
  };

  const rows = showroom.map((row) => ({
    id: row.id,
    Name: row.name,
    RSM: row.RSM === null ? "NA" : row.RSM.name ,
    ASM: row.ASM === null ? "NA" : row.ASM.name ,
    Manager: row.Manager == null ? "NA" : row.Manager.name,
    CUG_NO: row.CUG_NO,
    Landline: row.Landline,
    E_Mail: row.E_Mail,
    Region: row.Region === null ? "NA" : row.Region.name,
    State: row.State === null ? "NA" : row.State.name,
    Address: row.Address,
   
  }));

  const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "Name", headerName: "Name", width: 250 },
    { field: "RSM", headerName: "RSM", width: 150 },
    { field: "ASM", headerName: "ASM", width: 150 },
    { field: "Manager", headerName: "Manager", width: 150 },
    { field: "CUG_NO", headerName: "CUG_NO", width: 150 },
    { field: "Landline", headerName: "Landline", width: 150 },
    { field: "E_Mail", headerName: "E_Mail", width: 150 },
    { field: "Region", headerName: "Region", width: 150 },
    { field: "State", headerName: "State", width: 150 },
    { field: "Address", headerName: "Address", width: 150 },
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
          Show Room
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
          <div style={{  width: "100%" ,height:650}}>
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

export default ShowroomDetails;
