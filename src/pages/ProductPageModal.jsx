import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactModal from "react-modal";
import Button from "../components/Button";
import { CartContext } from "../contexts/CartFunctionality";
import "../styles/common-styles.scss";

const ProductPageModal = ({ product, isOpen, onRequestClose }) => {
  const { addToCart } = useContext(CartContext);
  const [itemAdded, setItemAdded] = useState(false);
  const history = useHistory();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setItemAdded(true);
  };

  const handleGoToCart = () => {
    history.push("/cart");
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="product-page-modal">
        <img
          src={product.image}
          alt={product.title}
          className="modal-product-image"
        />
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <p>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        {itemAdded && (
          <Button onClick={handleGoToCart} className="go-to-cart-button">
            Go to Cart
          </Button>
        )}
        <Button onClick={onRequestClose} className="close-modal-button">
          Close
        </Button>
      </div>
    </ReactModal>
  );
};

export default ProductPageModal;
