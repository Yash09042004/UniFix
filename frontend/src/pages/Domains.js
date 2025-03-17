import React, { useEffect, useState } from "react";
import axios from "axios";

//adding comments 

const Domains = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/scripts")
      .then(response => setScripts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Available Scripts</h1>
      <ul>
        {scripts.map(script => (
          <li key={script._id}>
            <h3>{script.name}</h3>
            <p>{script.description}</p>
            <a href={script.downloadLink} target="_blank" rel="noopener noreferrer">Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Domains;
