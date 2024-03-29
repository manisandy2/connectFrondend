import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
// import { useNavigate } from "react-router-dom";
import LogoutPage from "../pages/LogoutPage";
import Grid from '@mui/material/Grid';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  front-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    console.log(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const token = JSON.parse(localStorage.getItem("user") ? "true" : "false");

  console.log(token);
  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <>
    <Grid>
    <Grid item xs={8}>
    


      {/* <Container sx={{backgroundColor:"red"}}> */}
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars size={30} onClick={showSidebar} />
          </NavIcon>
          <Container sx={{ textAlign: "right" }}>
            {token === false ? (
              <Link to={"/login"}>
                <Button variant="contained">Login</Button>
              </Link>
            ) : (
              <Button variant="contained" onClick={LogoutPage}>
                LogOut
              </Button>
            )}
          </Container>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose size={30} onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index}></SubMenu>;
            })}
          </SidebarWrap>
        </SidebarNav>
      {/* </Container> */}
            
            </Grid>
            </Grid>
    </>
  );
};

export default Sidebar;
