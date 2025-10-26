import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 p-5">
        <h3>Technology</h3>
        <h5 className="text-muted">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="mb-5">
          Check out our{" "}
          <a href="#" className="text-decoration-none">
            investment offerings
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
