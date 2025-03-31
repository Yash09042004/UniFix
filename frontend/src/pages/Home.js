// Home.js
import React from "react";
import Logo from "../assets/Logo.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/domains">Domain</a></li>
          <li><a href="/feedback">Feedback</a></li>
          <li><a href="/contribute">Contribute</a></li>
        </ul>
      </nav>
      <div className="content-box">
        <h2>Welcome to</h2>
        <h1 className="logo-text">Unifix</h1>
        <p>Your One-Stop Solution for Seamless Troubleshooting</p>
      </div>
      <div className="animated-blob"></div>
    </div>
  );
}