import React from "react";

const Education = () => {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-lg-5">
          <div className="row text-center">
            <img
              src="media/images/education.svg"
              alt="Varsity"
              className="align-self-center"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="col-lg-1"></div>

        <div className="col-lg-6 col-sm-12 align-items-center mt-lg-5 mb-5">
          <h3 className="text-muted">Free and open market education</h3>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <p>
            <a href="" className="text-decoration-none">
              Varsity
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <p>
            <a href="" className="text-decoration-none">
              TradingQ&A
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
