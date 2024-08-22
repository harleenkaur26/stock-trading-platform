import React from "react";

const Hero = () => {
  return (
    <div className="container p-4">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero image"
          className="mb-5"
        />
          <h1 style={{ color: "#424242"}}>Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="p-2 btn btn-primary mt-4 fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up now
          </button>
      </div>
    </div>
  );
};

export default Hero;
