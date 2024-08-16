import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import "../styles/common-styles.scss";

ReactModal.setAppElement("#root");

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortType, setSortType] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleProductHover = (product) => {
    setHoveredProduct(product);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products
    .filter((product) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true
    )
    .sort((a, b) => {
      const isReversed = sortOrder === "asc" ? 1 : -1;

      if (typeof a[sortType] === "string" && typeof b[sortType] === "string") {
        return isReversed * a[sortType].localeCompare(b[sortType]);
      } else {
        return isReversed * (a[sortType] - b[sortType]);
      }
    });

  return (
    <div className="products-page">
      <div className="filters">
        {["electronics", "jewelery", "men's clothing", "women's clothing"].map(
          (category) => (
            <div key={category}>
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          )
        )}
        <div className="sort">
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
          </select>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="content-area">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onMouseEnter={() => handleProductHover(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
        <div className="product-preview">
          {hoveredProduct && (
            <div className="selected-product">
              <img
                src={hoveredProduct.image}
                alt={hoveredProduct.title}
                className="hovered-product-image"
              />
              <h3>{hoveredProduct.title}</h3>
              <p>${hoveredProduct.price.toFixed(2)}</p>
              <button
                className="more-details-button"
                onClick={() => handleProductClick(hoveredProduct)}
              >
                More Details
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Product Details Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={true}
          shouldReturnFocusAfterClose={true}
        >
          <div className="product-page">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="modal-product-image"
            />
            <h1>{selectedProduct.title}</h1>
            <p>{selectedProduct.category}</p>
            <p>${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <p>
              Rating: {selectedProduct.rating.rate} (
              {selectedProduct.rating.count} reviews)
            </p>
            <button onClick={closeModal} className="close-modal-button">
              Close
            </button>
          </div>
        </ReactModal>
      )}
    </div>
  );
};

export default ProductsPage;
