import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  
  useEffect(() => {
    // const loggedInUser = localStorage.getItem("user");
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  


  if (!authenticated) {
    return navigate("/login");
  } else
    return (
      <div>
        <p>You are logged to home page!</p>
      </div>
    );
}

export default HomePage;
