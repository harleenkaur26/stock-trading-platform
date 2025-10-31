import React from "react";

const CreateTicket = () => {
  return (
    <div className="container p-5 mb-5 mt-5" style={{ color: "#424242" }}>
      <div>
        <h4 style={{ lineHeight: "2.5" }}>
          To create a ticket, know a relevant topic
        </h4>
      </div>

      <div className="row" style={{ lineHeight: "1.5" }}>
        <div className="col-md-4">
          <h5 style={{ lineHeight: "3.5" }}>
            {" "}
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account opening
          </h5>

          <a href="#" style={{ textDecoration: "none" }}>
            <p>Create Zerodha account</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>KYC and documentation</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Charges and fees</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Account closure</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Getting started with Zerodha</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Other account issues</p>
          </a>
        </div>

        <div className="col-md-4">
          <h5 style={{ lineHeight: "3.5" }}>
            <i class="fa fa-user" aria-hidden="true"></i>
            Your Zerodha account
          </h5>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Login and password issues</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Funds deposit and withdrawal</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Trading and demat account</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Account settings and preferences</p>
          </a>
        </div>

        <div className="col-md-4">
          <h5 style={{ lineHeight: "3.5" }}>
            {" "}
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            Your Zerodha account
          </h5>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Login and password issues</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Funds deposit and withdrawal</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Trading and demat account</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Account settings and preferences</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Kite API</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>GTT</p>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <p>Trading FAQs</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
