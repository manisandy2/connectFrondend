import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginlink = "http://127.0.0.1:8000/api/login";

  const handleSubmit = async () => {
    console.log(username, password);
    let item = { username, password };

    let result = await fetch(loginlink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    
    result = await result.json();
    console.log(result)
    if (result.error) {
      alert(result.error);
    } else {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div className="label-input">
          <label className="label" htmlFor="email">
            UserName
          </label>
          <input
            className="Input-text Input"
            placeholder="Enter User Name"
            type="text"
            id="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="Input-text Input"
            placeholder="Enter Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {/* <button
          className="button"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Login
        </button> */}

        <br />
      </form>
    </div>
  );
}

export default LoginPage;
