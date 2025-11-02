import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5 mt-5" style={{ color: "#424242" }}>
      <div className="text-center">
        <h2>Charges</h2>
        <h5 className="text-muted mt-3">List of all charges and taxes</h5>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-md-4 text-center">
          <img src="media\images\pricingEquity.svg" />
          <h4>Free equity delivery</h4>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="media\images\intradayTrades.svg" />
          <h4>Intraday and F&O trades</h4>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="media\images\pricingEquity.svg" />
          <h4>Free direct MF</h4>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
