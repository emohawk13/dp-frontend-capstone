import React from "react";
import "../styles/common-styles.scss";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skel">
        <div className="skeleton-image"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
