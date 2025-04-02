// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();

  // Hardcoded scripts for demonstration
  const scripts = [
    {
      name: "Cleanop",
      description: "Cleanop command cleans unnecessary memory and frees up space.",
      downloadLink: "/scripts/cleanop.sh", // Direct link to the file in the public directory
    },
    {
      name:" Script2",
      description: "Description for Script2.",
      downloadLink: "/scripts/script2.sh", // Direct link to the file in the public directory
    }
  ];

  return (
    <div className="category-page">
      <h1 className="category-title">{category} Scripts</h1>
      <div className="scripts-container">
        {scripts.map((script) => (
          <div key={script.name} className="script-card">
            <h3 className="script-name">{script.name}</h3>
            <p className="script-description">{script.description}</p>
            <a
              href={script.downloadLink}
              className="download-button"
              download
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;