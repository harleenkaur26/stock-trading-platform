import React from "react";

const OpenAccount = () => {
  return (
    <div className="container p-5 mb-5 mt-1" style={{ color: "#424242" }}>
      <div className="text-center">
        <h1>Open a Zerodha Account</h1>
        <p className="text-muted mt-3 fs-6">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary mt-3 fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
