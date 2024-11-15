import "./auth.css";
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../../utilities/UseAuth";
import axios from "axios";


function Auth() {
  const { login } = UseAuth();
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

  useEffect(() => {
    // Fetch data from JSON Server
    axios.get('http://localhost:8000/0')
      .then(response => {
        setPosts(response.data);  // Store the response data in the state
        setLoading(false);        // Set loading to false once data is received
      })
      .catch(err => {
        setError(err.message);    // Handle errors
        setLoading(false);
      });
  }, []);

 



  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword() && posts.email === email && posts.password === password ) {

      window.localStorage.setItem("isLogedIn",true)
      console.log("Login successful");
      login("dummyToken");
      navigate("/home");
    
    }
  };

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
        <button className="loginBut" onClick={handleSubmit}>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}

export default Auth;
