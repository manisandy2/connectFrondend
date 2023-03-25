import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import {
  Container,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import Axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  console.log(username, password);
  const handleSubmit = async () => {
    const { data } = await Axios.post("http://127.0.0.1:8000/api/login", {
      username: username,
      password: password,
    });
    localStorage.setItem("user", JSON.stringify(data));
    // localStorage.setItem("refresh",data.refresh)
    console.log(data);
    navigate("/OutletMedia/Asset");
  };

  // const getUser = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   console.log(user);
  // };

  return (
    <Container
      sx={{ height: "500px", justifyContent: "center", textAlign: "center" }}
    >
      <FormControl>
        <Typography textAlign={"center"} variant="h3">
          LOGIN
        </Typography>

        <TextField
          label="User Name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></TextField>
        <br />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <br />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Click
        </Button>
      </FormControl>
    </Container>
  );
}

export default LoginPage;
