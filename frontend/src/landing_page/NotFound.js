import React from "react";

const NotFound = () => {
  return (
    <div className="container p-5 mb-5 mt-5" style={{ color: "#424242" }}>
      <div className="text-center">
        <h1>404 Not Found</h1>
        <p className="text-muted mt-3 fs-6">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
