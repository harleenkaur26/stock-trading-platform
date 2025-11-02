import React from "react";

const Pricing = () => {
  return (
    <div className="container p-3 mt-5">
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <h2 style={{ color: "#424242"}}>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <p>
            <a href="" className="text-decoration-none">
              See pricing
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>

        <div className="col-1"></div>

        <div className="col-lg-6">
          <div className="row text-center">
              <div className="col p-3 border">
                <h1>₹ 0</h1>
                <p className="mx-4 mt-4">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
              <div className="col p-3 border">
                <h1>₹ 20</h1>
                <p className="mx-4 mt-4">
                  Intraday and F&O
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
