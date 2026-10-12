// import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page d-flex flex-column justify-content-center align-items-center text-center">
        <span className="auth-eyebrow">ACCOUNT ACCESS</span>
        <h1 className="auth-title">Login successful</h1>
        <p className="auth-description">You are now signed in jey account.</p>
        <Link to="/login" className="btn auth-submit home-logout">jeyLogout</Link>
    </div>
  )
}

export default Home