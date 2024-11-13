import "./auth.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "";

function auth() {


  return (
    <div className="App">
      <div className="loginContainer">
        <h2>Login !</h2>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <button className="loginBut">
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}

export default auth;
