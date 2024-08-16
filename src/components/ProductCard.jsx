import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const handleIncrease = () => {
    // TODO Increase quantity
  };

  const handleDecrease = () => {
    // TODO Decrease quantity
  };

  const handleAddToCart = () => {
    // TODO Add to cart
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
      </Link>
      <p>${product.price}</p>
      <div>
        <Button onClick={handleDecrease}>-</Button>
        <Button onClick={handleIncrease}>+</Button>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
