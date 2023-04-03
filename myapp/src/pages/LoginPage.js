import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // console.log(username, password);
  const handleSubmit = async () => {
    const { data } = await Axios.post("http://127.0.0.1:8000/api/login", {
      username: username,
      password: password,
    });
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
    navigate("/");
  };


  return (
    <Container sx={{ height: "750px" }}>
      <Container sx={{ backgroundColor: "whitesmoke" }}>
        <Typography
          textAlign={"center"}
          variant="h3"
          paddingTop={5}
          paddingBottom={5}
        >
          Login Page
        </Typography>
      </Container>
      <Container>
        <FormControl sx={{paddingTop:5 ,justifyContent:"end" }}>
          <TextField sx={{width:1100}}
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
    </Container>
  );
}

export default LoginPage;
