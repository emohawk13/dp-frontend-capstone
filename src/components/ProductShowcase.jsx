import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
import "../styles/common-styles.scss";

const ProductShowcase = ({
  limit,
  selectedCategories = [],
  sortType = "id",
  sortOrder = "asc",
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = limit
          ? `https://fakestoreapi.com/products?limit=${limit}`
          : "https://fakestoreapi.com/products";
        const response = await axios.get(url);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

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

  if (loading) {
    return (
      <div className="product-showcase">
        {[...Array(limit || 10)].map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="product-showcase">
      {filteredProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/products?product=${product.id}`} className="more-link">
              More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
