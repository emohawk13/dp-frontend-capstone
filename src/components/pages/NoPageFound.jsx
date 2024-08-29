import React from "react";
import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default NotFoundPage;
