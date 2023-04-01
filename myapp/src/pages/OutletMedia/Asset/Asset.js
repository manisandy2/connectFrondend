import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../../service/ApiService";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Container, Box } from "@mui/system";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Asset() {
  const [assetArray, setAssetArray] = useState([]);

  useEffect(() => {
    getAllAsset();
  }, []);

  const getAllAsset = async () => {
    const { data } = await ApiService.getAllAsset();
    const assetArray = data.results;
    setAssetArray(assetArray);
    
  };

  const rows = assetArray.map((row) => ({
    id: row.id,
    Location: row.Location.name,
    BrandingType: row.BrandingType.name,
    BrandLocation: row.BrandLocation.name,
    Brand: row.Brand.name,
    Model: row.ModelName,
    Width: row.Width,
    Height: row.Height,
    Material: row.Material.name,
    Region: row.Location.Region.name,
    Location: row.Location.name,
    ADImage: row.ADImage,
    Status: row.Status.name,
  }));


  const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "Location", headerName: "ShowRoom Location", width: 150 },
    { field: "BrandingType", headerName: "Branding Type", width: 150 },
    { field: "BrandLocation", headerName: "Brand Location", width: 150 },
    { field: "Brand", headerName: "Brand", width: 100 },
    { field: "Model", headerName: "Model", width: 100 },
    { field: "Width", headerName: "Width", width: 100 },
    { field: "Height", headerName: "Height", width: 100 },
    { field: "Material", headerName: "Material", width: 100 },
    { field: "Region", headerName: "Region", width: 100 },
    { field: "ADImage", headerName: "AD Image", editable: true, width: 100,renderCell:(params) => <img src={params.value}  /> },
    { field: "Status", headerName: "Status", width: 100 },
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
          Asset
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

export default Asset




