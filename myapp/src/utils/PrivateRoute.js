import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
 
  
  console.log('Prive Router')
  const token = JSON.parse(localStorage.getItem("user") ? "true" : "false");
  // console.log("Token",token )

  


  let auth = {'token':token}
  return (
      auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
  }


  export default PrivateRoutes