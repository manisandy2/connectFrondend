import React from 'react'
// import { useNavigate } from "react-router-dom";




const LogoutPage = () => {
  localStorage.removeItem("user");
  // const navigate = useNavigate();

  // navigate("/login");
  return (
    <div>LogoutPage</div>
  )
}

export default LogoutPage


// const logout = () => {
//   localStorage.removeItem("user");
  
//   navigate("/login");
// };