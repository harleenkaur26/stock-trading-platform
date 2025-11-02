import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center" style={{ color: "#424242" }}>
          People
        </h1>
      </div>

      <div className="row fs-6">
        <div className="col-6 p-5 text-center text-muted">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width:"60%" }}
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="#" className="text-decoration-none mx-1">
              Homepage 
            </a>
            <a href="#" className="text-decoration-none mx-1">
              TradingQnA
            </a>
            <a href="#" className="text-decoration-none mx-1">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
