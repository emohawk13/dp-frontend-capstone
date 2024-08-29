import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeMode";

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`about-page ${theme === "dark" ? "dark-mode" : ""}`}>
      <h1>About Our Project</h1>
      <div className="card">
        <h2>Project Overview</h2>
        <p>
          Here is a{" "}
          <a href="https://fakestoreapi.com/" target="blank">
            LINK
          </a>{" "}
          to the Fake Store API documentation.
        </p>
      </div>
      <div className="card">
        <h2>About this Company</h2>
        <p>
          We made Mini Amazon to give users a better experiacne and to provide
          more products to consumers.
        </p>
      </div>
      <div className="card">
        <h2>Our Goal</h2>
        <p>To Destory the local grocery stores! </p>
      </div>
    </div>
  );
};

export default AboutPage;
