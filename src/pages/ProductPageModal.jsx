import React from "react";
import ReactModal from "react-modal";
import Button from "../components/Button";
import "../styles/common-styles.scss";

const ProductPageModal = ({ product, isOpen, onRequestClose }) => {
  if (!product) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="ReactModal-content"
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
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
        <Button onClick={() => alert("Product added to cart!")}>
          Add to Cart
        </Button>
        <Button onClick={onRequestClose} className="close-modal-button">
          Close
        </Button>
      </div>
    </ReactModal>
  );
};

export default ProductPageModal;
