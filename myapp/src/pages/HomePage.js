import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

function HomePage() {
  return (
    <Container sx={{ height: "750px" }}>
      <Container sx={{ backgroundColor: "whitesmoke" }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={5}
        >
          Home Page
        </Typography>
      </Container>
    </Container>
  );
}

export default HomePage;
