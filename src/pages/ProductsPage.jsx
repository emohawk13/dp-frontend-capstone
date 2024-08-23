import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ProductPageModal from "./ProductPageModal";
import "../styles/common-styles.scss";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortType, setSortType] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("product");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        if (productId) {
          const product = response.data.find(
            (p) => p.id === parseInt(productId)
          );
          if (product) {
            setSelectedProduct(product);
            setIsModalOpen(true);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, [productId]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleProductDetailsClick = (product) => {
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
              className={`product-card ${
                selectedProduct && selectedProduct.id === product.id
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleProductClick(product)}
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
          {selectedProduct && (
            <div className="selected-product">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="hovered-product-image"
              />
              <h3>{selectedProduct.title}</h3>
              <p>${selectedProduct.price.toFixed(2)}</p>
              <button
                className="more-details-button"
                onClick={() => handleProductDetailsClick(selectedProduct)}
              >
                More Details
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <ProductPageModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProductsPage;
