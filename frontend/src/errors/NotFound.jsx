import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
        <button className="notfound-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
