import React from "react";

const Universe = () => {
  return (
    <div className="container mb=5">
      <h2 className="text-center text-muted">The Zerodha Universe</h2>
      <p className="text-center text-muted mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row mb-5">
        <div className="col-4 text-center mb-5">
          <img src="media/images/smallcaseLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-2">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/streakLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted mt-2">
            Trading automation platform
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted mt-2">Mutual fund platform</p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/goldenpiLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-2">Bond investing platform</p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/dittoLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted mt-2">
            Personal finance platform
          </p>
        </div>
        <button
          className="p-2 btn btn-primary mt-4 fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
