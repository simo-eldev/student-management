import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import Home from '../home/home';
import "./auth.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>


      {user ? (
        <Home/>
      ) : (


        <>
        
       <div className='App'>

        <div className='loginContainer'>


        <h2>Login !</h2>
        




       

                <form  className='input-container'  onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                

                
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                


              <button  className = "loginBut" type="submit">
                <p>Login</p>
              </button>


            </form>
            
            
            </div>  
            </div>   
          
          
          </>
      )
    }
    </div>
   
  );
};

export default LoginPage;
