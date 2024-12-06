import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

// Create Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Store logged-in user
  const [loading, setLoading] = useState(true); // Handle loading state

  // Save JWT in localStorage when logging in
  const login = async (email, password) => {
    try {
      console.log(email , password)
      // Send POST request to the backend
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Handle successful response
      if (response.data.token) {
        
        // Save the token in local storage
        localStorage.setItem("token", response.data.token)
        
        ;
        navigate("/home")
      }

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        const userInfo = parseJWT(response.data.token);
        setUser(userInfo);
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  // Remove JWT from localStorage when logging out
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Load user from JWT stored in localStorage on initial render
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userInfo = parseJWT(token);
      setUser(userInfo);
    }
    setLoading(false);
  }, []);

  // Parse JWT payload
  const parseJWT = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    } catch (e) {
      console.error('Invalid JWT', e);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
