import React from "react";
import ProductShowcase from "../components/ProductShowcase";
import "../styles/home-styles.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-detail">
        <h1>Welcome to Mini Amazon</h1>
        <p>Your one-stop shop for everything!</p>
      </div>
      <ProductShowcase limit={3} />
    </div>
  );
};

export default HomePage;
