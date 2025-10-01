import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPages.css";

const InternalServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-title">500</h1>
        <p className="notfound-message">
          Something went wrong on our end. We're working on it!
        </p>
        <button className="notfound-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default InternalServerError;
