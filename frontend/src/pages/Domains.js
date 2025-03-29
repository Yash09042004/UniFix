import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import "./Domains.css";

const Domains = () => {
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/scripts")
      .then((response) => {
        setScripts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Group scripts by category
  const categories = ["Memory", "LAB", "DRIVERS", "TOOLS", "SOFTWARES"];
  const groupedScripts = categories.map((category) => ({
    category,
    scripts: scripts.filter((script) => script.category === category),
  }));

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="domains-container">
      <h1 className="page-title">Available Scripts</h1>
      {groupedScripts.map(({ category, scripts }) => (
        <section key={category} className="category-section">
          <h2
            className="category-title"
            onClick={() => toggleCategory(category)}
          >
            {category}
          </h2>
          <div
            className={`cards-container ${
              expandedCategory === category ? "expanded" : "collapsed"
            }`}
          >
            {scripts.map((script) => (
              <div key={script._id} className="glass-card">
                <h3 className="script-title">{script.name}</h3>
                <p className="script-description">{script.description}</p>
                <a
                  href={script.downloadLink}
                  className="download-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Domains;