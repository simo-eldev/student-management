import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"

function Home() {
  const navigate = useNavigate()

  const handlelogout = () => {
    window.localStorage.removeItem("token")
    navigate("/auth")

  }
  return (
    <div className='parent'>
      <div className='box'>
        <h4 className='welcome'>Hello, the web-based school management system is still in progress. </h4>
        <h3>Stay Tuned</h3>
      </div>
      <button className="loginBut1" onClick={handlelogout}>
        <p>Log-out</p>
      </button>
    </div>
  )
}

export default Home
