import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-md-8">
          <a href="#" style={{ textDecoration: "none" }}>
            <h5 className="text-center">Brokerage calculator</h5>
          </a>

          <ul className="text-muted" style={{lineHeight:"2.5"}}>
            <li>
              Get insights into how brokerage fees impact your overall trading
              profitability.
            </li>
            <li>
              Optimize your trading strategy by minimizing brokerage costs.
            </li>
            <li>
              Understand how much you pay as brokerage on different types of
              trades.
            </li>
            <li>
              Plan your trades better by knowing the exact brokerage costs
              involved.
            </li>
            <li>
              Make informed decisions by using the brokerage calculator
              effectively.
            </li>
            <li>
              Calculate your brokerage charges for equity, commodity, currency,
              and mutual funds.
            </li>
          </ul>
        </div>

        <div className="col-md-4 text-center">
          <a href="#" style={{ textDecoration: "none" }}>
            <h5>List of changes</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
