import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5 p-3">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img
            src="media/images/largestBroker.svg"
            alt="Awards"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6 col-sm-12 p-3 mt-4">
          <h2 style={{ color: "#424242"}}>Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Commodities</li>
                <li>Currency directives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Growth</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Press logos" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
};

export default Awards;
