import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Login.css"

function Login() {
  const [username, setUsername] = useState("KAVITASAINI");
  const [password, setPassword] = useState("kavi@123");
  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "KAVITASAINI" && password === "kavi@123") {
      navigate("/home");
    } else {
      window.alert("Invalid username or password.");
    }
  };

  return (
    <div className="logInBody">
      <div className="contain">
        <TwitterIcon className='sidebar_twitterIcon' />
        <h1 className="logInHead">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="logInLable">
            Username
            <input type="text" value={username} onChange={handleUsername} />
          </label>
          <br />
          <label className="logInLable">
            Password
            <input type="password" value={password} onChange={handlePassword} />
          </label>
          <br />
          <button type="submit" className="logInButton">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
