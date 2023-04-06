import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Login.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users)
    const userMatch = users.username === username && users.password === password;
    if (userMatch) {
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
        <p>Don't have an account <Link to="/registration">Please Sign in</Link></p>
      </form>
    </div>
    </div>
  );
}

export default Login;
