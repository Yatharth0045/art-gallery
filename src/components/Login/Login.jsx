import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";
import loginImage from "../../assets/image.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    if (username === "artgallery" && password === "secret") {
      onLogin();
      navigate("/collections");
    } else {
      alert("Invalid credentials. Try username: 'artgallery', password: 'secret'.");
    }
  };

return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={loginImage} alt="Login Illustration" />
        </div>
        <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;