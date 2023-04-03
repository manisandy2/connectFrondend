import React, { useEffect, useState } from "react";
import "./Styles/class.css";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container, Box } from "@mui/system";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ApiService from "../../../service/ApiService";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  FormControl,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Class() {
  const [classArray, setclassArray] = useState([]);
  const [dialogOpen, setdialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState([]);
  const [selectStatus, setSelectStatus] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      ApiService.getClassById(id)
        .then((res) => {
          setName(res.data.name);
          setSelectStatus(res.data.status);
        })

        .catch((e) => console.log(e));
    }
  }, []);

  console.log(id);

  useEffect(() => {
    getAllClass();
  }, []);

  const getAllClass = async () => {
    const { data } = await ApiService.getAllClass();
    // console.log(JSON.stringify(data))
    const classArray = data.results;
    setclassArray(classArray);
  };

  // console.log(ApiService.postClassAddLink);

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
            <span>
              <FaIcons.FaEdit onClick={handledialogOpen} />
            </span>
          </div>
        );
      },
    },
  ];

  const handledialogOpen = () => {
    setdialogOpen(true);
  };

  const handledialogClose = () => {
    setdialogOpen(false);
  };

  const handleChange = (e) => {
    setSelectStatus(e.target.value);
  };
  useEffect(() => {
    getAllStatus();
  }, []);

  const getAllStatus = async () => {
    const { data } = await ApiService.getAllStatus();
    const status = data.results;
    setStatus(status);
  };

  function title() {
    if (id) {
      return "Updata Class";
    } else {
      return "Add Class";
    }
  }

  const classData = { name: name, status: selectStatus };

  function saveClass(e) {
    e.preventDefault();
    if (classData.name !== "" && classData.status !== "") {
      if (id) {
        ApiService.updateClass(id, classData);
        handledialogClose()
          // .then(navigate("/Management/class/"))
          .catch((e) => console.log(e));
      } else {
        ApiService.saveClass(classData);
        handledialogClose()
          // .then(navigate("/Management/class/"))
          .catch((e) => console.log(e));
      }
    } else alert("Please Enter the Value");

    //   ApiService.saveClass(classData)
    //     handledialogClose()
    //     // .then(navigate("/Management/class/"))
    //     .catch((e) => console.log(e));
  }

  return (
    <Container sx={{ height: "750px" }}>
      <Container sx={{ backgroundColor: "whitesmoke" }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Class Management
        </Typography>
      </Container>
      <Container sx={{ textAlign: "end" }}>
        <Fab color="primary" aria-label="add" onClick={handledialogOpen}>
          <AddIcon />
        </Fab>
      </Container>
      <Container sx={{ textAlign: "end" }}>
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%", height: "550px" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
            />
          </div>
        </div>
      </Container>
      //////////////////// *** Dialog *** //////////////////////
      <Container>
        <Dialog open={dialogOpen} onClose={handledialogClose}>
          <DialogTitle>
            <Typography padding={3} variant="h5">
              {title()}
              {/* Add Class */}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Container
              sx={{ width: 300, height: 400, backgroundColor: "whitesmoke" }}
            >
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <br />
                <Select
                  label="Status"
                  value={selectStatus}
                  onChange={handleChange}
                >
                  {status.map((statu, index) => (
                    <MenuItem value={statu.id} key={index}>
                      {statu.name}
                    </MenuItem>
                  ))}
                </Select>

                <Button variant="contained" onClick={(e) => saveClass(e)}>
                  Click
                </Button>
                <br />
                <Button variant="contained" onClick={handledialogClose}>
                  Back
                </Button>
              </FormControl>
            </Container>
          </DialogContent>
        </Dialog>
      </Container>
    </Container>
  );
}

// import React from 'react';
// import axios from 'axios';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import Button from '@material-ui/core/Button';

// const MyDialogBox = ({ open, onClose }) => {
//   const [formData, setFormData] = React.useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/create/', formData)
//       .then(() => {
//         onClose();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Create new item</DialogTitle>
//       <form onSubmit={handleSubmit}>
//         <DialogContent>
//           <label htmlFor="name">Name</label>
//           <input type="text" name="name" onChange={handleChange} />
//           <br />
//           <label htmlFor="description">Description</label>
//           <input type="text" name="description" onChange={handleChange} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button type="submit" color="primary">Create</Button>
//         </DialogActions>
//       </form>
//     </Dialog>
//   );
// };

// export default MyDialogBox;
