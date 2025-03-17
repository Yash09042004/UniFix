import React, { useState } from "react";
import axios from "axios";

const Feedback = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/feedback", formData)
      .then(() => alert("Feedback submitted. Thank you!"))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Submit Feedback</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} required />
        <textarea placeholder="Message" onChange={e => setFormData({ ...formData, message: e.target.value })} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
