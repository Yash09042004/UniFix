import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Domains.css";

const Domains = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Memory", image: "https://weishielectronics.com/wp-content/uploads/2024/05/memory-chip-is-hardware-1024x531.webp" },
    { name: "Labs", image: "https://static.vecteezy.com/system/resources/previews/032/939/325/large_2x/futuristic-computer-lab-with-bright-blue-lighting-free-photo.jpg" },
    { name: "Drivers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRH2MZoYH53RRrm9UvNEBdB4dvpCQRjkqzfg&s" },
    { name: "Tools", image: "https://lib.spline.design/thumbnails/7b184106-4b3e-48cd-8df3-31d61eb5ab2e" },
    { name: "Softwares", image: "https://i.ytimg.com/vi/Om4vQgsyv5c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfEnKGnFmzOQ2l85K4kCjd2ksM5Q" },
    { name: "Docker", image: "https://w7.pngwing.com/pngs/778/570/png-transparent-docker-logo-logo-software-docker-3d-icon-thumbnail.png" },
  ];

  const particlesInit = useCallback(async (engine) => {
    console.log(engine); // Debugging: Log the engine
    await loadFull(engine); // Correctly load the tsparticles engine
  }, []);

  const particlesOptions = {
    background: {
      color: "#1e1f26",
    },
    particles: {
      color: {
        value: ["#03dac6", "#ff0266", "#000000"],
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
      },
      move: {
        enable: true,
        speed: 2,
      },
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
    },
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/domains/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="domains-page">
      <Particles className="background" init={particlesInit} options={particlesOptions} />
      <h1 className="domains-title">Explore Domains</h1>
      <div className="categories-container">
        {categories.map((category) => (
          <div
            key={category.name}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div
              className="category-image"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="category-overlay">
              <h2 className="category-name">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;