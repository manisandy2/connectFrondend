import { Button, Grid, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateProduct(props) {
  const [getStatus, setGetStatus] = useState([]);
  const [name, setName] = useState([]);
  const [status, setStatus] = useState([]);
  const [nameUpdate, setNameUpdate] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState([]);

  const navigate = useNavigate();

  let { id } = useParams();
  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "http://127.0.0.1:8000/api/classGet/" + id
    );
    setName(data.name);
    setStatus(data.status);
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  });

  console.log(name);
  console.log(status);

  const editProduct = () => {
    Axios.put("http://127.0.0.1:8000/api/classGet/" + id, {
      name: nameUpdate,

      status: statusUpdate,
    })
      // .then((res) => navigate("/Management/class"))
      .then((res) => console.log(res))

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchStatus = async () => {
      const { data } = await Axios.get(`http://127.0.0.1:8000/api/status`);
      const getStatus = data.results;
      setGetStatus(getStatus);
    };
    fetchStatus();
  }, []);

  console.log(statusUpdate);

  const handleChange = (e) => {
    setStatusUpdate(e.target.value);
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
      }}
    >
      <Container>
        <div>
          <Grid Container spacing={2} gap={2}>
            <Grid item xs={8}>
              <h2>Update Product</h2>
            </Grid>
            <form>
              <div>
                <Grid item xs={4}>
                  <input
                    defaultValue={name}
                    // value={name}
                    onChange={(e) => {
                      setNameUpdate(e.target.value);
                    }}
                  ></input>
                  {/* <TextField
                    value={name}
                    label={"Class"}
                    onChange={(e) => {setName(e.target.name)}}
                  /> */}
                </Grid>
              </div>
              <div>
                {/* <Grid item xs={4}>
                  <TextField
                    value={status}
                    label={"Status"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </Grid> */}

                {/* <select value={statusUpdate} onChange={handleChange}>
                  {getStatus.map((pro, index) => (
                    <option value={pro.id} key={index}>
                      {pro.name}
                    </option>
                  ))}
                </select> */}

                <select value={statusUpdate} onChange={handleChange}>
                  {getStatus.map((pro, index) => (
                    <option value={pro.id} key={index}>
                      {pro.name}
                    </option>
                  ))}
                </select>
              </div>

              <Button onClick={editProduct} variant="contained">
                Click
              </Button>
              <Button
                onClick={() => navigate("/Management/class/")}
                variant="contained"
              >
                Back
              </Button>
            </form>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default UpdateProduct;

