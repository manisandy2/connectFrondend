import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  console.log("Private route works!");
  let auth = { token: true };

  return (
  auth.token ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute;
