import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

const handleauth = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        
        // Check if the token is expired
        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);

          console.log('hahowa dkhall')
          
          setUser(decoded); // Store decoded token data like email
        } else {
          // Token is expired
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      } catch (err) {
       
        console.error("Invalid token", err);
        setIsAuthenticated(false);
      }
    }
  }
console.log('still false')
  console.log(isAuthenticated)

  return {
   
    isAuthenticated, user };
};

export default useAuth;
