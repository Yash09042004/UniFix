import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [apiUrl, setApiUrl] = useState("");

  // Debug effect to check environment variables
  useEffect(() => {
    // Fixed URL formation - don't append /feedback twice
    const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:7001/api';
    const url = `${baseUrl}/feedback`;
    setApiUrl(url);
    console.log("Base API URL:", baseUrl);
    console.log("Feedback API URL:", url);
    
    // Test API connectivity to base URL only
    fetch(baseUrl)
      .then(response => {
        console.log("API connectivity test:", response.status);
        return response.json();
      })
      .then(data => {
        console.log("API response:", data);
      })
      .catch(err => {
        console.error("API connectivity error:", err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    
    console.log("Submitting form:", formData);
    console.log("To API URL:", apiUrl);
    
    // Direct URL for testing - ensure it doesn't have duplicate /feedback
    const testUrl = "https://unifix-api-odke.onrender.com/api/feedback";
    console.log("Trying direct URL:", testUrl);
    
    axios
      .post(testUrl, formData)
      .then((response) => {
        console.log("Submit success:", response);
        setSuccess(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
        console.error("Error details:", {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
          config: error.config
        });
        
        const errorMessage = error.response?.data?.message || 
                            error.response?.data?.error || 
                            error.message || 
                            "Failed to submit feedback. Please try again.";
                            
        setError(errorMessage);
        setLoading(false);
      });
  };

  // Show loader if loading is true
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <div className="blob">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
        <div className="glass-card">
          <h1 className="form-title">FEEDBACK</h1>
          {success && <div className="success-message">Feedback submitted successfully. Thank you!</div>}
          {error && <div className="error-message">{error}</div>}
          <div className="debug-info">
            <small>API URL: {apiUrl}</small>
          </div>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Message"
              className="form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;