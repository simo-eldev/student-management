import "./auth.css";
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


function Auth() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };


  

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [Message, setMessage] = useState()




    const handleLogin = async (e) => {
    e.preventDefault();

    try {

      console.log(email , password)
      // Send POST request to the backend
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Handle successful response
      if (response.data.token) {
        setMessage("Login successful!");
        console.log(Message)
        // Save the token in local storage
        localStorage.setItem("token", response.data.token)
        navigate("/home")
        ;
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }

  }



  

  return (
    <div className="App">
      <div className="loginContainer">
        <h2>Login !</h2>

        <div className="input-container">
          <label>Username </label>
          <input
            type="email"
            placeholder="mohamed.el@mouslih.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <button className="loginBut" onClick={handleLogin}>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}

export default Auth;
