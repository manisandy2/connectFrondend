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
  const [user,setUser] = useState(null)
  // const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);


  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user)
    console.log(user);
  };

  useEffect(()=> {
    getUser();
  },[])


  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <Container sx={{ textAlign: "right" }}>
          <Link to={"/"}>
            <Button variant="contained">Home</Button>
          </Link>
          {user === null ?  
            <Link to={"/login"}>
              <Button variant="contained">Login</Button>
             </Link> : 
          //    <Button variant="contained" onClick={logout}>
          //     LogOut
          //  </Button>
             <Button variant="contained" onClick={LogoutPage}>
              LogOut
           </Button>

          }

           {/* <Link to={"/login"}>
             <Button variant="contained">Login</Button>
           </Link> */}

           {/* <Button variant="contained" onClick={logout}>
             LogOut
           </Button>
           */}

        </Container>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}></SubMenu>;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
